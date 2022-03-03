import PropTypes from "prop-types";
import ReactHtmlParser from "react-html-parser";

import { validURL } from "utils/string";

const Description = ({ data }) => {
  const { features, description } = data;
  const haveFeature = features.length !== 0;
  const imageSource = (value) => {
    if (validURL(value)) {
      return value;
    }
    return `${process.env.REACT_APP_HOST}${value}`;
  };

  return (
    <main>
      <h4>About the place</h4>
      {ReactHtmlParser(description)}
      <div className="row" style={{ marginTop: 30 }}>
        {!haveFeature
          ? "Tidak Ada Feature"
          : features.map((feature, index) => {
              return (
                <div
                  key={`feature-${index}`}
                  className="col-3"
                  style={{ marginBottom: 20 }}
                >
                  <img
                    width="38"
                    className="d-block mb-2"
                    src={imageSource(feature.imageUrl)}
                    alt={feature.name}
                  />{" "}
                  <span>{feature.qty}</span>{" "}
                  <span className="text-gray-500 font-weight-light">
                    {feature.name}
                  </span>
                </div>
              );
            })}
      </div>
    </main>
  );
};

Description.propTypes = {
  data: PropTypes.object,
};

export default Description;
