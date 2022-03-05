import { useRef, useState } from "react";
import PropTypes from "prop-types";

import "./index.scss";

const InputFile = (props) => {
  const [fileName, setFileName] = useState("");
  const {
    placeholder,
    name,
    accept,
    prepend,
    append,
    className,
    inputClassName,
  } = props;
  const joinClassNames = ["input-file mb-3", className].join(" ");
  const joinInputClassNames = ["form-control", inputClassName].join(" ");

  const refInputFile = useRef(null);

  const onChange = (event) => {
    setFileName(event.target.value);
    props.onChange({
      target: {
        name: event.target.name,
        value: event.target.files,
      },
    });
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
          accept={accept}
          ref={refInputFile}
          name={name}
          className="d-none"
          type="file"
          value={fileName}
          onChange={onChange}
        />
        <input
          onClick={() => refInputFile.current.click()}
          defaultValue={fileName}
          placeholder={placeholder}
          readOnly
          className={joinInputClassNames}
        />
        {append && (
          <div className="input-group-append bg-dark">
            <span className="input-group-text">{append}</span>
          </div>
        )}
      </div>
    </div>
  );
};

InputFile.defaultProps = {
  placeholder: "Browse a file...",
};

InputFile.propTypes = {
  name: PropTypes.string.isRequired,
  accept: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  prepend: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  append: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  placeholder: PropTypes.string,
  className: PropTypes.string,
  inputClassName: PropTypes.string,
};
export default InputFile;
