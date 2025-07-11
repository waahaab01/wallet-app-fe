import React, { useState } from "react";
import "../Component/Style/faq/Faq.css";
import Avatar from "../assets/logo assets/Avatar group.png"
const faqs = [
  {
    question: "What is this wallet and how is it different from MetaMask?",
    answer:
      "This isn’t just a wallet! It’s your crypto command center. Unlike MetaMask, which manages one wallet at a time, our wallet lets you link multiple wallets, view all assets in one place, and top-up from anywhere. Think of it as MetaMask’s cooler, smarter cousin.",
  },
  {
    question: "Is it safe to connect my existing wallets here?",
    answer:
      "Yes! Security is our top priority. Your keys are encrypted and stored securely.",
  },
  {
    question: "How do I top-up from another wallet?",
    answer:
      "Go to the Top-Up section, choose your method, and follow the instructions.",
  },
  {
    question: "Can I send or receive NFTs here?",
    answer:
      "Absolutely! You can send, receive, and view NFTs from connected wallets.",
  },
  {
    question: "What happens if I forget my password?",
    answer: "Use the Forgot Password option to reset it securely.",
  },
  {
    question: "Are there any fees for using this wallet?",
    answer:
      "We charge minimal network fees based on blockchain traffic, no hidden charges.",
  },
];

const FAQComponent = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="faq-wrapper">
        <h2 className="faq-title">FREQUENTLY ASKED QUESTIONS</h2>
        <p className="faq-subtitle">
          Everything you need to know about the product and billing.
        </p>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? "open" : ""}`}
              onClick={() => toggleIndex(index)}
            >
              <div className="faq-question">
                {faq.question}
                <span className="faq-toggle">
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>
              {openIndex === index && (
                <div className="faq-answer">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="faq-contact">
        <img src={Avatar}/>
        <div className="faq-contact-content">
          <p className="contact-title">Still have questions?</p>
          <p className="contact-sub">
            Can’t find the answer you’re looking for? Please chat to our
            friendly team.
          </p>
          <button className="contact-button">GET IN TOUCH</button>
        </div>
      </div>
    </>
  );
};

export default FAQComponent;
