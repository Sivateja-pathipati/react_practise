import React from "react";
import { useState } from "react";

const initialList = [
  {
    id: 1,
    src: "https://i.pravatar.cc/48",
    fname: "Clark",
    balanceText: "You owe Clark 7$",
    balance: -7,
  },
  {
    id: 2,
    src: "https://i.pravatar.cc/49",
    fname: "Sarah",
    balanceText: "Sarah owes you 20$",
    balance: 20,
  },
  {
    id: 3,
    src: "https://i.pravatar.cc/50",
    fname: "Anthony",
    balanceText: `You and Anthony are even`,
    balance: 0,
  },
];
export default function App() {
  const [list, setList] = useState(initialList);
  const [isAddingFriend, setIsAddingFriend] = useState(false);
  const [addName, setAddName] = useState("");
  const [addImgLink, setAddImgLink] = useState("https://i.pravatar.cc/48");

  const [billAmount, setBillAmount] = useState(0);
  const [yourExpense, setYourExpense] = useState(0);
  const friendExpense = billAmount - yourExpense;
  const [youPaid, setYouPaid] = useState(true);
  const [friendValue, setFriendValue] = useState(null);

  list.sort((a, b) => a.id - b.id);
  function handleAddFriend() {
    setIsAddingFriend((p) => !p);
  }

  function handleSelect(fname) {
    setFriendValue(friendValue === fname ? null : fname);
  }

  function handleAddToList() {
    if (!addName) return;
    const cap_name = addName[0].toUpperCase() + addName.slice(1);
    const new_item = {
      id: Date.now(),
      src: addImgLink,
      fname: cap_name,
      balanceText: `You and ${cap_name} are even`,
      balance: 0,
    };
    setList((items) => [...items, new_item]);
    setAddName("");
    setAddImgLink("https://i.pravatar.cc/48");
  }

  function handleEditToList() {
    if (billAmount === 0) return;
    let new_item = list.filter((item) => item.fname === friendValue)[0];
    console.log(new_item.balance);
    console.log(friendExpense, yourExpense);
    console.log(youPaid);
    let balance = youPaid
      ? new_item.balance + friendExpense
      : new_item.balance - yourExpense;
    console.log(balance);
    const balanceText =
      balance === 0
        ? `You and ${friendValue} are even`
        : balance > 0
          ? `${friendValue} owes you ${Math.abs(balance)}$`
          : `You owe ${friendValue} ${Math.abs(balance)} $`;
    console.log(balanceText);
    new_item = {
      ...new_item,
      balance: balance,
      balanceText: balanceText,
    };
    setList((items) => {
      const rest_items = items.filter((item) => item.fname !== friendValue);
      return [...rest_items, new_item];
    });
    setBillAmount(0);
    setYourExpense(0);
    setYouPaid(true);
  }

  return (
    <>
      <div className="app">
        <div className="friend-area">
          <FriendList
            list={list}
            friendValue={friendValue}
            friendValueHandler={handleSelect}
          />
          {isAddingFriend ? (
            <AddFriend
              nameValue={addName}
              nameHandler={setAddName}
              imgLinkValue={addImgLink}
              imgLinkHandler={setAddImgLink}
              addButtonValue={list}
              addButtonHandler={handleAddToList}
            />
          ) : null}

          <Button stateValue={isAddingFriend} stateHandler={handleAddFriend}>
            {isAddingFriend ? "Close" : "Add Friend"}
          </Button>
        </div>
        {friendValue != null && (
          <SplitBill
            friendValue={friendValue}
            billAmountHandler={setBillAmount}
            billAmountValue={billAmount}
            yourExpenseValue={yourExpense}
            yourExpenseHandler={setYourExpense}
            friendExpense={friendExpense}
            youPaidValue={youPaid}
            youPaidHandler={setYouPaid}
            splitBillHandler={handleEditToList}
          />
        )}
      </div>
    </>
  );
}

function FriendList({ list, friendValue, friendValueHandler }) {
  return (
    <ul className="friend-list">
      {list.map((item) => (
        <Friend
          src={item.src}
          fname={item.fname}
          balanceText={item.balanceText}
          key={item.id}
          friendValueHandler={friendValueHandler}
          friendValue={friendValue}
        />
      ))}
    </ul>
  );
}

function Friend({ src, fname, balanceText, friendValue, friendValueHandler }) {
  return (
    <li className="friend">
      <img src={src} alt="myImage.png" />
      <div>
        <p>{fname}</p>
        <p>{balanceText}</p>
      </div>
      <Button
        stateValue={friendValue}
        stateHandler={() => friendValueHandler(fname)}
      >
        {friendValue === fname ? "Close" : "Select"}
      </Button>
    </li>
  );
}

function AddFriend({
  nameValue,
  nameHandler,
  imgLinkValue,
  imgLinkHandler,
  addButtonValue,
  addButtonHandler,
}) {
  function handleImgSrc() {
    console.log("handleImagesrc is pressed");
  }
  return (
    <div className="add-friend">
      <InputField
        stateValue={nameValue}
        stateHandler={(e) => nameHandler(() => e.target.value)}
      >
        🧑‍🤝‍🧑 Friend name
      </InputField>
      <InputField
        stateValue={imgLinkValue}
        stateHandler={(e) => imgLinkHandler(() => e.target.value)}
      >
        🌄 Image URL
      </InputField>
      <Button stateValue={addButtonValue} stateHandler={addButtonHandler}>
        Add
      </Button>
    </div>
  );
}

function SplitBill({
  friendValue,
  billAmountValue,
  billAmountHandler,
  yourExpenseValue,
  yourExpenseHandler,
  friendExpense,
  youPaidValue,
  youPaidHandler,
  splitBillHandler,
}) {
  return (
    <div className="split-bill">
      <h3 style={{ textTransform: "uppercase" }}>
        SPLIT A BILL WITH {friendValue}
      </h3>
      <InputField
        stateValue={billAmountValue}
        stateHandler={(e) => {
          billAmountHandler(() => Number(e.target.value));
        }}
      >
        💰 Bill value
      </InputField>
      <InputField
        stateValue={yourExpenseValue}
        stateHandler={(e) => {
          yourExpenseHandler(() => Number(e.target.value));
        }}
      >
        🚶‍♂️Your Expense
      </InputField>
      <InputField
        stateValue={friendExpense}
        stateHandler={() => {
          friendExpense;
        }}
      >
        🧑‍🤝‍🧑 {friendValue}'s Expense
      </InputField>

      <div className="input-field">
        <p>🤑 Who is paying the bill</p>
        <select
          className="input-type"
          value={youPaidValue}
          onChange={(e) => youPaidHandler(() => e.target.value === "true")}
        >
          <option value="true">You</option>
          <option value="false">{friendValue}</option>
        </select>
      </div>

      <Button stateValue="" stateHandler={splitBillHandler}>
        Split Bill
      </Button>
    </div>
  );
}

function InputField({ stateValue, stateHandler, children }) {
  return (
    <div className="input-field">
      <p>{children}</p>
      <input
        className="input-type"
        type="text"
        value={stateValue}
        onChange={stateHandler}
      />
    </div>
  );
}

function Button({ stateValue, stateHandler, children }) {
  return (
    <div className="button-row">
      <button className="button" value={stateValue} onClick={stateHandler}>
        {children}
      </button>
    </div>
  );
}
