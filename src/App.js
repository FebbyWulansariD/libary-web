import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Main from "./page/Main";
import About from "./page/About";
import GuestBook from "./page/GuestBook";
import FAQ from "./page/FAQ";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="about" element={<About />} />
        <Route path="guestbook" element={<GuestBook />} />
        <Route path="faq" element={<FAQ />} />
      </Route>
    </Routes>
  );
}

export default App;
