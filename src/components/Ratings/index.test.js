import { render } from "@testing-library/react";
import Ratings from "./index";

describe("Props", () => {
  it("Should have [value,width,height]", () => {
    const height = 40,
      width = 40;
    const { container } = render(
      <Ratings width={width} height={height} value={3.6} />
    );
    const stars = "div.stars";
    const starYellow = stars + " div.star:not(.placeholder)";
    expect(container.querySelector(stars)).toBeInTheDocument();
    expect(container.querySelector(stars)).toHaveAttribute(
      "style",
      expect.stringContaining(`height: ${height}px`)
    );
    expect(container.querySelector(starYellow)).toBeInTheDocument();
    expect(container.querySelector(starYellow)).toHaveAttribute(
      "style",
      expect.stringContaining(`width: ${width}px`)
    );
    expect(container.querySelector(starYellow)).toHaveAttribute(
      "style",
      expect.stringContaining(`height: ${height}px`)
    );
  });
});
