import React from "react";
import { useState } from "react";

export default function App() {
  return <FlashCards />;
}

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

function FlashCards() {
  const [selectedId, setSelectedId] = useState(2002);
  function handleSelectedId(e, id) {
    if (selectedId === id) setSelectedId((sid) => null);
    else setSelectedId((sid) => id);
  }
  return (
    <div className="flashcards">
      {questions.map((item) => (
        <div
          key={item.id}
          className={item.id === selectedId ? "selected" : ""}
          onClick={(e) => handleSelectedId(e, item.id)}
        >
          <p>{item.id === selectedId ? item.answer : item.question}</p>
        </div>
      ))}
    </div>
  );
}

// function FlashCards() {
//   console.log(questions[5].question);
//   return questions.map((item, index) => (
//     <div>
//       <Card item={item} key={index} />
//     </div>
//   ));
// }

// function Card({ item }) {
//   const [currentDisplay, setCurrentDisplay] = useState("question");
//   function handleCurrentDisplay() {
//     if (currentDisplay === "question") setCurrentDisplay((c) => "answer");
//     else setCurrentDisplay((c) => "question");
//   }
//   return (
//     <button
//       className={currentDisplay === "answer" ? "selected" : ""}
//       onClick={handleCurrentDisplay}
//     >
//       <span>{item[currentDisplay]}</span>
//     </button>
//   );
// }
