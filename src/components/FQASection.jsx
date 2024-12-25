import React, { useState } from "react";
import "../styles/FAQSection.css";
import 'font-awesome/css/font-awesome.min.css';

const FAQSection = () => {
  const initialFaqs = [
    {
      question: "Breaking The Rules Using SQLite To Demo Web?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "Monthly Web Development Update: Pragmatic Releasing?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  const additionalFaqs = [
    {
      question: "What are the benefits of hiring your construction company?",
      answer:
        "We provide cost-effective solutions, use high-quality materials, and have a proven track record of completing projects on time.",
    },
    {
      question: "Do you offer custom construction services?",
      answer:
        "Yes, we specialize in tailored construction solutions to meet your specific requirements.",
    },
    {
      question: "What types of projects do you handle?",
      answer:
        "We handle residential, commercial, and industrial construction projects of all scales.",
    },
    {
      question: "Do you provide warranties on your work?",
      answer:
        "Absolutely! We stand behind our work and offer warranties to ensure customer satisfaction.",
    },
    {
      question: "How long does it take to complete a project?",
      answer:
        "The timeline varies depending on the size and scope of the project. We ensure timely delivery without compromising quality.",
    },
    {
      question: "Can I see examples of your past work?",
      answer:
        "Yes, please visit our portfolio section on our website or contact us for more details.",
    },
    {
      question: "Do you handle project permits and paperwork?",
      answer:
        "Yes, we take care of all necessary permits and legal documentation for your project.",
    },
    {
      question: "What is your pricing structure?",
      answer:
        "Our pricing is transparent and based on project requirements. Contact us for a free quote.",
    },
    {
      question: "Do you offer sustainable construction options?",
      answer:
        "Yes, we offer eco-friendly and sustainable construction options tailored to your preferences.",
    },
    {
      question: "What sets your company apart from competitors?",
      answer:
        "Our commitment to quality, innovation, and customer satisfaction makes us stand out in the industry.",
    },
  ];

  const [faqs, setFaqs] = useState(initialFaqs);
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(true);
    setFaqs([...faqs, ...additionalFaqs]);
  };

  return (
    <section className="faq-section">
      <div className="faq-header">
        <h2>Frequently Asked Questions</h2>
        <p>Your go-to resource for answers about our services.</p>
      </div>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <h3 className="faq-question">
              <i className="fa fa-user"></i> {faq.question}
            </h3>
            <p className="faq-answer">{faq.answer}</p>
          </div>
        ))}
      </div>
      {!showMore && (
        <div className="faq-show-more">
          <button onClick={handleShowMore}>Show More</button>
        </div>
      )}
    </section>
  );
};

export default FAQSection;
