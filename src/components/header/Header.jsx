import React, { Fragment } from "react";

const Header = () => {
  return (
    <Fragment>
      <div className="header">
        <div className="container">
          <div className="logo">
            <img
              src="https://ik.imagekit.io/veub8tjlplror/image_c6Eyv2rtAl.png?updatedAt=1704871901710"
              alt=""
            />
          </div>
          <ul>
            <li>About</li>
            <li>Team</li>
            <li>Services</li>
            <li>Tech</li>
            <li>Products</li>
          </ul>
          <button className="common_solid">
            <span>Contact Now</span>
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
