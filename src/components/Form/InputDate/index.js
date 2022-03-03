import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

import { DateRange } from "react-date-range";

import "./index.scss";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

import IcCalendar from "assets/img/icons/ic_calendar.svg";
import { formatDate } from "utils/date";

const InputDate = (props) => {
  const { value, placeholder, name } = props;
  const joinClassNames = ["input-date mb-3", props.className].join(" ");
  const [show, setShow] = useState(false);

  const onChange = (value) => {
    props.onChange({
      target: {
        value: value.selection,
        name,
      },
    });
  };

  // Handle onMouseDown
  const refDate = useRef(null);
  const handleClickOutside = (event) => {
    if (refDate && !refDate.current.contains(event.target)) {
      setShow(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const check = (focus) => {
    focus.indexOf(1) < 0 && setShow(false);
  };
  const displayDate = () => {
    const startDate = value.startDate ? formatDate(value.startDate) : "";
    const endDate = value.endDate ? formatDate(value.startDate) : "";
    return `${startDate} - ${endDate}`;
  };

  return (
    <div ref={refDate} className={joinClassNames}>
      <div className="input-group">
        <div className="input-group-prepend bg-gray-900">
          <span className="input-group-text">
            <img src={IcCalendar} alt="icon calendar" />
          </span>
        </div>
        <input
          readOnly
          type="text"
          className="form-control"
          value={displayDate()}
          placeholder={placeholder}
          onClick={() => setShow(!show)}
        />

        {show && (
          <div className="date-range-wrapper">
            <DateRange
              editableDateInputs={true}
              onChange={onChange}
              moveRangeOnFirstSelection={false}
              onRangeFocusChange={check}
              ranges={[value]}
            />
          </div>
        )}
      </div>
    </div>
  );
};

InputDate.propTypes = {
  value: PropTypes.object,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
};

export default InputDate;
