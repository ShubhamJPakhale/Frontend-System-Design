import React from "react";

const AccordionItem = ({ item, isOpen, setIsOpen }) => {
  const { question, answer } = item;
  return (
    <div className="p-2 my-2">
      <h3
        className="font-semibold p-2 bg-gray-200 flex justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="ml-2">{question}</span>
        <img
          src="/down-arrow.svg"
          alt="arrow"
          className={`w-4 h-4 mr-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </h3>
      {isOpen && <p className="p-2">{answer}</p>}
    </div>
  );
};

export default AccordionItem;
