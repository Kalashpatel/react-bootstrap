import React from "react";
import img1 from "../assets/images/hero-img1.jpg"
import img2 from "../assets/images/hero-img2.jpg"
import img3 from "../assets/images/hero-img3.jpg"

export default function Hero() {
  return (
   <div id="carouselExampleCaptions" class="carousel slide">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={img1} class="d-block w-100" alt="img1"/>
          <div class="carousel-caption d-none d-md-block">
            <p class="m-0">limited collection</p>
            <h2 class="fs-1 display-1 hero-caption"><span class="text-primary">Dreamy</span><br></br> & Lovely</h2>
            <button class="px-4 py-2 mt-2 btn-custome rounded-pill">Shop Now</button>
          </div>
        </div>
        <div class="carousel-item">
          <img src={img2} class="d-block w-100" alt="img2"/>
          <div class="carousel-caption d-none d-md-block">
            <p class="m-0">Best Selling</p>
            <h2 class="fs-1 display-1 hero-caption"><span class="text-primary">Glamorous</span><br></br> & Cute</h2>
            <button class="px-4 py-2 mt-2 btn-custome rounded-pill">Shop Now</button>
          </div>
        </div>
        <div class="carousel-item">
          <img src={img3} class="d-block w-100" alt="img3"/>
          <div class="carousel-caption d-none d-md-block">
            <p class="m-0">This Week Only</p>
            <h2 class="fs-1 display-1 hero-caption"><span class="text-primary">Mega Sale</span><br></br> 50% Off</h2>
            <button class="px-4 py-2 mt-2 btn-custome rounded-pill">Shop Now</button>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}