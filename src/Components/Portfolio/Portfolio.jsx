import React, { Component } from 'react'
import img1 from "../../assets/poert1.png";
import img2 from "../../assets/port2.png";
import img3 from "../../assets/port3.png";

export default class Portfolio extends Component {
  render() {
    return (
        <>
        <div className="text-center d-flex flex-column align-items-center justify-content-center text-portfolio">
            <h2 className="fs-1 fw-bold mt-4 mb-3 text-uppercase">portfolio component</h2>
            <div className="text-center d-flex align-items-center">
                <div className="line text-portfolio navbar-bg"></div>
                <i className="fa-solid fa-star text-white star-icon mx-2 text-portfolio " />
                <div className="line text-portfolio navbar-bg"></div>
            </div>
        </div>
        <div className="container my-4">
            <div className="row gy-4">
                <div className="col-lg-4 col-md-4-6">
                    <div className="item position-relative">
                        <img className='w-100 rounded-2' src={img1} alt=""/>
                        <div className="img-cover rounded-2">
                            <i className="fa-solid fa-plus"></i>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4-6">
                    <div className="item position-relative">
                        <img className='w-100 rounded-2' src={img2} alt=""/>
                        <div className="img-cover rounded-2">
                            <i className="fa-solid fa-plus"></i>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4-6">
                    <div className="item position-relative">
                        <img className='w-100 rounded-2' src={img3} alt=""/>
                        <div className="img-cover rounded-2">
                            <i className="fa-solid fa-plus"></i>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4-6">
                    <div className="item position-relative">
                        <img className='w-100 rounded-2' src={img1} alt=""/>
                        <div className="img-cover rounded-2">
                            <i className="fa-solid fa-plus"></i>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4-6">
                    <div className="item position-relative">
                        <img className='w-100 rounded-2' src={img2} alt=""/>
                        <div className="img-cover rounded-2">
                            <i className="fa-solid fa-plus"></i>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4-6">
                    <div className="item position-relative">
                        <img className='w-100 rounded-2' src={img3} alt=""/>
                        <div className="img-cover rounded-2">
                            <i className="fa-solid fa-plus"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
  }
}
