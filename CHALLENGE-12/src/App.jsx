// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`
import React from "react";
import { useState, useEffect } from "react";
export default function App() {
  const [convertFrom, setConvertFrom] = useState("USD");
  const [convertTo, setConvertTo] = useState("USD");

  const [currencyInput, setCurrencyInput] = useState(1);
  const [output, setOutput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  console.log(convertFrom, convertTo, currencyInput, output);

  useEffect(
    function () {
      async function fetchCurrency() {
        if (currencyInput) {
          setIsLoading(true);

          const res = await fetch(
            `https://api.frankfurter.app/latest?amount=${currencyInput}&from=${convertFrom}&to=${convertTo}`,
          );
          setIsLoading(false);

          const data = await res.json();
          console.log(data);
          setOutput(data.rates[convertTo]);
          console.log(output);
        }
      }
      if (convertFrom === convertTo) {
        setOutput(currencyInput);
        return;
      }
      fetchCurrency();
    },
    [currencyInput, convertFrom, convertTo],
  );

  return (
    <div>
      <input
        type="text"
        value={currencyInput}
        onChange={(e) => setCurrencyInput(Number(e.target.value))}
        disabled={isLoading}
      />
      <select
        value={convertFrom}
        onChange={(e) => setConvertFrom(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={convertTo}
        onChange={(e) => setConvertTo(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p> {currencyInput && output}</p>
    </div>
  );
}
