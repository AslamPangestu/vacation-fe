import PropTypes from "prop-types";

import Header from "./Header";
import Footer from "./Footer";

const MainLayout = (props) => (
  <>
    <Header {...props} />
    {props.children}
    <Footer />
  </>
);

MainLayout.propTypes = {
  children: PropTypes.any,
};

export default MainLayout;
