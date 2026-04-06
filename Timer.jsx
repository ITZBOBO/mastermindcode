import { useEffect, useState } from "react";

function Timer({ duration, onTimeout, reset }) {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    setTimeLeft(duration);
  }, [reset, duration]);

  useEffect(() => {
    if (timeLeft === 0) {
      onTimeout();
      return;
    }
    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft, onTimeout]);

  const percentage = (timeLeft / duration) * 100;
  const isUrgent = timeLeft <= 5;

  return (
    <div className="timer-wrapper">
      <div className={`timer-circle ${isUrgent ? "urgent" : ""}`}>
        <svg viewBox="0 0 36 36" className="timer-svg">
          <path
            className="timer-bg"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            className="timer-fill"
            strokeDasharray={`${percentage}, 100`}
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            style={{ stroke: isUrgent ? "#f87171" : "#6366f1" }}
          />
        </svg>
        <span className="timer-text">{timeLeft}s</span>
      </div>
    </div>
  );
}

export default Timer;
