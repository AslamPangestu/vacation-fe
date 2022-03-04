import PropTypes from "prop-types";
import Fade from "react-reveal/Fade";

import Button from "components/Button";
import Brand from "components/Brand";

const Header = ({ location, center }) => {
  if (center) {
    return (
      <Fade>
        <header className="spacing-sm">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
              <Button className="brand-text-icon mx-auto" href="" type="link">
                Stay<span className="text-gray-900">cation.</span>
              </Button>
            </nav>
          </div>
        </header>
      </Fade>
    );
  }
  const MENUS = [
    { label: "Home", path: "/" },
    { label: "Browse By", path: "/browse-by" },
    { label: "Stories", path: "/stories" },
    { label: "Agents", path: "/agents" },
  ];
  const getNavLinkClass = (path) => {
    const currentPath = `/${location.pathname.split("/")[1]}`;
    return currentPath === path ? " active" : "";
  };

  return (
    <Fade left>
      <header className="spacing-sm">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <Brand />
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ms-auto">
                {MENUS.map((item, idx) => (
                  <li
                    key={idx}
                    className={`nav-item${getNavLinkClass(item.path)}`}
                  >
                    <Button className="nav-link" type="link" link={item.path}>
                      {item.label}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </Fade>
  );
};

// https://github.com/yannickcr/eslint-plugin-react/issues/1109#issuecomment-356557495
Header.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
  center: PropTypes.bool,
};

export default Header;
