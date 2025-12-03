import React from "react";
import PreFooter from "../data/preFooter";

export default function PreFooterGrid(){
    return(
            <div className="row p-4">
                {PreFooter.map(({id, src}) => (
                    <div className="prefooter-grid" key={id}>
                        <img src={src} alt="prefooter image" className="img-fluid"/>
                    </div>
                ))}
            </div>
    )
}