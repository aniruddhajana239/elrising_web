import React, { Fragment, useEffect, useRef } from "react";

const BestWork = () => {
  const portfolio = useRef(null);
  useEffect(() => {
    const portfolioSection = portfolio.current;

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

    observer.observe(portfolioSection);

    // Cleanup the observer on component unmount
    return () => observer.disconnect();
  }, []);
  return (
    <Fragment>
      <div className="portfolio our_best container" ref={portfolio}>
        <div className="heading">
          <h1>Our Best Projects</h1>
          <div className="inner_heading">
            <span className="sub_title">OUR PROJECTS</span>
            <p className="main_title">Explore Our Best Recently</p>
            <p className="main_title">Completed Projects</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BestWork;
