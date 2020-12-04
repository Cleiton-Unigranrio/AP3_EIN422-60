import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { quizData } from './quiz-data';

export default function Quiz() {
  const history = useHistory();
  
  const [questions, setQuestions] = useState(quizData);
  const [isAnswered, setIsAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [numberOfCorrectAnswers, setNumberOfCorrectAnswers] = useState(0);

  function handleButtonClick() {
    if(notAnswered())
      processAnswer();

    if(isLastQuestion())
      showQuizResults();
    else if(notAnswered())
      showAnswers();
    else
      nextQuestion(); 
  }

  function nextQuestion() {
    setIsAnswered(false);

    const copy = [...questions];
    copy.shift();

    setSelectedAnswer('');
    setQuestions(copy);
  }

  function isLastQuestion() {
    return questions.length === 1;
  }

  function notAnswered() {
    return isAnswered === false;
  }

  function showAnswers() {
    setIsAnswered(true);
  }

  function showQuizResults() {
    history.push(`/result?result=${numberOfCorrectAnswers}&questions=${quizData.length}`);
  }

  function processAnswer() {
    if(isAnswerCorrect())
      setNumberOfCorrectAnswers(numberOfCorrectAnswers + 1);
  }

  function isAnswerCorrect() {
    return questions[0].options[selectedAnswer].isCorrect;
  }

  return (
    <>
      <div className="box__img">
        <img
          src={questions[0].image}
          alt="Corona vírus"
        />
      </div>

      <div className="box__title">
        <h1>{questions[0].title}</h1>
      </div>

      <div className="box__question">
        <p>
          {questions[0].question}
        </p>
      </div>

      {!isAnswered
        ? (
          <form className="box__options">
            {questions[0].options.map((option, i) => (
              <div className="formgroup" key={i}>
                <input
                  type="radio"
                  id={`option${i}`}
                  value={i}
                  checked={selectedAnswer === i}
                  onChange={() => setSelectedAnswer(i)}
                  name="options"
                />
    
                <label htmlFor={`option${i}`}>{option.answer}</label>
              </div>
           ))}
          </form>
        )
      : (
        <div className="box__options">
          {questions[0].options.map((option, i) => (
            <div
              key={i}
              className={option.isCorrect ? 'option-result option-result--is-correct' : 'option-result'}
            >
              <div
                className="option-result__content"
                style={{ width: `${option.averageAnswer}%` }}
              >
                {option.averageAnswer + '%'}
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="box__footer">
        <div className="box__footer__item">
          <button
            onClick={handleButtonClick}
            className="button button--primary"
            disabled={selectedAnswer === ''}
          >
            { questions.length > 1 ? 'Continuar' : 'Finalizar' }
          </button>
        </div>
      </div>
    </>
  );
}