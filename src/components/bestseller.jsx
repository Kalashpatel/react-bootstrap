import React from "react";
import products from "../data/bestseller";

export default function Bestseller() {
  return (
    <div className="container p-80 text-center">
      <div className="title">
        <h2 className="p-2 mb-4">Best Seller</h2>
        <p>
          Made with care for your little ones, our products are perfect for
          every
          <br /> occasion. Check it out.
        </p>
      </div>
      <div className="row g-4">
        {products.map((product) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={product.id}>
            <div className="card border-0 text-center">
              <img
                src={product.img}
                className="card-img-top"
                alt={product.title}
              />

              <div className="card-body">
                <ul className="d-flex gap-2 justify-content-center">
                  <li><i class="bi bi-star"></i></li>
                  <li><i class="bi bi-star"></i></li>
                  <li><i class="bi bi-star"></i></li>
                  <li><i class="bi bi-star"></i></li>
                  <li><i class="bi bi-star"></i></li>
                </ul>
                <h6 className="card-title">{product.title}</h6>
                <p className="text-danger fw-semibold">{product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
