import Layout from "layouts/CheckoutLayout";

import useResetPage from "hooks/useResetPage";

const Checkout = (props) => {
  useResetPage("Vacation | Checkout");

  return <Layout {...props}>Checkout</Layout>;
};

export default Checkout;
