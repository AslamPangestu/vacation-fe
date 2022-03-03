import PropTypes from "prop-types";
import Fade from "react-reveal/Fade";

import TestimonyImageFrame from "assets/img/frame_testimony.png";
import Ratings from "components/Ratings";
import Button from "components/Button";

const Testimonial = ({ data }) => (
  <Fade bottom>
    <section className="container">
      <div className="row align-items-center">
        <div className="col-auto" style={{ marginRight: 60 }}>
          <div className="testimonial-hero" style={{ margin: "30px 0 0 30px" }}>
            <img
              src={data.imageUrl}
              alt="Testimonial Image"
              className="position-absolute img-fluid"
              style={{
                zIndex: 1,
                borderRadius: "15px 15px 100px 15px",
                objectFit: "cover",
              }}
            />
            <img
              src={TestimonyImageFrame}
              alt="Testimonial Frame"
              className="position-absolute img-fluid"
              style={{ margin: `-30px 0 0 -30px` }}
            />
          </div>
        </div>
        <div className="col">
          <h4 className="text-primary-dark" style={{ marginBottom: 40 }}>
            {data.name}
          </h4>
          <Ratings value={data.rate} width={46} height={46} />
          <h5 className="h2 font-weight-light text-primary-dark line-height-2 my-3">
            {data.content}
          </h5>
          <span className="text-primary-light">
            {data.familyName}, {data.familyOccupation}
          </span>

          <div>
            <Button
              className="btn px-5 bg-primary text-white"
              style={{ marginTop: 40, paddingTop: 12 }}
              elevated
              type="link"
              link={`/testimonial/${data._id}`}
            >
              Read Their Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  </Fade>
);

Testimonial.propTypes = {
  data: PropTypes.array,
};

export default Testimonial;
