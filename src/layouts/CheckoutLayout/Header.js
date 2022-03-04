import Fade from "react-reveal/Fade";

import Brand from "components/Brand";

const Header = () => {
  return (
    <Fade>
      <header className="spacing-sm">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className=" mx-auto">
              <Brand />
            </div>
          </nav>
        </div>
      </header>
    </Fade>
  );
};

export default Header;
