import PropTypes from "prop-types";
import Fade from "react-reveal/Fade";

import InputText from "components/Form/InputText";

import { getImageSource } from "utils/string";

const BookingInfo = (props) => {
  const { data, itemDetail, checkout } = props;
  const { onChangeFirstName, onChangeLastName, onChangeEmail, onChangePhone } =
    props;
  const duration = parseInt(checkout.duration);
  const isDurationPlural = duration > 1;
  const totalPrice = duration * itemDetail.price;

  return (
    <Fade>
      <div className="container" style={{ marginBottom: 30 }}>
        <div className="row justify-content-center align-items-center">
          <div className="col-5 border-right py-5" style={{ paddingRight: 80 }}>
            <Fade delay={300}>
              <div className="card">
                <figure className="img-wrapper" style={{ height: 270 }}>
                  <img
                    className="img-cover"
                    src={getImageSource(itemDetail.imageUrls[0].url)}
                    alt={itemDetail.name}
                  />
                </figure>
                <div className="row align-items-center">
                  <div className="col">
                    <div className="meta-wrapper">
                      <h5>{itemDetail.name}</h5>
                      <span className="text-primary-light">
                        {itemDetail.city}, {itemDetail.country}
                      </span>
                    </div>
                  </div>
                  <div className="col-auto">
                    <span>
                      ${totalPrice} USD
                      <span className="text-primary-light"> per </span>
                      {duration} {itemDetail.unit}
                      {isDurationPlural && "s"}
                    </span>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
          <div className="col-5 py-5" style={{ paddingLeft: 80 }}>
            <Fade delay={600}>
              <label htmlFor="firstName">First Name</label>
              <InputText
                id="firstName"
                name="firstName"
                value={data.firstName}
                onChange={onChangeFirstName}
              />

              <label htmlFor="lastName">Last Name</label>
              <InputText
                id="lastName"
                name="lastName"
                value={data.lastName}
                onChange={onChangeLastName}
              />

              <label htmlFor="email">Email Address</label>
              <InputText
                id="email"
                name="email"
                type="email"
                value={data.email}
                onChange={onChangeEmail}
              />

              <label htmlFor="phone">Phone Number</label>
              <InputText
                id="phone"
                name="phone"
                type="tel"
                value={data.phone}
                onChange={onChangePhone}
              />
            </Fade>
          </div>
        </div>
      </div>
    </Fade>
  );
};

BookingInfo.propTypes = {
  data: PropTypes.object,
  itemDetail: PropTypes.object,
  checkout: PropTypes.object,
  onChangeFirstName: PropTypes.func,
  onChangeLastName: PropTypes.func,
  onChangeEmail: PropTypes.func,
  onChangePhone: PropTypes.func,
};

export default BookingInfo;
