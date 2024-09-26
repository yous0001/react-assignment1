import React, { Component } from "react";
import avatar from "../../assets/avataaars.svg";
export default class Home extends Component {
  render() {
    return (
        <div className="main-bg d-flex align-items-center justify-content-center">
            <div className="home-container text-center d-flex flex-column align-items-center justify-content-center">
                <img src={avatar} className="avatar-img" alt="avatar img" />
                <h2 className="text-light fs-1 fw-bold mt-4 mb-3">START FRAMEWORK</h2>
                <div className="text-center d-flex align-items-center">
                    <div className="line"></div>
                    <i className="fa-solid fa-star text-white star-icon mx-2" />
                    <div className="line"></div>
                </div>
                <p className="text-white mt-3">Graphic Artist - Web Designer - Illustrator</p>
            </div>
        </div>
    );
  }
}
