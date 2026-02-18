import React from "react";

export default function Item({ item, onDeleteItem, onUpdateItem }) {
  // const [packed, setPacked] = useState(item.packed);
  // console.log(item.packed);
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onUpdateItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
