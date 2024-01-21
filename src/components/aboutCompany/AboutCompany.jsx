import React, { Fragment, useEffect, useRef } from "react";
import GroupIcon from "@mui/icons-material/Group";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EastIcon from "@mui/icons-material/East";

const AboutCompany = () => {
  const aboutCompanyRef = useRef(null);
  useEffect(() => {
    const aboutCompanySection = aboutCompanyRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    observer.observe(aboutCompanySection);

    // Cleanup the observer on component unmount
    return () => observer.disconnect();
  }, []);
  return (
    <Fragment>
      <div className="about_company section" ref={aboutCompanyRef}>
        <div className="left">
          <span className="shape_wrap">
            <img
              src="https://themexriver.com/wp/haptic/wp-content/uploads/2023/07/circle1.png"
              alt=""
            />
          </span>
          <div className="about_img_1">
            <img
              src="https://themexriver.com/wp/haptic/wp-content/uploads/2023/07/ab2.png"
              alt=""
            />
          </div>
          <div className="about_img_2">
            <img
              src="https://themexriver.com/wp/haptic/wp-content/uploads/2023/07/ab1.png"
              alt=""
            />
          </div>
        </div>
        <div className="right">
          <div className="top">
            <span className="sub_title">ABOUT COMPANY</span>
            <h1 className="main_title">
              We Provide Best Design Solution in City
            </h1>
          </div>
          <div className="bottom">
            <p className="small_text">
              In nec libero luctus, aliquet turpis at, vehicula nisi. Cras eget
              mauris in nisl tempus lobortis. Nunc in nisi sapien. Suspendisse
              finibus dolo et pharetra porta. Sed quam elit, lacinia vitae mi
              quis, ullamcorper imperdiet dolor.
            </p>
            <ul className="features">
              <li>
                {" "}
                <GroupIcon /> Dedicated Team
              </li>
              <li>
                <SettingsSuggestIcon /> Clean Setup
              </li>
              <li>
                <SupportAgentIcon /> 24/7 Support
              </li>
              <li> Winning Award</li>
            </ul>
            <div className="btn_wrap">
              <button className="body_common_solid">
                <span>Get Started</span>
                <EastIcon />
              </button>
              <div className="call_us">
                <div className="call_icon">
                  <LocalPhoneIcon />
                </div>
                <div className="number">
                  <p>Call Us Anytime</p>
                  <h3>0215 6856 9875</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutCompany;
