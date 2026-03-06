import { useState } from "react";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";
import RunningExercise from "./components/RunningExercise";

const EXERCISES = [
  { name: "Push Ups", type: "repetition" },
  { name: "Jumping Jacks", type: "repetition" },
  { name: "Plank", type: "duration" },
  { name: "Running", type: "running" }
];

export default function App() {
  const [selectedExercise, setSelectedExercise] = useState(null);

  // Screen 1: Menu
  if (!selectedExercise) {
    return (
      <div style={{ padding: 24, fontFamily: "Arial" }}>
        <h1>Exercise Tracker</h1>
        <p>Select an exercise:</p>

        {EXERCISES.map((ex) => (
          <div key={ex.name} style={{ marginBottom: 10 }}>
            <button onClick={() => setSelectedExercise(ex)}>
              {ex.name} ({ex.type})
            </button>
          </div>
        ))}
      </div>
    );
  }

  // Screen 2: Exercise screen
  return (
    <div style={{ padding: 24, fontFamily: "Arial" }}>
      {selectedExercise.type === "repetition" ? (
        <RepetitionExercise name={selectedExercise.name} />
      ) : (
        <DurationExercise name={selectedExercise.name} />
      )}

      {/* Optional, but helpful */}
      <div style={{ marginTop: 16 }}>
        <button onClick={() => setSelectedExercise(null)}>Back to Menu</button>
      </div>
    </div>
  );
}