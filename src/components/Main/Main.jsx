import { useState, useEffect } from "react";
import { cardsData } from "../../data/data";
import Column from "../Column/Column";
import { MainWrapper, MainBlock, MainContent, MainColumn } from "./Main.styled";

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
    <MainWrapper>
      <div className="container">
        <MainBlock>
          <MainContent>
            {isLoading ? (
              <p style={{ fontSize: "20px", padding: "20px" }}>
                Данные загружаются…
              </p>
            ) : (
              statuses.map((status) => (
                <MainColumn key={status}>
                  <Column
                    title={status}
                    cards={cards.filter((card) => card.status === status)}
                  />
                </MainColumn>
              ))
            )}
          </MainContent>
        </MainBlock>
      </div>
    </MainWrapper>
  );
}

export default Main;
