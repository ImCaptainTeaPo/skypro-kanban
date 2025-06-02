import { useState, useEffect } from "react";
import { cardsData } from "../../data/data";
import Column from "../Column/Column";

function Main() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCards(cardsData);
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const statuses = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {isLoading ? (
              <p style={{ fontSize: "20px", padding: "20px" }}>
                Данные загружаются…
              </p>
            ) : (
              statuses.map((status) => (
                <Column
                  key={status}
                  title={status}
                  cards={cards.filter((card) => card.status === status)}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
