import { useState } from "react";
import { Oleg } from "../data/Oleg";

export const Start = ({ start }) => {
  const [status, setStatus] = useState(false);
  const handleClick = () => {
    start(false);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const form = evt.target;
    const { login } = form.elements;
    if (Oleg.passport.includes(login.value)) {
      setStatus(true);
      form.reset();
      return;
    }
    setStatus(false);
    form.reset();
  };
  return (
    <>
      <div className="list-headers">
        <p className="header-main info">
          Отримуйте інформацію лише з офіційних джерел
        </p>
        <p className="header-main">
          Єдиний Контакт-центр судової влади України{" "}
          <span className="important-info">044 207-35-46</span>
        </p>
      </div>
      <div className="global-container">
        <div className="start-container">
          <img src="/img/femida.svg" alt="femida" className="femida" />
          <form action="submit" onSubmit={handleSubmit} className="form">
            <img src="/img/uk.svg" alt="femida" className="uk" />

            <div className="form-input-container">
              <label htmlFor="login" className="ukraine-force">
                Судова влада України
              </label>
              <input
                type="text"
                id="login"
                name="login"
                className="input"
                maxLength={20}
              />
            </div>
            <button type="submit" className="btn-search">
              Пошук
            </button>
          </form>
        </div>

        {status && (
          <div onClick={handleClick} className="search-result">
            Справа <span className="important-info">№{Oleg.id}</span>
            <br />
            <span>Лепехін Олег Віталійович</span>
          </div>
        )}
      </div>
    </>
  );
};
