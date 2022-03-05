import Layout from "layouts/CheckoutLayout";

import InputFile from "components/Form/InputFile";
import InputText from "components/Form/InputText";

import useResetPage from "hooks/useResetPage";

const Checkout = (props) => {
  useResetPage("Vacation | Checkout");

  return (
    <Layout {...props}>
      Checkout
      <InputText />
      <InputFile />
    </Layout>
  );
};

export default Checkout;
