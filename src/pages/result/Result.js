import React from 'react';
import { useLocation, Link } from 'react-router-dom';

export default function Result() {
  const params = new URLSearchParams(useLocation().search)
  const numberOfCorrectAnswers = params.get('result');
  const numberOfQuestions = params.get('questions');

  return (
    <>
      <div className="box__img">
        <img
          src='https://s2.glbimg.com/WEiC_rzHBH3JeQALYyLVlA_lXrM=/0x0:4000x2250/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/n/v/wOBLo5QQWOP7XduqhM3g/coronavirus-4-.jpg'
          alt="Corona vírus"
        />
      </div>

      <div className="box__title">
        <h1>Parabéns, você concluiu o teste!</h1>
      </div>

      <div className="box__question">
        <p>
          Você acertou {numberOfCorrectAnswers} de { numberOfQuestions } perguntas!
        </p>
      </div>

      <div className="box__footer">
        <div className="box__footer__item">
          <Link
            to="/"
            className="button button--primary"
          >
            Recomeçar
          </Link>
        </div>
      </div>
    </>
  );
}