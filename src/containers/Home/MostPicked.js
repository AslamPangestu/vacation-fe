import PropTypes from "prop-types";

import Button from "components/Button";

const MostPicked = (props) => {
  return (
    <section ref={props.refs} className="container">
      <h4 className="mb-3">Most Picked</h4>
      <div className="container-grid">
        {props.data.map((item, index) => (
          <div
            key={index}
            className={`item column-4 ${index === 0 ? "row-2" : "row-1"}`}
          >
            <div className="card card-featured">
              <div className="tag">
                $ {item.price}
                <span className="font-weight-light"> per {item.unit}</span>
              </div>
              <figure className="img-wrapper">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="img-cover"
                />
              </figure>
              <div className="meta-wrapper">
                <Button
                  className="stretched-link d-block text-white"
                  type="link"
                  link={`/browse-by/${item._id}`}
                  style={{ textDecoration: "none" }}
                >
                  {item.name}
                </Button>
                <span>
                  {item.city}, {item.country}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
MostPicked.propTypes = {
  data: PropTypes.array,
  refs: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};

export default MostPicked;
