import PropTypes from "prop-types";
import Fade from "react-reveal/Fade";

import { getImageSource } from "utils/string";

const FeatureImages = ({ data }) => {
  const imageClass = (index) => {
    const defaultClass = "item";
    const isMainImage = index === 0;
    if (isMainImage) {
      return `${defaultClass} column-7 row-2`;
    }
    return `${defaultClass} column-5 row-1`;
  };

  return (
    <section className="container">
      <div className="container-grid sm">
        {data.map((item, index) => {
          return (
            <div key={`FeaturedImage-${index}`} className={imageClass(index)}>
              <Fade bottom delay={300 * index}>
                <div className="card h-100">
                  <figure className="img-wrapper">
                    <img
                      className="img-cover"
                      src={getImageSource(item.url)}
                      alt={item._id}
                    />
                  </figure>
                </div>
              </Fade>
            </div>
          );
        })}
      </div>
    </section>
  );
};

FeatureImages.propTypes = {
  data: PropTypes.array,
};

export default FeatureImages;
