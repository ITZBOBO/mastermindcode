# 🧠 QuizUp

A fast, interactive quiz web app built with **React** and **Vite**. Test your knowledge across JavaScript, React, HTML, CSS, and General CS — with a countdown timer, live scoring, and instant feedback on every answer.

## ✨ Features

- 📋 **10 randomised questions** per session — different order every time
- ⏱ **15-second countdown timer** per question with urgency animation
- ✅ **Instant answer feedback** — correct answers highlighted in green, wrong in red
- 🏆 **Results screen** with score, accuracy %, and total time taken
- 🔁 **Play Again** to restart with reshuffled questions
- 🎨 **Dark mode UI** with smooth animations and a premium feel

## 🛠 Tech Stack

| Tool | Purpose |
|---|---|
| [React 19](https://react.dev) | UI & state management |
| [Vite 8](https://vite.dev) | Dev server & bundler |
| [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) | Typography |
| Vanilla CSS | Styling |

## 📁 Project Structure

```
quiz-app/
├── index.html
└── src/
    ├── main.jsx              # React entry point
    ├── App.jsx               # Main app logic & routing
    ├── App.css               # All styles
    ├── components/
    │   ├── QuestionCard.jsx  # Renders question & answer options
    │   ├── Timer.jsx         # Circular countdown timer
    │   └── ResultScreen.jsx  # End-of-quiz results display
    └── data/
        └── questions.js      # Quiz question bank
```

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v18+

### Install & Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

## 📝 Adding Questions

Edit `src/data/questions.js` to add or modify questions. Each question follows this shape:

```js
{
  id: 11,
  category: "JavaScript",
  question: "Your question here?",
  options: ["Option A", "Option B", "Option C", "Option D"],
  answer: "Option A",
}
```

## 📄 License

MIT
