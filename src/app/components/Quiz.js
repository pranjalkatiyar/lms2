"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { XCircle } from "lucide-react";
import { CheckCircle } from "lucide-react";
import { usePathname, useSearchParams } from "next/navigation";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";

import { data as moduleData } from "../dashboard/[module]/sidebar";
import { redirect } from "next/navigation";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    correctAnswer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Jupiter", "Venus", "Saturn"],
    correctAnswer: "Mars",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: [
      "Vincent van Gogh",
      "Leonardo da Vinci",
      "Pablo Picasso",
      "Michelangelo",
    ],
    correctAnswer: "Leonardo da Vinci",
  },
  {
    question: "What is the largest ocean on Earth?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
    correctAnswer: "Pacific Ocean",
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    options: ["Gold", "Oxygen", "Silver", "Iron"],
    correctAnswer: "Oxygen",
  },
  {
    question: "In which year did World War II end?",
    options: ["1943", "1945", "1947", "1950"],
    correctAnswer: "1945",
  },
  {
    question: "What is the largest mammal in the world?",
    options: ["African Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    correctAnswer: "Blue Whale",
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: [
      "Charles Dickens",
      "William Shakespeare",
      "Jane Austen",
      "Mark Twain",
    ],
    correctAnswer: "William Shakespeare",
  },
  {
    question: "What is the main ingredient in guacamole?",
    options: ["Banana", "Avocado", "Apple", "Mango"],
    correctAnswer: "Avocado",
  },
  {
    question: "Which country is home to the kangaroo?",
    options: ["New Zealand", "South Africa", "Australia", "Brazil"],
    correctAnswer: "Australia",
  },
];

export default function QuizComponent() {
  const [answers, setAnswers] = useState(new Array(questions.length).fill(""));
  const [submitted, setSubmitted] = useState(false);

  const score = useMemo(() => {
    return answers.reduce((acc, answer, index) => {
      return answer === questions[index].correctAnswer ? acc + 1 : acc;
    }, 0);
  }, [answers]);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleReset = () => {
    setAnswers(new Array(questions.length).fill(""));
    setSubmitted(false);
  };

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const pathArray = pathname.split("/");
  const module = moduleData.modules.find((item) => item.id == pathArray[2]);
  const articleSubId = searchParams.get("id");
  const subsection = module.subsections.find((sub) =>
    articleSubId ? sub.subid == articleSubId : sub.id === pathArray[3]
  );
  const [startedQuiz, setStartedQuiz] = useState(false)
  

  return (
    <div className="min-h-screen  dark:bg-gray-950">
      <Card className="w-full rounded-xl border-none shadow-none  mx-auto dark:bg-gray-900">
        <CardHeader className="bg-white rounded-t-xl text-black">
          <CardTitle className="text-2xl font-bold flex flex-col justify-between">
            <div>
              {" "}
              <div className="flex flex-row align-middle items-center">
                <SidebarTrigger className="" />
                <div className="flex justify-between w-full">
                  <h1 className="text-4xl font-bold my-2">{module.title}</h1>
                  <div>
                    {startedQuiz ? !submitted ? (
                      <Button
                        onClick={handleSubmit}
                        disabled={answers.some((a) => a === "")}
                        className="w-full"
                      >
                        Submit
                      </Button>
                    ) : (
                      <>
                        <div className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                          Your score: {score} out of {questions.length}
                        </div>
                        <Button onClick={handleReset} variant="outline">
                          Try Again
                        </Button>
                      </>
                    ) : null}
                  </div>
                </div>
              </div>
              <hr className="my-2" />
            </div>
            <div className="flex flex-row justify-between">
              <div>Quiz</div>
            </div>
          </CardTitle>
        </CardHeader>
        {startedQuiz ? (
          <CardContent className="p-6">
            {questions.map((q, index) => (
              <div key={index} className="mb-8">
                <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
                  {index + 1}. {q.question}
                </h3>
                <RadioGroup
                  value={answers[index]}
                  onValueChange={(value) => {
                    const newAnswers = [...answers];
                    newAnswers[index] = value;
                    setAnswers(newAnswers);
                  }}
                  disabled={submitted}
                  className="space-y-2"
                >
                  {q.options.map((option, optionIndex) => (
                    <div
                      key={optionIndex}
                      className={`flex items-center space-x-3 bg-white dark:bg-gray-800 rounded-lg p-3 shadow-sm transition-all ${
                        answers[index] === option
                          ? submitted
                            ? option === q.correctAnswer
                              ? "border-green-500 border-2 shadow-md"
                              : "border-red-500 border-2 shadow-md"
                            : "border-primary border-2 shadow-md"
                          : "border border-gray-200 dark:border-gray-700"
                      }`}
                    >
                      <RadioGroupItem
                        value={option}
                        id={`q${index}-option${optionIndex}`}
                        className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
                      />
                      <Label
                        htmlFor={`q${index}-option${optionIndex}`}
                        className={`flex-grow cursor-pointer text-sm font-medium ${
                          answers[index] === option
                            ? submitted
                              ? option === q.correctAnswer
                                ? "text-green-600 dark:text-green-400"
                                : "text-red-600 dark:text-red-400"
                              : "text-primary dark:text-primary"
                            : "text-gray-700 dark:text-gray-300"
                        }`}
                      >
                        {option}
                      </Label>
                      {submitted && (
                        <>
                          {option === q.correctAnswer && (
                            <CheckCircle className="w-5 h-5 text-green-500" />
                          )}
                          {answers[index] === option &&
                            option !== q.correctAnswer && (
                              <XCircle className="w-5 h-5 text-red-500" />
                            )}
                        </>
                      )}
                    </div>
                  ))}
                </RadioGroup>
                {submitted && answers[index] !== q.correctAnswer && (
                  <p className="mt-2 text-sm text-green-600 dark:text-green-400">
                    Correct answer: {q.correctAnswer}
                  </p>
                )}
              </div>
            ))}
          </CardContent>
        ) : (
          <CardContent className='flex h-[60vh] w-full items-center justify-center text-center'>
            <div>
              <div className="text-2xl font-medium py-6">Do you want to start the quiz?</div>
              <button className="bg-blue-900 text-white px-8 py-2.5 rounded-lg" onClick={()=> setStartedQuiz(true)}>START QUIZ</button>
            </div>
          </CardContent>
        )}
        {/* <CardFooter className="flex justify-between bg-gray-100 dark:bg-gray-800 p-6"></CardFooter> */}
      </Card>
    </div>
  );
}
