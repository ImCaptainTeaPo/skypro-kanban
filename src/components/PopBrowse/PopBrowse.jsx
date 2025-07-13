import Calendar from "../Calendar/Calendar";
import { cardsData } from "../../data/data";

function PopBrowse({ cardId }) {
  const card = cardsData.find((c) => c.id === Number(cardId));

  if (!card) {
    return (
      <p style={{ padding: "20px" }}>Карточка с ID {cardId} не найдена.</p>
    );
  }

  return (
    <div className="pop-browse">
      <div className="pop-browse__container">
        <div className="pop-browse__block">
          <div className="pop-browse__content">
            <div className="pop-browse__top-block">
              <h3 className="pop-browse__ttl">{card.title}</h3>
              <div className="categories__theme theme-top _orange _active-category">
                <p className="_orange">{card.topic}</p>
              </div>
            </div>

            <div className="pop-browse__status status">
              <p className="status__p subttl">Статус</p>
              <div className="status__themes">
                <div className="status__theme">
                  <p>{card.status}</p>
                </div>
              </div>
            </div>

            <div className="pop-browse__wrap-textarea">
              <p className="subttl">Описание задачи</p>
              <textarea
                className="pop-browse__area area"
                name="text"
                placeholder="Введите описание..."
                defaultValue="Тут будет описание (пока не задано)"
              ></textarea>
            </div>

            <div className="pop-browse__calendar calendar">
              <p className="subttl">Дедлайн</p>
              <input
                className="calendar__input"
                type="text"
                defaultValue={card.date}
              />
            </div>

            <div className="pop-browse__btn-wrap">
              <button className="pop-browse__btn-save _orange-btn">
                Сохранить
              </button>
              <button className="pop-browse__btn-delete _transparent-btn">
                Удалить задачу
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopBrowse;
