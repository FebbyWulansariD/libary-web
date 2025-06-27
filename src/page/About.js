import React from "react";
import logo from "../assets/book-edu.png";
import ilustrasi from "../assets/about-illustration.png";

const About = () => {
  return (
    <main className="container mt-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center">
        <img src={logo} alt="logo" style={{ width: "150px" }} />
        <nav>
          <a href="/" className="me-3 text-decoration-none text-dark fw-semibold">
            Home
          </a>
          <a href="/about" className="text-decoration-none text-dark fw-semibold">
            About
          </a>
        </nav>
      </div>

      {/* Konten About */}
      <div className="row align-items-center mt-5">
        <div className="col-md-6">
          <h1 className="fw-bold">About Us</h1>
          <p className="mt-3 fs-5 text-muted">
            Hi, Febby Wulansari Damanik built this Website. Be Happy!
          </p>
        </div>
        <div className="col-md-6 text-center">
          <img src={ilustrasi} alt="ilustrasi about" className="img-fluid" style={{ maxHeight: "300px" }} />
        </div>
      </div>
    </main>
  );
};

export default About;
