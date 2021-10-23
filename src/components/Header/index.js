import PropTypes from "prop-types";

import Button from "components/Button";
import Brand from "components/Brand";

const Header = (props) => {
  const MENUS = [
    { label: "Home", path: "/" },
    { label: "Browse By", path: "/browse-by" },
    { label: "Stories", path: "/stories" },
    { label: "Agents", path: "/agents" },
  ];
  const getNavLinkClass = (path) => {
    return props.location.pathname === path ? "active" : "";
  };

  return (
    <header className="spacing-sm">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <Brand />
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              {MENUS.map((item, idx) => (
                <li
                  key={idx}
                  className={`nav-item ${getNavLinkClass(item.path)}`}
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
  );
};

// https://github.com/yannickcr/eslint-plugin-react/issues/1109#issuecomment-356557495
Header.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};

export default Header;
