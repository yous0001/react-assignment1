import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
        <>
            <div className="text-center d-flex flex-column align-items-center justify-content-center text-portfolio my-5">
                    <h2 className="fs-1 fw-bold mt-4 mb-3 text-uppercase">conatct section</h2>
                    <div className="text-center d-flex align-items-center">
                        <div className="line text-portfolio navbar-bg"></div>
                        <i className="fa-solid fa-star text-white star-icon mx-2 text-portfolio " />
                        <div className="line text-portfolio navbar-bg"></div>
                    </div>

                    <div className="form d-flex flex-column gap-5 my-5 w-50 mx-auto">
                        <input className='w-100 p-2' type="text" placeholder='userName'/>
                        <input className='w-100 p-2' type="text" placeholder='userAge'/>
                        <input className='w-100 p-2' type="text" placeholder='userEmail'/>
                        <input className='w-100 p-2' type="text" placeholder='userPassword'/>
                    </div>
            </div>
        </>
    )
  }
}
