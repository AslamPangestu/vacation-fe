import PropTypes from "prop-types";

import Fade from "react-reveal/Fade";

const Title = ({ data, current }) => {
  return (
    <Fade delay={300}>
      <div className="text-center" style={{ marginBottom: 30 }}>
        <h1 className="h2">{data[current] && data[current].title}</h1>
        <p className="lead text-primary-light">
          {data[current] && data[current].description}
        </p>
      </div>
    </Fade>
  );
};

Title.propTypes = {
  data: PropTypes.object,
  current: PropTypes.string,
};

export default Title;
