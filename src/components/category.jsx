import React from "react";
import banner1 from "../assets/images/banner11.jpg"
import banner2 from "../assets/images/banner12.jpg"
import banner3 from "../assets/images/banner13.jpg"

export default function Catagory(){
    return(
        <div className="container p-80">
            <div className="row justify-content-center">
                <div className="col-5 position-relative">
                    <img src={banner1} alt="banner1" className="img-fluid"/>
                    <div className="banner-text-1 d-flex align-items-center gap-2 position-absolute top-50">
                        <div className="p-line"></div>
                        <a href="#"><p className="fw-bold fs-5 m-0">Hoddie</p></a>
                    </div>
                </div>
                <div className="col-5">
                    <div className="row row-gap-4">
                        <div className="col-12 position-relative">
                            <img src={banner2} alt="banner2" className="img-fluid"/>
                            <div className="banner-text-2 d-flex align-items-center gap-2 position-absolute">
                                <div className="p-line"></div>
                                <a href="#"><p className="fw-bold fs-5 m-0">Glasses</p></a>
                            </div>
                        </div>
                        <div className="col-12 position-relative">
                            <img src={banner3} alt="banner3" className="img-fluid"/>
                            <div className="banner-text-3 d-flex align-items-center gap-2 position-absolute">
                                <div className="p-line"></div>
                                <a href="#"><p className="fw-bold fs-5 m-0">Beanie</p></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}