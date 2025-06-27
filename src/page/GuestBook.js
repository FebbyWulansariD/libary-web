import React, { useState } from "react";

const GuestBook = () => {
  const [name, setName] = useState("");
  const [entries, setEntries] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    const newEntry = {
      name,
      time: new Date().toLocaleString(),
    };
    setEntries([newEntry, ...entries]);
    setName(""); // kosongkan input setelah submit
  };

  return (
    <div className="container">
      <h2 className="mt-4">Guest Book</h2>
      <form onSubmit={handleSubmit} className="d-flex my-3">
        <input
          type="text"
          className="form-control me-2"
          placeholder="Guest’s Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>

      <ul className="list-group">
        {entries.map((entry, i) => (
          <li key={i} className="list-group-item">
            <strong>{entry.time}</strong> — {entry.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GuestBook;
