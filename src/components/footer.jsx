import React from "react";

export default function Footer() {
  return (
    <>
      <section className="footer-newsletter p-80">
        <div className="container text-center">
          <h6 className="text-uppercase fw-bold mb-2" style={{ letterSpacing: "2px", color: "#E4792A" }}>
            Newsletter
          </h6>

          <h2 className="fw-bold mb-3">Get Discount 30% Off</h2>

          <p className="text-muted mb-4">
            Suspendisse netus proin eleifend fusce sollicitudin potenti vel  
            <br />
            magnis nascetur
          </p>

          <div className="d-flex justify-content-center">
            <div className="input-group w-50">
              <input
                type="email"
                className="form-control py-3 rounded-start-pill"
                placeholder="Enter your email ..."
              />
              <button className="btn btn-dark px-4 rounded-end-pill fw-bold">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-4 footer">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              <p className="m-0 text-muted">
                © Copyright 2020 <span className="fw-bold">Akasha</span>. All Rights Reserved.
              </p>
            </div>

            <div className="col-md-6 text-center text-md-end">
              <div className="d-flex justify-content-center justify-content-md-end gap-3">

                <a href="#" className="text-dark fs-4 bg-dark text-white p-2 rounded-circle d-inline-flex 
                  align-items-center justify-content-center" style={{ width: "45px", height: "45px" }}>
                  <i className="bi bi-facebook"></i>
                </a>

                <a href="#" className="text-dark fs-4 bg-dark text-white p-2 rounded-circle d-inline-flex 
                  align-items-center justify-content-center" style={{ width: "45px", height: "45px" }}>
                  <i className="bi bi-instagram"></i>
                </a>

                <a href="#" className="text-dark fs-4 bg-dark text-white p-2 rounded-circle d-inline-flex 
                  align-items-center justify-content-center" style={{ width: "45px", height: "45px" }}>
                  <i className="bi bi-twitter"></i>
                </a>

                <a href="#" className="text-dark fs-4 bg-dark text-white p-2 rounded-circle d-inline-flex 
                  align-items-center justify-content-center" style={{ width: "45px", height: "45px" }}>
                  <i className="bi bi-pinterest"></i>
                </a>

              </div>
            </div>

          </div>
        </div>
      </footer>
    </>
  );
}