import React from "react";
import blogData from "../data/blog-img";

export default function Blog() {
  return (
    <section className="blog-section p-80">
      <div className="container">

        <div className="text-center mb-5">
          <h5 className="text-uppercase fw-bold mb-2" 
              style={{ letterSpacing: "3px" }}>
            From Our Blog
          </h5>

          <p className="text-muted w-75 mx-auto">
            Lorem ipsum dolor sit amet consectetur adipiscing elit erat vehicula 
            ad, mollis viverra vulputate
          </p>
        </div>

        <div className="row justify-content-center">
          {blogData.map((item) => (
            <div key={item.id} className="col-md-4 mb-4">

              <div className="position-relative">
                <img
                  src={item.img}
                  alt={item.title}
                  className="img-fluid"
                  style={{ borderRadius: "4px" }}
                />

                <div
                  className="position-absolute rounded-circle text-white text-center"
                  style={{
                    top: "15px",
                    left: "15px",
                    width: "65px",
                    height: "65px",
                    background: "#F18F36",
                    paddingTop: "10px",
                    fontWeight: "600"
                  }}
                >
                  <div style={{ fontSize: "20px" }}>{item.date.day}</div>
                  <div style={{ fontSize: "14px" }}>{item.date.month}</div>
                </div>
              </div>

              <div className="mt-3 d-flex justify-content-between text-muted">
                <small>By: <strong>{item.author}</strong></small>

                <small>
                  <i className="bi bi-chat-left"></i> {item.comments}
                </small>
              </div>

              <h5 className="mt-2 fw-bold">{item.title}</h5>

              <div style={{
                width: "50px",
                height: "3px",
                background: "#F18F36",
                marginBottom: "10px"
              }}></div>

              <p className="text-muted">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}