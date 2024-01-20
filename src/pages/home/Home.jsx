import React, { Fragment, useEffect, useRef } from "react";
import Mainbanner from "../../components/mainBanner/Mainbanner";

import EastIcon from "@mui/icons-material/East";
import ServiceSlider from "../../components/slider/serviceSlider/ServiceSlider";
import { ServiceSliderData } from "../../utils/localData/sliderData/SliderData";

import AboutCompany from "../../components/aboutCompany/AboutCompany";
import WhyChooseUs from "../../components/whyChooseUs/WhyChooseUs";

const Home = () => {
  return (
    <Fragment>
      <div className="main">
        <Mainbanner />
        <div className="main_body">
          <div className="container">
            <AboutCompany />
          </div>
          <div className="services">
            <div className="container">
              <div className="title_wrap">
                <div className="inner">
                  <span className="sub_title">ABOUT COMPANY</span>
                  <h1 className="main_title">
                    Unlock Revenue Grow for you Business
                  </h1>
                </div>
                <div className="btn_wrap">
                  <button className="body_common_solid">
                    <span>Get Started</span>
                    <EastIcon />
                  </button>
                </div>
              </div>
            </div>
            <div className="service_slider">
              <ServiceSlider data={ServiceSliderData} />
            </div>
          </div>
          <WhyChooseUs />
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
