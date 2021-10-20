import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { validURL } from "utils/string";

const Button = (props) => {
  const classNames = ["btn", props.className];
  if (props.size === "small") classNames.push("btn-sm");
  if (props.size === "medium") classNames.push("btn-md");
  if (props.size === "large") classNames.push("btn-lg");
  if (props.color) classNames.push(`btn-${props.color}`);

  const className = classNames.join(" ");

  if (props.loading || props.disabled) {
    return (
      <button
        data-testid="disabled"
        className={className}
        style={props.style}
        disabled
      >
        {props.loading ? (
          <div
            data-testid="loading"
            className="spinner-border spinner-border-sm mx-5"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          props.children
        )}
      </button>
    );
  }
  // LINK
  if (props.type === "link") {
    // IS_EXTERNAL / IS_INTERNAL
    const IS_EXTERNAL = validURL(props.link);
    if (IS_EXTERNAL) {
      return (
        <a
          data-testid="externalLink"
          href={props.link}
          className={className}
          style={props.style}
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.children}
        </a>
      );
    } else {
      return (
        <Link
          data-testid="internalLink"
          to={props.link}
          className={className}
          style={props.style}
        >
          {props.children}
        </Link>
      );
    }
  }
  // BUTTON
  return (
    <button
      className={className}
      style={props.style}
      onClick={props.onClick}
      type={props.type}
    >
      {props.children}
    </button>
  );
};

Button.defaultProps = {
  type: "button",
  disabled: false,
  loading: false,
  size: "medium",
};

Button.propTypes = {
  // Functionality
  children: PropTypes.any,
  type: PropTypes.oneOf(["button", "link", "submit"]),
  onClick: PropTypes.func,
  link: PropTypes.string,
  // Styles
  className: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

export default Button;
