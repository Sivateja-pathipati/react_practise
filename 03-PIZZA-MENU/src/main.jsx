// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
import React from "react";
import ReactDom from "react-dom/client";
import "./App.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },

  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const style = {
    color: "green",
    fontSize: "48px",
    textTransform: "uppercase",
  };
  return (
    <header className="header">
      <h1>Fast React Pizza co.</h1>;
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizzas > 0 ? (
        <>
          <p>Authentic Italian Cusine. 6 creative dishes to choose from</p>
          <ul className="pizzas">
            {pizzas.map((pizza, index) => (
              <Pizza propsObj={pizza} key={index} />
            ))}
          </ul>
        </>
      ) : (
        <p> We are currently preparing our menu</p>
      )}
    </main>
  );
}

function Pizza({ propsObj }) {
  return (
    // <li className={propsObj.soldOut ? "pizza sold-out" : "pizza"}>
    <li className={`pizza ${propsObj.soldOut ? "sold-out" : ""}`}>
      <img src={"src/" + propsObj.photoName} alt="spinaci.jpg" />
      <div>
        <h3>{propsObj.name}</h3>
        <p>{propsObj.ingredients}</p>

        <span>{propsObj.soldOut ? "Sold Out" : propsObj.price}</span>
      </div>
    </li>
  );
}
function Footer() {
  const hour = new Date().getHours();
  console.log(hour);
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>We're open until {closeHour}:00. come visit us or order online</p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p>
          We welcome you between {openHour} and {closeHour}
        </p>
      )}
    </footer>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// NOTES :-
// 1) The Component should only return one element so wrap everyting in a element (example
//    like div) to nest all the required elements in one main element
// 2)
