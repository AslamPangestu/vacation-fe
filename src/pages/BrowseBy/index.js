import Layout from "layouts/MainLayout";

import useResetPage from "hooks/useResetPage";

const BrowseBy = (props) => {
  useResetPage("Vacation | Browse By");

  return <Layout {...props}>Browse By</Layout>;
};

export default BrowseBy;
