import PropTypes from "prop-types";

import Fade from "react-reveal/Fade";

import "./index.scss";

const Step = ({ style, className, data, current }) => {
  const joinClassName = ["stepper", className].join(" ");
  const dataKeys = Object.keys(data);
  const dataLength = dataKeys.length;
  return (
    <Fade>
      <ol className={joinClassName} style={style}>
        {dataKeys.map((list, index) => {
          let bulletClass = list === current ? "active" : "";
          const currentStep = index + 1;
          if (currentStep === dataLength) {
            bulletClass = "";
            return null;
          }

          return (
            <li key={`list-${index}`} className={[bulletClass].join(" ")}>
              {currentStep}
            </li>
          );
        })}
      </ol>
    </Fade>
  );
};

Step.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  data: PropTypes.object,
  current: PropTypes.string,
};
export default Step;
