import React, { useState } from "react";
import buku1 from "../assets/buku1.jpg";
import buku2 from "../assets/buku2.jpg";
import buku3 from "../assets/buku3.jpg";
import buku4 from "../assets/buku4.png";
import buku5 from "../assets/buku5.jpg";
import buku6 from "../assets/buku6.jpeg";
import buku7 from "../assets/buku7.jpg";
import buku8 from "../assets/buku8.jpg";
import logo from "../assets/book-edu.png";

const dataBuku = [
  {
    title: "Menguasai Pemrograman Berorientasi Objek",
    author: "Ade Rahmat Iskandar",
    publisher: "Informatika",
    year: "2020",
    image: buku1,
  },
  {
    title: "Dasar-Dasar Pemrograman dengan .NET",
    author: "Ade Rahmat Iskandar",
    publisher: "Informatika",
    year: "2019",
    image: buku2,
  },
  {
    title: "Metodologi Pengembangan Sistem Informasi",
    author: "Samiaji Sarosa",
    publisher: "Indeks",
    year: "2017",
    image: buku3,
  },
  {
    title: "Struktur Data",
    author: "Rosa A.S",
    publisher: "Modula",
    year: "2018",
    image: buku4,
  },
  {
    title: "Dasar Pemrograman Python 3",
    author: "Abdul Kadir",
    publisher: "Andi Publisher",
    year: "2018",
    image: buku5,
  },
  {
    title: "Sistem Basis Data Dan Sql",
    author: "Didik Setiyadi",
    publisher: "Mitra Wacana Media",
    year: "2020",
    image: buku6,
  },
  {
    title: "Perancangan Basis Data Teori",
    author: "Suhartini",
    publisher: "Deepublish",
    year: "2020",
    image: buku7,
  },
  {
    title: "Teori Dan Praktek Sistem Operasi",
    author: "Zaid Romegar Mair",
    publisher: "Deepublish",
    year: "2018",
    image: buku8,
  },
];

const Catalog = () => {
  const [filter, setFilter] = useState("title");
  const [keyword, setKeyword] = useState("");
  const [year, setYear] = useState("");

  const filteredBooks = dataBuku.filter((book) => {
    if (filter === "title_year") {
      return (
        book.title.toLowerCase().includes(keyword.toLowerCase()) &&
        book.year.includes(year)
      );
    } else {
      return book[filter].toLowerCase().includes(keyword.toLowerCase());
    }
  });

  return (
    <main className="container mt-4">
      {/* Header: Logo dan Menu */}
      <div className="d-flex justify-content-between align-items-center">
        <img src={logo} alt="logo" style={{ width: "200px" }} />
        <nav className="mt-3">
          <a
            href="#"
            className="me-3 text-decoration-none text-dark fw-semibold"
          >
            Home
          </a>
          <a href="#" className="text-decoration-none text-dark fw-semibold">
            About
          </a>
        </nav>
      </div>

      {/* Search Bar */}
      <div className="my-4">
        <input
          className="form-control form-control-lg"
          type="text"
          placeholder="Search"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </div>

      {/* Filter */}
      <div className="mb-4">
        {["title", "author", "publisher", "title_year"].map((opt) => (
          <div className="form-check form-check-inline" key={opt}>
            <input
              className="form-check-input"
              type="radio"
              name="filter"
              value={opt}
              id={`filter_${opt}`}
              checked={filter === opt}
              onChange={(e) => setFilter(e.target.value)}
            />
            <label className="form-check-label me-2" htmlFor={`filter_${opt}`}>
              {opt === "title_year"
                ? "Title & Year"
                : opt.charAt(0).toUpperCase() + opt.slice(1)}
            </label>
            {opt === "title_year" && (
              <input
                type="text"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="form-control d-inline-block ms-2"
                placeholder="2018"
                style={{ width: "80px" }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Judul */}
      <h4 className="fw-bold mb-4">Our Books</h4>

      {/* Daftar Buku */}
      <div className="row">
        {filteredBooks.map((book, i) => (
          <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={i}>
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <img
                  src={book.image}
                  width="130"
                  height="180"
                  className="mb-3"
                  alt="cover buku"
                />
                <h6 className="card-title fw-semibold">{book.title}</h6>
                <p className="mb-1">{book.author}</p>
                <p className="text-muted mb-2">
                  {book.publisher} <small>{book.year}</small>
                </p>
              </div>

              {/* Footer Like dan Simpan */}
              <div className="card-footer d-flex justify-content-between align-items-center px-3 py-2 text-muted">
                <span>
                  <i className="fas fa-thumbs-up me-1 text-primary"></i>
                  {Math.floor(Math.random() * 10) + 1} like(s)
                </span>
                <i
                  className="fas fa-bookmark text-secondary"
                  style={{ cursor: "pointer" }}
                ></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Catalog;
