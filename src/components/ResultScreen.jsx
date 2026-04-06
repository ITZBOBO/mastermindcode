function ResultScreen({ score, total, timeTaken, onRestart }) {
  const percentage = Math.round((score / total) * 100);

  const getMessage = () => {
    if (percentage === 100) return { text: "Perfect Score! 🏆", color: "#22c55e" };
    if (percentage >= 80) return { text: "Excellent! 🎉", color: "#6366f1" };
    if (percentage >= 60) return { text: "Good Job! 👍", color: "#f59e0b" };
    if (percentage >= 40) return { text: "Keep Practicing! 💪", color: "#f97316" };
    return { text: "Better luck next time 😅", color: "#f87171" };
  };

  const { text, color } = getMessage();

  return (
    <div className="result-screen">
      <div className="result-card">
        <div className="result-emoji">🎯</div>
        <h1 className="result-title" style={{ color }}>
          {text}
        </h1>

        <div className="score-circle">
          <span className="score-big">{score}</span>
          <span className="score-divider">/ {total}</span>
        </div>

        <div className="result-stats">
          <div className="stat">
            <p className="stat-value">{percentage}%</p>
            <p className="stat-label">Accuracy</p>
          </div>
          <div className="stat">
            <p className="stat-value">{score * 10}</p>
            <p className="stat-label">Points</p>
          </div>
          <div className="stat">
            <p className="stat-value">{timeTaken}s</p>
            <p className="stat-label">Time Taken</p>
          </div>
        </div>

        <button className="restart-btn" onClick={onRestart}>
          Play Again
        </button>
      </div>
    </div>
  );
}

export default ResultScreen;
