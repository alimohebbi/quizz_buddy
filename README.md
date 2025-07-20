# React Quiz Application

A modern, interactive quiz application built with React and TypeScript that allows users to upload and take quizzes from CSV files.

## Features

- 📝 CSV file upload support for quiz questions
- 🎯 Interactive quiz interface
- ✨ Real-time score tracking
- 🎨 Modern UI with Tailwind CSS
- 🔄 Option to restart with new quiz files
- 📱 Responsive design

## Technologies Used

- React 19.1.0
- TypeScript 5.8.3
- Tailwind CSS 4.1.11
- Papa Parse 5.5.3
- Framer Motion 12.23.6
- Shadcn/UI
- Vite 7.0.4

## Prerequisites

- Node.js (Latest LTS version recommended)
- npm (Node Package Manager)

## Installation

1. Clone the repository:
```aiignore
git clone <repository-url>
```
3. Install dependencies:
```aiignore
npm install
```
3. Navigate to the project directory:
```aiignore
npm run dev
```

## Usage

1. Launch the application
2. Upload a CSV file containing quiz questions
3. Answer each question by selecting from the provided options
4. View your final score upon completion
5. Option to start a new quiz with a different file

## CSV File Format

The application expects CSV files with the following column structure:
- `question`: The quiz question
- `answer`: The correct answer
- `options`: Multiple choice options (comma-separated)

Example CSV format:

```csv
question,correct_answer,choice_a,choice_b,choice_c,choice_d
What is the capital of France?,b,London,Paris,Berlin,Madrid
```
