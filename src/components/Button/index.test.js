import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import Component from "./index";

describe("Not Clickable", () => {
  it("Should be disabled", () => {
    const { getByTestId } = render(<Component disabled />);
    expect(getByTestId("disabled")).toBeTruthy();
  });
  it("Should be loading", () => {
    const { getByTestId } = render(<Component loading />);
    expect(getByTestId("loading")).toBeTruthy();
  });
});

describe("Link Type", () => {
  it("Should be External Link", () => {
    const { getByTestId } = render(
      <Component type="link" link="https://www.google.com" />
    );
    expect(getByTestId("externalLink")).toBeTruthy();
  });
  it("Should be Internal Link", () => {
    const { getByTestId } = render(
      <Router>
        <Component type="link" link="/books/detail" />
      </Router>
    );
    expect(getByTestId("internalLink")).toBeTruthy();
  });
});
