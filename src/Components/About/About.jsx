import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
    <div className="main-bg">
        <div className="container  d-flex align-items-center justify-content-center flex-column">
            <div className="home-container text-center d-flex flex-column align-items-center justify-content-center">
                <h2 className="text-light fs-1 fw-bold mt-4 mb-3">ABOUT COMPONENT</h2>
                <div className="text-center d-flex align-items-center">
                    <div className="line"></div>
                    <i className="fa-solid fa-star text-white star-icon mx-2" />
                    <div className="line"></div>
                </div>
                <div className="about-content d-flex gap-5 text-white mt-4">
                    <p>Freelancer is a free bootstrap theme created by Route. The
                        download includes the complete source files including HTML, CSS,
                        and JavaScript as well as optional SASS stylesheets for easy
                        customization.
                    </p>
                    <p>Freelancer is a free bootstrap theme created by Route. The
                        download includes the complete source files including HTML, CSS,
                        and JavaScript as well as optional SASS stylesheets for easy
                        customization.
                    </p>
                </div>
            </div>
        </div>
    </div>
    );
  }
}
