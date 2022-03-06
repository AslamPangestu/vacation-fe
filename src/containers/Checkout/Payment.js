import PropTypes from "prop-types";
import Fade from "react-reveal/Fade";

import InputText from "components/Form/InputText";
import InputFile from "components/Form/InputFile";

const Payment = (props) => {
  const { data, itemDetail, checkout } = props;
  const { onChangeProofOfPayment, onChangeBankName, onChangeBankHolder } =
    props;

  const tax = 10;
  const subTotal = itemDetail.price * checkout.duration;
  const grandTotal = (subTotal * tax) / 100 + subTotal;

  return (
    <Fade>
      <div className="container" style={{ marginBottom: 30 }}>
        <div className="row justify-content-center align-items-center">
          <div className="col-5 border-right py-5" style={{ paddingRight: 80 }}>
            <Fade delay={300}>
              <p className="mb-4">Transfer Pembayaran:</p>
              <p>Tax: {tax}%</p>
              <p>Sub total: ${subTotal} USD</p>
              <p>Total: ${grandTotal} USD</p>
              <div className="row mt-4">
                <div className="col-3 text-right">
                  {/* <img src={logoBca} alt="bank central asia" width="60" /> */}
                  Logo BCA
                </div>
                <div className="col">
                  <dl>
                    <dd>Bank Central Asia</dd>
                    <dd>2208 1996</dd>
                    <dd>BuildWith Angga</dd>
                  </dl>
                </div>
              </div>

              <div className="row">
                <div className="col-3 text-right">
                  {/* <img src={logoMandiri} alt="mandiri" width="60" /> */}
                  Logo Mandiri
                </div>
                <div className="col">
                  <dl>
                    <dd>Bank Mandiri</dd>
                    <dd>2208 1996</dd>
                    <dd>BuildWith Angga</dd>
                  </dl>
                </div>
              </div>
            </Fade>
          </div>
          <div className="col-5 py-5" style={{ paddingLeft: 80 }}>
            <Fade delay={600}>
              <label htmlFor="proofPayment">Upload Bukti Transfer</label>
              <InputFile
                accept="image/*"
                id="proofPayment"
                name="proofPayment"
                value={data.proofPayment}
                onChange={onChangeProofOfPayment}
                placeholder="Select file"
              />

              <label htmlFor="bankName">Asal Bank</label>
              <InputText
                id="bankName"
                name="bankName"
                type="text"
                value={data.bankName}
                onChange={onChangeBankName}
                placeholder="Input your sender bank"
              />

              <label htmlFor="bankHolder">Nama Pengirim</label>
              <InputText
                id="bankHolder"
                name="bankHolder"
                type="text"
                value={data.bankHolder}
                onChange={onChangeBankHolder}
                placeholder="Input your holder bank name"
              />
            </Fade>
          </div>
        </div>
      </div>
    </Fade>
  );
};

Payment.propTypes = {
  data: PropTypes.object,
  itemDetail: PropTypes.object,
  checkout: PropTypes.object,
  onChangeProofOfPayment: PropTypes.func,
  onChangeBankName: PropTypes.func,
  onChangeBankHolder: PropTypes.func,
};

export default Payment;
