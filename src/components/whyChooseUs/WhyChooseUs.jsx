import React, { Fragment, useEffect, useRef } from "react";
import shape4 from "../../assets/shapes/shape4.webp";
import shape3 from "../../assets/shapes/shape3.webp";
import shape2 from "../../assets/shapes/shape2.webp";
import shape1 from "../../assets/shapes/shape1.webp";
import serviceImg from "../../assets/images/service1.webp";

const WhyChooseUs = () => {
  const serviceRef = useRef(null);
  useEffect(() => {
    const aboutCompanySection = serviceRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          } 
          // else {
          //   entry.target.classList.remove("animate");
          // }
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
      <div className="why_choose_us section container" ref={serviceRef}>
        <div className="left">
          <div className="img_wrap">
            <div className="parent">
              <img src={shape1} alt="" className="shape1" />
              <img src={shape2} alt="" className="shape2" />
              <img src={shape3} alt="" className="shape3" />
              <img src={shape4} alt="" className="shape4" />
              <img src={serviceImg} alt="" className="service_img" />
            </div>
          </div>
        </div>
        <div className="right">
          <div className="top">
            <span className="sub_title">WHY CHOOSE US</span>
            <h1 className="main_title">Experts Services to Change Business</h1>
            <p className="small_text">
              In nec libero luctus, aliquet turpis at, vehicula nisi. Cras eget
              mauris in nisl tempus lobortis. Nunc in nisi sapien. Suspendisse
              finibus dolo et pharetra porta. Sed quam elit, lacinia vitae mi
              quis,
            </p>
          </div>
          <ul className="features">
            <li>
              <div className="icon"></div>
              <p>Responsive Design</p>
            </li>
            <li>
              <div className="icon"></div>
              <p>Productive Software</p>
            </li>
            <li>
              <div className="icon"></div>
              <p>Quality Product</p>
            </li>
            <li>
              <div className="icon"></div>
              <p>24/7 Online Support</p>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default WhyChooseUs;
