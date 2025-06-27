import React from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "How many items of print books can I borrow from the library?",
      answer: "You can borrow up to 10 copies of print books per loan.",
    },
    {
      question: "How long can I borrow the collections?",
      answer: "Our borrowing period is 1 week.",
    },
    {
      question: "How many times can I renew the borrowed item(s)?",
      answer: "The borrowed item(s) can be renewed once. If the item is reserved by others, renewal is not allowed.",
    },
  ];

  return (
    <div className="container">
      <h2 className="mt-4">Frequently Asked Questions (FAQs)</h2>
      <div className="mt-3">
        {faqs.map((faq, i) => (
          <div key={i} className="mb-3">
            <strong>{faq.question}</strong>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
