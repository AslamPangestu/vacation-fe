import PropTypes from "prop-types";

import Fade from "react-reveal/Fade";

const Controller = (props) => (
  <Fade>
    <section className="container">
      <div className="row justify-content-center">
        <div className="col-3">{props.children}</div>
      </div>
    </section>
  </Fade>
);

Controller.propTypes = {
  children: PropTypes.any,
};

export default Controller;
