import React from "react";
import logo from "../assets/images/logo.png"

export default function Navbar() {
  return (
    <div class="position-absolute z-3 w-100 top-0 start-0">
      <nav class="navbar navbar-expand-lg bg-body-white p-4">
        <div class="container-fluid align-items-center">
          <a class="navbar-brand" href="#">
            <img src={logo} alt="logo"/>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 gap-4">
              <li class="nav-item">
                <a class="nav-link active fs-5 b-1" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link fs-5 b-1" href="#">
                  Shop
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link fs-5 b-1" href="#">
                  Elements
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link fs-5 b-1" href="#">
                  Blog
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link fs-5 b-1" href="#">
                  Pages
                </a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-custome" type="submit">
                Search
              </button>
              <ul class="ms-5 d-flex gap-4 align-items-center">
                <li>
                    <a href="#" class="fs-3 b-1"><i class="bi bi-person"></i></a>
                </li>
                <li>
                    <a href="#" class="fs-4 b-1"><i class="bi bi-bag"></i></a>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
