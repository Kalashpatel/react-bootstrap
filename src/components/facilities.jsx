import React from "react";
import features from "../data/features";

export default function Facilities(){
    return (
    <div className="container p-80">
      <div className="row text-center facilities p-5">

        {features.map(({ id, icon, title, description }) => (
          <div key={id} className="col-md-3">
            <i className={icon} style={{ fontSize: "40px", color: "#f28c28", marginBottom: "15px" }}></i>

            <h5 className="fw-bold mt-3">{title}</h5>
            <p style={{ color: "#6c757d" }}>{description}</p>
          </div>
        ))}

      </div>
    </div>
  );
}