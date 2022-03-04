import PropTypes from "prop-types";
import Fade from "react-reveal/Fade";

import Button from "components/Button";

const Category = ({ data, title }) => (
  <section className="container">
    <Fade bottom>
      <h4 className="mb-3 font-weight-medium text-primary-dark">{title}</h4>
      <div className="container-grid">
        {data.length === 0 ? (
          <div className="row">
            <div className="col-auto align-items-center">
              There is no destination at this category
            </div>
          </div>
        ) : (
          data.map((item, index) => (
            <div key={index} className="item column-3 row-1">
              <Fade bottom delay={300 * index}>
                <div className="card card-without-border">
                  {item.isPopular && (
                    <div className="tag">
                      Popular <span className="font-weight-light">Choice</span>
                    </div>
                  )}
                  <figure className="img-wrapper" style={{ height: 180 }}>
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="img-cover"
                    />
                  </figure>
                  <div className="meta-wrapper">
                    <Button
                      className="stretched-link d-block text-primary-dark"
                      type="link"
                      link={`/browse-by/${item._id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <h5 className="h4">{item.name}</h5>
                    </Button>
                    <span className="text-primary-light">
                      {item.city}, {item.country}
                    </span>
                  </div>
                </div>
              </Fade>
            </div>
          ))
        )}
      </div>
    </Fade>
  </section>
);

Category.propTypes = {
  data: PropTypes.array,
  title: PropTypes.string,
};

export default Category;
