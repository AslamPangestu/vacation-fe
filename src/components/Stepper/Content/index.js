import PropTypes from "prop-types";

import Fade from "react-reveal/Fade";

const Content = ({ data, current }) => (
  <Fade>{data[current] && data[current].content}</Fade>
);

Content.propTypes = {
  data: PropTypes.object,
  current: PropTypes.string,
};

export default Content;
