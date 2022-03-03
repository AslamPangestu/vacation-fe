import { useState } from "react";
import { render, fireEvent } from "@testing-library/react";
import Component from "./index";

const TestInput = () => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Component
      max={30}
      onChange={(e) => handleChange(e)}
      name="value"
      value={value}
    />
  );
};

const setup = () => {
  const { container } = render(<TestInput />);
  const input = container.querySelector(`input.form-control[name='value']`);

  return {
    input,
  };
};

it("Should able to change value", () => {
  const { input } = setup();

  fireEvent.change(input, { target: { value: 23 } });
  expect(input.value.trim()).toBe("23");
});

it("Should not be able to change when reach max value", () => {
  const { input } = setup();

  fireEvent.change(input, { target: { value: 33 } });
  expect(input.value.trim()).toBe("");
});
