import { useState } from "react";
import { render, fireEvent } from "@testing-library/react";
import Component from "./index";

const TestComponent = () => {
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Component onChange={(e) => handleChange(e)} name="value" value={value} />
  );
};

const setup = () => {
  const { container } = render(<TestComponent />);

  const wrapper = container.querySelector(`.input-date`);
  const input = container.querySelector(`input.form-control`);

  return { container, wrapper, input };
};

it("Should have wrapper with classname form-control", () => {
  const { wrapper } = setup();
  expect(wrapper).toBeInTheDocument();
});

it("Should have tag input & has classname form-control", () => {
  const { input } = setup();
  expect(input).toBeInTheDocument();
});

it("Should show datepicker dialog when click input field", () => {
  const { container, input } = setup();

  fireEvent.click(input, { button: 1 });
  const datePickerWrapper = container.querySelector(`.date-range-wrapper`);

  expect(datePickerWrapper).toBeInTheDocument();
});
