import { Oleg } from "../data/Oleg";

export const Form = () => {
  return (
    <>
      <article class="card">
        <h1>Справа за номером {Oleg.id}</h1>

        <div class="main-Info-Container">
          <div class="image-placeholder">
            <img
              src="../../img/photo_2026-04-01_19-44-28.jpg"
              alt="Фото ухилянта"
              className="main-photo"
            />
          </div>
          <section class="content">
            <h1>Лепехін Олег Віталійович</h1>

            <div class="info-row">
              <span class="label">Повних років:</span>
              <span class="value">26 років</span>
            </div>

            <div class="info-row">
              <span class="label">Статус:</span>
              <span class="status">
                Подано на екстрадицію з країни проживання
              </span>
            </div>

            <div class="info-row">
              <span class="label">Країна проживання:</span>
              <span class="value">Італія</span>
            </div>
          </section>
        </div>
        <section className="content">
          <div class="description">
            <strong>Відкрито карне впровадження за:</strong>
         С ПЕРВЫМ АПРЕЛЯ
          </div>
        </section>
      </article>
    </>
  );
};
