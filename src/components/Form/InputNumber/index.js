import { useState } from "react";
import PropTypes from "prop-types";

import "./index.scss";
import { isNumber } from "utils/validation";

const InputNumber = (props) => {
  const { value, placeholder, name, min, max, prefix, suffix, isSuffixPlural } =
    props;
  const joinClassNames = ["input-number mb-3", props.className].join(" ");

  const [inputValue, setInputValue] = useState(`${prefix} ${value} ${suffix}`);

  const onChange = (event) => {
    let inputValue = String(event.target.value);
    // Clean prefix & suffix
    if (prefix) inputValue = inputValue.replace(prefix);
    if (suffix) inputValue = inputValue.replace(suffix);

    const numericValue = Number(inputValue);
    const isValueBetween = numericValue <= max && numericValue >= min;

    if (isNumber(inputValue) && isValueBetween) {
      props.onChange({ target: { name, value: numericValue } });
      const displaySuffix =
        isSuffixPlural && numericValue > 1 ? `${suffix}s` : suffix;
      const displayValue = `${prefix} ${numericValue} ${displaySuffix}`;
      setInputValue(displayValue.trim());
    }
  };

  const onClickMinus = () => {
    const numericValue = Number(value);
    if (value > min) {
      onChange({ target: { name, value: numericValue - 1 } });
    }
  };
  const onClickPlus = () => {
    const numericValue = Number(value);
    if (value < max) {
      onChange({ target: { name, value: numericValue + 1 } });
    }
  };

  return (
    <div className={joinClassNames}>
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text bg-danger" onClick={onClickMinus}>
            -
          </span>
        </div>
        <input
          min={min}
          max={max}
          name={name}
          pattern="[0-9]*"
          className="form-control"
          placeholder={placeholder ? placeholder : "0"}
          value={String(inputValue)}
          onChange={onChange}
        />
        <div className="input-group-append">
          <span className="input-group-text bg-success" onClick={onClickPlus}>
            +
          </span>
        </div>
      </div>
    </div>
  );
};

InputNumber.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  prefix: PropTypes.string,
  suffix: PropTypes.string,
  name: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  isSuffixPlural: PropTypes.bool,
};

InputNumber.defaultProps = {
  min: 1,
  max: 1,
  prefix: "",
  suffix: "",
};

export default InputNumber;
