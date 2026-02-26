import React, { useState } from "react";
const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function APP() {
  return (
    <div>
      <Accordian />
    </div>
  );
}

function Accordian() {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="accordian">
      {faqs.map((item, index) => (
        <Item
          title={item.title}
          number={index + 1}
          key={index}
          curOpen={curOpen}
          onOpen={setCurOpen}
        >
          {item.text}
        </Item>
      ))}
    </div>
  );
}

function Item({ title, number, curOpen, onOpen, children }) {
  const isOpen = curOpen === number;
  function handleToggle() {
    onOpen(isOpen ? null : number);
  }
  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{number <= 9 ? `0${number}` : number}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
