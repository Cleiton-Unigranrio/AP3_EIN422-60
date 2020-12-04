import { Link } from 'react-router-dom';
import coronaImage from '../../assets/image/corona-virus.jpg';

export default function Home() {
  return (
    <>
      <div className="box__img">
        <img
          src={coronaImage}
          alt="Corona vírus"
        />
      </div>

      <div className="box__title">
        <h1>O quanto você sabe sobre covid-19?</h1>
      </div>

      <div className="box__question">
        <p>
          Faça o teste e descubra o quão bem informado sobre
          essa enfermidade você é!
        </p>
      </div>

      <div className="box__footer">
        <div className="box__footer__item">
          <Link
            to="/quiz"
            className="button button--primary"
          >
            Começar
          </Link>
        </div>
      </div>
    </>
  );
}