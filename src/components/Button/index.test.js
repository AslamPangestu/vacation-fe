import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import Button from "./index";

describe("Not Clickable", () => {
  it("Should be disabled", () => {
    const { getByTestId } = render(<Button disabled />);
    expect(getByTestId("disabled")).toBeTruthy();
  });
  it("Should be loading", () => {
    const { getByTestId } = render(<Button loading />);
    expect(getByTestId("loading")).toBeTruthy();
  });
});

describe("Link Type", () => {
  it("Should be External Link", () => {
    const { getByTestId } = render(
      <Button type="link" link="https://www.google.com" />
    );
    expect(getByTestId("externalLink")).toBeTruthy();
  });
  it("Should be Internal Link", () => {
    const { getByTestId } = render(
      <Router>
        <Button type="link" link="/books/detail" />
      </Router>
    );
    expect(getByTestId("internalLink")).toBeTruthy();
  });
});
