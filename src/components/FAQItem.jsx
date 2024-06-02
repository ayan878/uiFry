import React from "react";

const FAQItem = ({ title, description, isHighlighted }) => {
  return (
    <div
      className={`p-6 rounded-lg ${
        isHighlighted
          ? "bg-red-500 text-white"
          : "bg-white text-black shadow-md"
      }`}
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className={`${isHighlighted ? "" : "text-gray-500"}`}>{description}</p>
    </div>
  );
};

export default FAQItem;
