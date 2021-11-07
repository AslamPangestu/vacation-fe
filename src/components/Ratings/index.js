import PropTypes from "prop-types";

import "./index.scss";

const Rating = (props) => {
  const { value, height, width, className } = props;
  const classNames = ["stars", className].join(" ");
  const decimal = Number(value) % 1;
  console.log(decimal);
  const stars = [];
  const maxLoop = value - decimal;
  let leftPos = 0;

  for (let index = 0; index < 5 && index < maxLoop; index++) {
    leftPos += width;
    stars.push(
      <div
        className="star"
        key={`star-${index}`}
        style={{
          left: index * width,
          width,
          height,
        }}
      ></div>
    );
  }

  if (decimal > 0 && value <= 5) {
    stars.push(
      <div
        className="star"
        key="star-decimal"
        style={{
          left: leftPos,
          height,
          width: decimal * width,
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
          left: index * width,
          width,
          height,
        }}
      ></div>
    );
  }

  return (
    <>
      <div className={classNames} style={{ height }}>
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
  className: PropTypes.string,
};

export default Rating;
