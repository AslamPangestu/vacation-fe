import Layout from "containers/MainLayout";

import useResetPage from "hooks/useResetPage";

const BrowseBy = (props) => {
  useResetPage("Staycation | Browse By");

  return <Layout {...props}>Browse By</Layout>;
};

export default BrowseBy;
