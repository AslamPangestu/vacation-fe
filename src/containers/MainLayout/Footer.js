import Button from "components/Button";
import Brand from "components/Brand";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-auto" style={{ width: 350 }}>
            <Brand />
            <p className="brand-tagline">
              We kaboom your beauty holiday instantly and memorable.
            </p>
          </div>
          <div className="col-auto me-5">
            <h6 className="mt-2">For Beginners</h6>
            <ul className="list-group list0group-flush">
              <li className="list-group-item">
                <Button type="link" link="/register">
                  New Account
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" link="/browse-by">
                  Start Booking a Room
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" link="/payments">
                  Use Payments
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-auto me-5">
            <h6 className="mt-2">Explore Us</h6>
            <ul className="list-group list0group-flush">
              <li className="list-group-item">
                <Button type="link" link="/about">
                  About
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" link="/privacy-police">
                  Privacy Policy
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" link="/terms">
                  Terms & conditions
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-auto">
            <h6 className="mt-2">Connect Us</h6>
            <ul className="list-group list0group-flush">
              <li className="list-group-item">
                <Button type="link" link="mailto:support@vacation.id">
                  support@vacation.id
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" link="tel:+622115154879">
                  021 - 15154879
                </Button>
              </li>
              <li className="list-group-item">
                <span>Alamat Kantor, Daerah, Kota</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col text-center copyrights">
            Copyright 2019 . All rights reserved . Staycation
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
