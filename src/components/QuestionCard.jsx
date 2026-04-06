function QuestionCard({ question, selected, onSelect, showAnswer }) {
  return (
    <div className="question-card">
      <span className="category-badge">{question.category}</span>
      <h2 className="question-text">{question.question}</h2>
      <div className="options-list">
        {question.options.map((option) => {
          let optionClass = "option";
          if (showAnswer) {
            if (option === question.answer) optionClass += " correct";
            else if (option === selected && option !== question.answer)
              optionClass += " wrong";
          } else if (option === selected) {
            optionClass += " selected";
          }

          return (
            <button
              key={option}
              className={optionClass}
              onClick={() => !showAnswer && onSelect(option)}
              disabled={showAnswer}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default QuestionCard;
