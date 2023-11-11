import React, { useState } from "react";
import { QuizType } from "../data/quiz";

interface ManinProps {
  quiz: QuizType;
  handleContinue: () => void;
  handleVideoProgress: () => void;
}

const Quiz: React.FC<ManinProps> = ({ quiz, handleContinue }) => {
  const { questions } = quiz;
  const [answerMessage, setAnswerMessage] = useState("");
  const [userAnswer, setUserAnswer] = useState<number>();

  const handleChoice = (i: number) => {
    setUserAnswer(() => i);
  };

  const handleSummit = (quessionIndex: number) => {
    // alert(`aswer summited for quession ${quessionIndex} and the answer is ${userAnswer}`)
    const currentQ = quiz["questions"][quessionIndex];

    if (currentQ["correctAnswer"] === userAnswer) {
      setAnswerMessage(currentQ["messageForCorrectAnswer"]);
    } else {
      setAnswerMessage(currentQ["messageForIncorrectAnswer"]);
    }
    handleContinue();
  };

  return (
    <div>
      <div>
        <h1 className=""> Ready For New Quiz</h1>
        {questions.map((q, qIndex) => (
          <div>
            <div>
              <h1>{q.question}</h1>
            </div>

            {q.questionPic && (
              <div>
                <img src={q.questionPic} alt="quession picture" />
              </div>
            )}

            <h1>{answerMessage}</h1>

            {answerMessage && <h2>{q.explanation}</h2>}
            <h2> Chooices</h2>

            <div>
              {q.answers.map((choice, choiceIndex) => (
                <div key={choiceIndex}>
                  <label>
                    <input
                      type="radio"
                      value={userAnswer}
                      checked={userAnswer == choiceIndex}
                      onChange={() => handleChoice(choiceIndex)}
                    />
                    {choice}
                  </label>
                </div>
              ))}
            </div>

            <div>
              <div>
                <button onClick={handleContinue}>Skip</button>
              </div>
              <div>
                <button onClick={() => handleSummit(qIndex)}>Summit</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
