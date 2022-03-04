import PropTypes from "prop-types";

import Header from "./Header";

const CheckoutLayout = (props) => (
  <>
    <Header center />
    {props.children}
  </>
);

CheckoutLayout.propTypes = {
  children: PropTypes.any,
};

export default CheckoutLayout;
