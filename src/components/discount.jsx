import React from "react";

export default function Discount(){
    return(
        <div className="container p-80 discount-banner">
            <div className="row justify-content-center p-5 text-center">
                <div className="col-5">
                    <p className="text-primary fs-4 m-0">30 NOV - 3 DEC</p>
                    <h2 className="text-primary display-2">New Collection</h2>
                    <div className="discount-banner-text mt-3">
                        <h2>50% Off / Selected items</h2>
                        <p className="mt-2 mb-1">Mus venenatis habitasse leo malesuada lacus<br/> commodo faucibus torquent donec</p>
                        <button class="px-4 py-2 mt-2 btn-custome rounded-pill">Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}