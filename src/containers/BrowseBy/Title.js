import PropTypes from "prop-types";
import Fade from "react-reveal/Fade";

import Breadcrumbs from "components/Breadcrumbs";

const Title = ({ data, breadcrumbs }) => (
  <section className="container spacing-sm">
    <Fade bottom>
      <div className="row align-items-center">
        <div className="col">
          <Breadcrumbs data={breadcrumbs} />
        </div>
        <div className="col-auto text-center">
          <h1 className="h2">{data.name}</h1>
          <span className="text-gray-400">
            {data.city}, {data.country}
          </span>
        </div>
        <div className="col"></div>
      </div>
    </Fade>
  </section>
);

Title.propTypes = {
  data: PropTypes.object,
  breadcrumbs: PropTypes.array,
};

export default Title;
