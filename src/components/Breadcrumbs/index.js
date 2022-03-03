import PropTypes from "prop-types";

import Button from "components/Button";

const Breadcrumbs = ({ className, data }) => {
  const joinClassNames = ["breadcrumb", className].join(" ");
  const isEndOfBreadcrumb = (currentIndex) => {
    const maxData = data.length - 1;
    return currentIndex === maxData;
  };

  return (
    <nav aria-label="breadcrumb">
      <ol className={joinClassNames}>
        {data.map((item, index) => (
          <li
            key={`breadcrumb-${index}`}
            className={`breadcrumb-item${
              isEndOfBreadcrumb(index) ? " active" : ""
            }`}
          >
            {isEndOfBreadcrumb(index) ? (
              item.title
            ) : (
              <Button type="link" link={item.link}>
                {item.title}
              </Button>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

Breadcrumbs.propTypes = {
  data: PropTypes.array,
  className: PropTypes.string,
};

export default Breadcrumbs;
