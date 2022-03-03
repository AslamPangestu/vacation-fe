import { useState } from "react";

import Layout from "containers/MainLayout";
import InputNumber from "components/Form/InputNumber";

const DetailProduct = (props) => {
  const [countNight, setCountNight] = useState("1");

  const onChangeNight = (event) => {
    setCountNight(event.target.value);
  };

  return (
    <Layout {...props}>
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
