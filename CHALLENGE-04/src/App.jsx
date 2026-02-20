import React from "react";
import { useState } from "react";

function App() {
  return <DisplayDate />;
}

function DisplayDate() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const todayDate = new Date();
  const newDate = new Date(todayDate);
  newDate.setDate(todayDate.getDate() + count);

  // function handleStepPlus() {
  //   if (step < 10) {
  //     setStep((s) => s + 1);
  //   }
  // }
  // function handleStepMinus() {
  //   if (step > 1) {
  //     setStep((s) => s - 1);
  //   }
  // }
  function handleStep(e) {
    // console.log(e);
    setStep((s) => Number(e.target.value));
  }
  function handleCountPlus() {
    setCount((c) => c + step);
  }
  function handleCountMinus() {
    setCount((c) => c - step);
  }
  return (
    <div className="center-box">
      {/* <div className="step">
        <button className="minus" onClick={handleStepMinus}>
          -
        </button>
        <div>Step : {step}</div>
        <button className="plus" onClick={handleStepPlus}>
          +
        </button>
      </div> */}
      <div>
        <input
          type="range"
          min={1}
          max={10}
          value={step}
          onChange={handleStep}
        />
        <span>{step}</span>
      </div>

      <div className="count">
        <button className="minus" onClick={handleCountMinus}>
          -
        </button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount((c) => Number(e.target.value))}
        />
        <button className="plus" onClick={handleCountPlus}>
          +
        </button>
      </div>
      <div>
        <span>
          {count === 0
            ? `Today is `
            : count > 0
              ? `${count} days from today is `
              : `${Math.abs(count)} days ago was `}
        </span>
        <span> {newDate.toDateString()}</span>
      </div>
      <button
        onClick={(e) => {
          setStep((c) => 1);
          setCount((c) => 0);
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default App;
