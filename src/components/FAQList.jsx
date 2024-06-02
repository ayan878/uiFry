import React from "react";
import FAQItem from "./FAQItem";

const FAQList = ({ faqs }) => {
  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
      {faqs.map((faq, index) => (
        <FAQItem key={index} {...faq} />
      ))}
    </div>
  );
};

export default FAQList;
