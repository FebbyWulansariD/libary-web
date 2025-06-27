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
    title: "Metodologi Pengembangan Sistem Informasi 7",
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
    <main className="container">
      <div className="row my-4">
        <img src={logo} alt="logo" style={{ width: "25%" }} />
        <div className="col-12 mt-4">
          <input
            className="form-control form-control-lg"
            type="text"
            placeholder="Search"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>

        <div className="col-12 mt-3">
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
              <label className="form-check-label" htmlFor={`filter_${opt}`}>
                {opt === "title_year" ? "Title & Year" : opt.charAt(0).toUpperCase() + opt.slice(1)}
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
      </div>

      <div className="row">
        {filteredBooks.map((book, i) => (
          <div className="col-sm-6 col-lg-4 mb-4 book" key={i}>
            <div className="card text-center">
              <div className="card-body">
                <img
                  src={book.image}
                  width="150"
                  height="200"
                  style={{ marginBottom: "10px" }}
                  alt="buku"
                />
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text">{book.author}</p>
                <p className="card-text text-muted">
                  {book.publisher} <small>{book.year}</small>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Catalog;
