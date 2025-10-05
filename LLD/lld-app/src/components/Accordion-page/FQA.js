import React, { useState } from "react";
import AccordionItem from "./AccordionItem";

const faqData = [
  {
    question: "What is LLD Mastery?",
    answer:
      "LLD Mastery is an interactive learning platform designed for frontend and full-stack developers to enhance their low-level design (LLD) and architectural thinking skills.",
  },
  {
    question: "Who is LLD Mastery for?",
    answer:
      "LLD Mastery is ideal for frontend and full-stack developers looking to strengthen their understanding of system design, architecture, and best practices in building scalable applications.",
  },
  {
    question: "What technologies are covered in LLD Mastery?",
    answer:
      "LLD Mastery covers modern technologies such as React, Next.js, Node.js, Express, and MongoDB, focusing on practical application and real-world projects.",
  },
  {
    question: "How is the course structured?",
    answer:
      "The course is structured into modules that progress from beginner to advanced levels, including hands-on projects, quizzes, and interview preparation.",
  },
  {
    question: "Is there any mentorship available?",
    answer:
      "Yes, LLD Mastery offers discussion forums and live mentorship opportunities to help learners succeed.",
  },
];

const FQA = () => {
  const [isOpenIndex, setIsOpenIndex] = useState();
  return (
    <div className="p-4 w-[70%] m-auto ">
      {faqData.map((item, index) => (
        <AccordionItem
          key={index}
          item={item}
          isOpen={index === isOpenIndex}
          setIsOpen={() => setIsOpenIndex(index === isOpenIndex ? -1 : index)}
        />
      ))}
    </div>
  );
};

export default FQA;
