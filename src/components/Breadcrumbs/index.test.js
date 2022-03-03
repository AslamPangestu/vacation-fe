import { render } from "@testing-library/react";
import Component from "./index";
import { BrowserRouter as Router } from "react-router-dom";

const setup = () => {
  const breadcrumbList = [
    { title: "Home", link: "" },
    { title: "House Details", link: "" },
  ];
  const { container } = render(
    <Router>
      <Component data={breadcrumbList} />
    </Router>
  );
  const breadcrumbs = container.querySelector(`.breadcrumb`);

  return { breadcrumbs };
};

it("Should have <ol> with className .breadcrumb and have text Home & House Details", () => {
  const { breadcrumbs } = setup();

  expect(breadcrumbs).toBeInTheDocument();
  expect(breadcrumbs).toHaveTextContent("Home");
  expect(breadcrumbs).toHaveTextContent("House Details");
});
