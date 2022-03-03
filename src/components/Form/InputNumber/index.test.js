import { useState } from "react";
import { render, fireEvent } from "@testing-library/react";
import Component from "./index";

const TestComponent = () => {
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
  const { container } = render(<TestComponent />);
  const input = container.querySelector(`input.form-control[name='value']`);
  const plusButton = container.querySelector(`span.input-group-text.plus`);
  const minusButton = container.querySelector(`span.input-group-text.minus`);

  return { input, plusButton, minusButton };
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

it("Should increase number when click button plus", () => {
  const { plusButton, input } = setup();
  fireEvent.click(plusButton, { button: 1 });
  expect(input.value.trim()).toBe("1");
});

it("Should decrease number when click button minus", () => {
  const { minusButton, plusButton, input } = setup();
  fireEvent.click(plusButton, { button: 1 });
  fireEvent.click(plusButton, { button: 1 });
  fireEvent.click(minusButton, { button: 1 });
  expect(input.value.trim()).toBe("1");
});
