import { useState, useCallback, useRef } from "react";
import { questions } from "./data/questions";
import QuestionCard from "./components/QuestionCard";
import Timer from "./components/Timer";
import ResultScreen from "./components/ResultScreen";
import "./App.css";

const TIMER_DURATION = 15;

function shuffleArray(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

function App() {
  const [screen, setScreen] = useState("start"); // start | quiz | result
  const [shuffled, setShuffled] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [timerReset, setTimerReset] = useState(0);
  const startTimeRef = useRef(null);
  const [timeTaken, setTimeTaken] = useState(0);

  const startQuiz = () => {
    setShuffled(shuffleArray(questions));
    setCurrentIndex(0);
    setScore(0);
    setSelected(null);
    setShowAnswer(false);
    setTimerReset(0);
    startTimeRef.current = Date.now();
    setScreen("quiz");
  };

  const handleSelect = (option) => {
    if (selected) return;
    setSelected(option);
    setShowAnswer(true);
    if (option === shuffled[currentIndex].answer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleTimeout = useCallback(() => {
    if (!selected) {
      setShowAnswer(true);
      setSelected(null);
    }
  }, [selected]);

  const handleNext = () => {
    if (currentIndex + 1 >= shuffled.length) {
      const elapsed = Math.round((Date.now() - startTimeRef.current) / 1000);
      setTimeTaken(elapsed);
      setScreen("result");
      return;
    }
    setCurrentIndex((prev) => prev + 1);
    setSelected(null);
    setShowAnswer(false);
    setTimerReset((prev) => prev + 1);
  };

  if (screen === "start") {
    return (
      <div className="app">
        <div className="start-screen">
          <div className="start-card">
            <div className="start-icon">🧠</div>
            <h1>QuizUp</h1>
            <p className="start-subtitle">
              Test your knowledge in JavaScript, React, HTML, CSS &amp; more.
            </p>
            <div className="start-info">
              <span>📋 {questions.length} Questions</span>
              <span>⏱ {TIMER_DURATION}s per question</span>
              <span>🏆 10 points each</span>
            </div>
            <button className="start-btn" onClick={startQuiz}>
              Start Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (screen === "result") {
    return (
      <div className="app">
        <ResultScreen
          score={score}
          total={shuffled.length}
          timeTaken={timeTaken}
          onRestart={() => setScreen("start")}
        />
      </div>
    );
  }

  const current = shuffled[currentIndex];

  return (
    <div className="app">
      <div className="quiz-layout">
        {/* Header */}
        <div className="quiz-header">
          <div className="progress-info">
            <span>
              Question {currentIndex + 1} / {shuffled.length}
            </span>
            <span className="score-badge">Score: {score * 10}</span>
          </div>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{
                width: `${((currentIndex + 1) / shuffled.length) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* Timer */}
        <Timer
          duration={TIMER_DURATION}
          onTimeout={handleTimeout}
          reset={timerReset}
        />

        {/* Question */}
        <QuestionCard
          question={current}
          selected={selected}
          onSelect={handleSelect}
          showAnswer={showAnswer}
        />

        {/* Next Button */}
        {showAnswer && (
          <button className="next-btn" onClick={handleNext}>
            {currentIndex + 1 >= shuffled.length ? "See Results" : "Next Question"} →
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
