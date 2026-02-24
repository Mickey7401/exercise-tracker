import { useState } from "react";

export default function RepetitionExercise({ name }) {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount((prev) => prev + 1);
  }

  function handleReset() {
    setCount(0);
  }

  return (
    <div style={{ border: "1px solid #ddd", padding: 16, borderRadius: 12 }}>
      <h2>{name}</h2>

      <p style={{ fontSize: 40, margin: "12px 0" }}>{count}</p>

      <button onClick={handleIncrement} style={{ marginRight: 10 }}>
        +1
      </button>

      <button onClick={handleReset}>Reset</button>
    </div>
  );
}