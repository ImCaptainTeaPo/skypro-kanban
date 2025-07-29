import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getTasks } from "../../services/api";
import Column from "../Column/Column";
import { Container } from "../shared.styled";
import { MainWrapper, MainBlock, MainContent, MainColumn } from "./Main.styled";

function Main() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));

      if (!userInfo?.token) {
        navigate("/login");
        return;
      }

      try {
        const tasks = await getTasks(userInfo.token);
        console.log("Задачи с сервера:", tasks);
        setCards(tasks);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [navigate]);

  const statuses = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  return (
    <MainWrapper>
      <Container>
        <MainBlock>
          <MainContent>
            {isLoading ? (
              <p style={{ fontSize: "20px", padding: "20px" }}>
                Данные загружаются…
              </p>
            ) : error ? (
              <p style={{ color: "red", fontSize: "18px", padding: "20px" }}>
                {error}
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
      </Container>
    </MainWrapper>
  );
}

export default Main;
