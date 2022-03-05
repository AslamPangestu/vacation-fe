import PropTypes from "prop-types";
import ReactHtmlParser from "react-html-parser";

import { getImageSource } from "utils/string";

const Description = ({ data }) => {
  const { features, description } = data;
  const haveFeature = features.length !== 0;

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
                    src={getImageSource(feature.imageUrl)}
                    alt={feature.name}
                  />{" "}
                  <span>{feature.qty}</span>{" "}
                  <span className="text-primary-light font-weight-light">
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
