import React from "react";
import { useState } from "react";
export default function App() {
  return <Bill />;
}

function Bill() {
  const [amount, setAmount] = useState(0);
  const [myTip, setMyTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);

  const totalTip = ((myTip + friendTip) / 200) * amount;
  const totalAmount = amount + totalTip;

  function handleReset() {
    setAmount(0);
    setMyTip(0);
    setFriendTip(0);
  }
  return (
    <div>
      <BillAmount amount={amount} onAmount={setAmount} />
      <RateService tip={myTip} setTip={setMyTip}>
        How did you like the service?
      </RateService>
      <RateService tip={friendTip} setTip={setFriendTip}>
        How did your friend like the service?
      </RateService>
      <BillCalculation
        totalAmount={totalAmount}
        totalTip={totalTip}
        onReset={handleReset}
      />
    </div>
  );
}

function BillAmount({ amount, onAmount }) {
  return (
    <div>
      <span>How much was the bill?</span>
      <input
        type="text"
        placeholder="0"
        value={amount}
        onChange={(e) => onAmount(Number(e.target.value))}
      />
    </div>
  );
}

function RateService({ tip, setTip, children }) {
  return (
    <div>
      <span>{children}</span>
      <select value={tip} onChange={(e) => setTip(Number(e.target.value))}>
        <option value={0}>Dissatisfied (0%) </option>
        <option value={5}>It was okay (5%) </option>
        <option value={10}>It was good (10%) </option>
        <option value={20}>Absolutely amazing! (20%) </option>
      </select>
    </div>
  );
}

function BillCalculation({ totalAmount, totalTip, onReset }) {
  return (
    totalAmount !== 0 && (
      <div>
        <h3>
          You pay ${totalAmount} (${totalAmount - totalTip} + ${totalTip} tip)
        </h3>
        <ResetButton onReset={onReset} />
      </div>
    )
  );
}

function ResetButton({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
