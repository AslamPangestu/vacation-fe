/* eslint-disable react/prop-types */
import { useState } from "react";
import { render, fireEvent } from "@testing-library/react";
import Component from "./index";

const TestComponent = ({ type }) => {
  const [value, setValue] = useState("");
  const defaultType = type || "text";

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Component
      onChange={(e) => handleChange(e)}
      name="value"
      type={defaultType}
      value={value}
    />
  );
};
const setup = (type) => {
  const { container } = render(<TestComponent type={type} />);
  const input = container.querySelector("input.form-control[name='value']");

  return { input, container };
};

it("Should able to change value", () => {
  const { input, container } = setup("email");

  fireEvent.change(input, { target: { value: "test@mail.com" } });
  const error = container.querySelector(".error-helper");
  expect(input.value.trim()).toBe("test@mail.com");
  expect(error).toBeNull();
});

describe("Input Type", () => {
  it("Should be validate email", () => {
    const { input, container } = setup("email");
    fireEvent.change(input, { target: { value: "hahaha" } });
    const error = container.querySelector(".error-helper");
    expect(error).toBeInTheDocument();
  });
  it("Should be validate telephone", () => {
    const { input } = setup("tel");
    fireEvent.change(input, { target: { value: "hahaha" } });
    expect(input.value.trim()).toBe("");
  });
});
