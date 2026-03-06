import { useEffect, useState } from "react";

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

export default function RunningExercise({ name = "Running", onBack }) {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);

  useEffect(() => {
    if (!isRunning) return;
    const id = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, [isRunning]);

  const recordLap = () => {
    setLaps((prev) => [formatTime(seconds), ...prev]);
  };

  const resetAll = () => {
    setIsRunning(false);
    setSeconds(0);
    setLaps([]);
  };

  return (
    <div style={{ padding: 16 }}>
      <h2>{name}</h2>

      <div style={{ fontSize: 48, margin: "16px 0" }}>
        {formatTime(seconds)}
      </div>

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <button onClick={() => setIsRunning((v) => !v)}>
          {isRunning ? "Stop" : "Start"}
        </button>

        <button onClick={recordLap} disabled={!isRunning}>
          Record Lap
        </button>

        <button onClick={resetAll}>Reset</button>

        <button onClick={onBack}>Back</button>
      </div>

      <h3 style={{ marginTop: 24 }}>Laps</h3>

      {laps.length === 0 ? (
        <p>No laps yet.</p>
      ) : (
        <ol>
          {laps.map((lap, i) => (
            <li key={`${lap}-${i}`}>{lap}</li>
          ))}
        </ol>
      )}
    </div>
  );
}