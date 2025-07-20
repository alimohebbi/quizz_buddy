import React, { useState } from 'react';
import Papa from 'papaparse';
import { FileUploader } from './components/FileUploader';
import { QuizCard } from './components/QuizCard';

export default function App() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleFile = (file) => {
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        setQuestions(results.data);
        setCurrentIndex(0);
        setScore(0);
        setShowScore(false);
      },
    });
  };

  const handleNext = (wasCorrect) => {
    if (wasCorrect) setScore((s) => s + 1);
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((i) => i + 1);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-8">
        {questions.length === 0 ? (
          <FileUploader onFileSelect={handleFile} />
        ) : showScore ? (
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-green-600">Quiz Complete!</h2>
            <p className="text-lg">You scored {score} out of {questions.length}</p>
            <button
              onClick={() => {
                setQuestions([]);
                setShowScore(false);
              }}
              className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              Upload New Quiz
            </button>
          </div>
        ) : (
          <QuizCard
            question={questions[currentIndex]}
            index={currentIndex + 1}
            total={questions.length}
            onNext={handleNext}
          />
        )}
      </div>
    </div>
  );
}
