import { useState } from "react";
import PropTypes from "prop-types";

import "./index.scss";

const InputText = (props) => {
  const {
    value,
    type,
    placeholder,
    name,
    prepend,
    append,
    className,
    inputClassName,
    errorResponse,
  } = props;
  const joinClassNames = ["input-text mb-3", className].join(" ");
  const joinInputClassNames = ["form-control", inputClassName].join(" ");
  const [hasError, setHasError] = useState(null);

  // Set Pattern
  let pattern = "";
  if (type === "email") pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (type === "tel") pattern = "[0-9]*";

  const onChange = (event) => {
    const target = {
      target: {
        name,
        value: event.target.value,
      },
    };

    if (type === "email") {
      if (!pattern.test(event.target.value)) setHasError(errorResponse);
      else setHasError(null);
    }

    if (type === "tel") {
      if (event.target.validity.valid) props.onChange(target);
    } else {
      props.onChange(target);
    }
  };
  return (
    <div className={joinClassNames}>
      <div className="input-group">
        {prepend && (
          <div className="input-group-prepend bg-dark">
            <span className="input-group-text">{prepend}</span>
          </div>
        )}
        <input
          name={name}
          type={type}
          pattern={pattern}
          className={joinInputClassNames}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
        {append && (
          <div className="input-group-append bg-dark">
            <span className="input-group-text">{append}</span>
          </div>
        )}
      </div>
      {hasError && <span className="error-helper">{hasError}</span>}
    </div>
  );
};

InputText.defaultProps = {
  type: "text",
  pattern: "",
  placeholder: "Please type here...",
  errorResponse: "Please match the requested format.",
};

InputText.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  onChange: PropTypes.func.isRequired,
  prepend: PropTypes.string,
  append: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  inputClassName: PropTypes.string,
  errorResponse: PropTypes.string,
};

export default InputText;
