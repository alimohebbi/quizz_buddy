import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { motion } from 'framer-motion';
import {useState} from "react";

export function QuizCard({ question, index, total, onNext }) {
  const [selected, setSelected] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const choices = [
    question.choice_a,
    question.choice_b,
    question.choice_c,
    question.choice_d,
  ];

  const handleSelect = (i) => {
    setSelected(i);
    setShowAnswer(true);
  };
  const isCorrect = selected !== null && question.correct_answer.toLowerCase() === ['a','b','c','d'][selected];

  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
    >
      <Card className="space-y-4">
        <CardContent>
          <h2 className="text-xl font-bold">Question {index} of {total}</h2>
          <p className="mt-2 text-lg">{question.question}</p>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {choices.map((c, i) => {
              const isCorrect = showAnswer && question.correct_answer.toLowerCase() === ['a','b','c','d'][i];
              const isSelected = showAnswer && selected === i;
              return (
                <Button
                  key={i}
                  disabled={showAnswer}
                  onClick={() => handleSelect(i)}
                  className={`text-left p-4 rounded-2xl shadow ${
                    showAnswer
                      ? isCorrect
                        ? 'bg-green-200 text-green-900'
                        : isSelected
                        ? 'bg-red-200 text-red-900'
                        : 'bg-gray-100 text-gray-900'
                      : 'bg-indigo-50 hover:bg-indigo-100 text-indigo-900'
                  }`}
                >
                  <span className="font-semibold uppercase">{['A','B','C','D'][i]}.</span> {c}
                </Button>
              );
            })}
          </div>
        </CardContent>
        {showAnswer && (
          <CardFooter className="flex justify-end">
            <Button onClick={() => {
              setSelected(null);
              setShowAnswer(false);
              onNext(isCorrect);
            }}>
              Next
            </Button>
          </CardFooter>
        )}
      </Card>
    </motion.div>
  );
}
