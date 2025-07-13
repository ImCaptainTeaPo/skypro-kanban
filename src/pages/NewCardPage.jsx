import Calendar from "../components/Calendar/Calendar";

function NewCardPage() {
  return (
    <div className="pop-new-card" style={{ padding: "40px" }}>
      <div className="pop-new-card__container">
        <div className="pop-new-card__block">
          <div className="pop-new-card__content">
            <h3 className="pop-new-card__ttl">Создание задачи</h3>

            <div className="pop-new-card__wrap">
              <form className="pop-new-card__form form-new" id="formNewCard">
                <div className="form-new__block">
                  <label htmlFor="formTitle" className="subttl">
                    Название задачи
                  </label>
                  <input
                    className="form-new__input"
                    type="text"
                    name="name"
                    id="formTitle"
                    placeholder="Введите название"
                  />
                </div>

                <div className="form-new__block">
                  <p className="subttl">Описание задачи</p>
                  <textarea
                    className="form-new__area"
                    name="text"
                    id="formArea"
                    placeholder="Введите описание"
                  ></textarea>
                </div>

                <div className="form-new__block">
                  <p className="subttl">Выберите категорию</p>
                  <div className="form-new__themes themes">
                    <div className="themes__item _orange _active-category">
                      <p>Web Design</p>
                    </div>
                    <div className="themes__item _green">
                      <p>Research</p>
                    </div>
                    <div className="themes__item _purple">
                      <p>Copywriting</p>
                    </div>
                  </div>
                </div>

                <div className="form-new__block">
                  <p className="subttl">Дедлайн</p>
                  <Calendar />
                </div>

                <button className="form-new__btn-create _hover01" type="submit">
                  Создать задачу
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewCardPage;
