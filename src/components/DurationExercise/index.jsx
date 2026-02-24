import { useEffect, useRef, useState } from "react";

function pad2(num) {
  return String(num).padStart(2, "0");
}

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${pad2(minutes)}:${pad2(seconds)}`;
}

export default function DurationExercise({ name }) {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = null;
    };
  }, [running]);

  function handleStartStop() {
    setRunning((prev) => !prev);
  }

  function handleReset() {
    setRunning(false);
    setSeconds(0);
  }

  return (
    <div style={{ border: "1px solid #ddd", padding: 16, borderRadius: 12 }}>
      <h2>{name}</h2>

      <p style={{ fontSize: 40, margin: "12px 0" }}>{formatTime(seconds)}</p>

      <button onClick={handleStartStop} style={{ marginRight: 10 }}>
        {running ? "Stop" : "Start"}
      </button>

      <button onClick={handleReset}>Reset</button>
    </div>
  );
}