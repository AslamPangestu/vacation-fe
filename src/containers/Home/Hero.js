import PropTypes from "prop-types";
import Fade from "react-reveal/Fade";

import Button from "components/Button";

import BannerImage from "assets/img/img_banner.png";
import BannerImageFrame from "assets/img/frame_banner.png";

import IcTraveler from "assets/img/icons/ic_traveler.svg";
import IcCities from "assets/img/icons/ic_cities.svg";
import IcTreasure from "assets/img/icons/ic_treasure.svg";

import { formatNumber } from "utils/string";

const Hero = (props) => {
  const STATISTICS = [
    { icon: IcTraveler, count: props.travelers, name: "travelers" },
    { icon: IcCities, count: props.cities, name: "cities" },
    { icon: IcTreasure, count: props.treasures, name: "treasures" },
  ];
  const bannerSize = { width: 500, height: 375.95 };
  const showMostPicked = () => {
    window.scrollBy({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  };

  return (
    <Fade bottom>
      <section className="container pt-4">
        <div className="row pt-4">
          <div className="col pe-5">
            <h1 className="font-weight-bold line-height-1 mb-3">
              Forget Busy Work, <br /> Start Next Vacation
            </h1>
            <p
              className="mb-4 font-weight-light text-primary-light w-75"
              style={{ lineHeight: 1.5 }}
            >
              We provide what you need to enjoy your holiday with family. Time
              to make another memorable moments.
            </p>
            <Button
              className="btn px-5 bg-primary text-white"
              elevated
              onClick={showMostPicked}
            >
              Show Me Now
            </Button>
            <div className="row mt-5">
              {STATISTICS.map((item, idx) => (
                <div key={idx} className="col-4">
                  <img
                    width="36"
                    height="36"
                    src={item.icon}
                    alt={`${item.count} ${item.name}`}
                  />
                  <h6 className="mt-3">
                    {formatNumber(item.count)}{" "}
                    <span className="text-primary-light font-weight-light">
                      {item.name}
                    </span>
                  </h6>
                </div>
              ))}
            </div>
          </div>
          <div className="col ps-5" style={{ marginTop: 35 }}>
            <img
              src={BannerImage}
              alt=""
              className="img-fluid position-absolute"
              style={{
                margin: "-30px 0 0 -30px",
                zIndex: 1,
                ...bannerSize,
              }}
            />
            <img
              src={BannerImageFrame}
              alt=""
              className="img-fluid position-absolute"
              style={{ margin: "0 -30px -30px 0", ...bannerSize }}
            />
          </div>
        </div>
      </section>
    </Fade>
  );
};

Hero.propTypes = {
  travelers: PropTypes.number,
  cities: PropTypes.number,
  treasures: PropTypes.number,
  refMostPicked: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};

export default Hero;
