import { useState } from "react";

import Layout from "containers/MainLayout";
import Breadcrumbs from "components/Breadcrumbs";
import InputNumber from "components/Form/InputNumber";

const DetailProduct = (props) => {
  const [countNight, setCountNight] = useState("1");
  // eslint-disable-next-line no-unused-vars
  const [breadcrumbItems, setBreadcrumbsItems] = useState([
    { title: "Home", link: "/" },
    { title: "Product", link: "/" },
    { title: "Detail", link: "" },
  ]);

  const onChangeNight = (event) => {
    setCountNight(event.target.value);
  };

  return (
    <Layout {...props}>
      <Breadcrumbs data={breadcrumbItems} />
      <InputNumber
        value={countNight}
        suffix="night"
        name="night"
        isSuffixPlural
        max={30}
        onChange={onChangeNight}
      />
    </Layout>
  );
};

export default DetailProduct;
