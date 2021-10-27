import PropTypes from "prop-types";

import "./index.scss";

const Rating = (props) => {
  const classNames = ["stars", props.className].join(" ");
  const decimal = Number(props.value) % 1;
  const stars = [];
  const maxLoop = props.value - decimal;
  let leftPos = 0;

  for (let index = 0; index < 5 && index < maxLoop; index++) {
    leftPos += props.width;
    stars.push(
      <div
        className="star"
        key={`star-${index}`}
        style={{
          left: index * props.width,
          width: props.width,
          height: props.height,
          marginRight: props.spacing,
        }}
      ></div>
    );
  }

  if (decimal > 0 && props.value <= 5) {
    stars.push(
      <div
        className="star"
        style={{
          left: leftPos,
          height: props.height,
          width: props.width - props.spacing,
        }}
      ></div>
    );
  }

  const starsPlaceholder = [];

  for (let index = 0; index < 5; index++) {
    starsPlaceholder.push(
      <div
        className="star placeholder"
        key={`star-placeholder-${index}`}
        style={{
          left: index * props.width,
          width: props.width,
          height: props.height,
          marginRight: props.spacing,
        }}
      ></div>
    );
  }

  return (
    <>
      <div className={classNames} style={{ height: props.height }}>
        {starsPlaceholder}
        {stars}
      </div>
    </>
  );
};
Rating.propTypes = {
  value: PropTypes.number,
  height: PropTypes.number,
  width: PropTypes.number,
  spacing: PropTypes.number,
  className: PropTypes.string,
};

export default Rating;
