import React from "react";

export default function Stats({ items }) {
  // console.log(items);
  const total = items.length;
  const totalPacked = items.filter((item) => item.packed).length;
  const percentPacked = Math.round(
    (totalPacked / (total === 0 ? 1 : total)) * 100 ?? 0,
  );
  // console.log(total, totalPacked, percentPacked);
  return (
    <footer className="stats">
      <em>
        💼 You have {total ?? 0} items on your list and you have already packed{" "}
        {totalPacked ?? 0} items ({percentPacked ?? 0}%)
      </em>
    </footer>
  );
}
