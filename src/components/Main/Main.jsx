import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TaskContext } from "../../context/TaskContext";
import Column from "../Column/Column";
import { Container } from "../shared.styled";
import { MainWrapper, MainBlock, MainContent, MainColumn } from "./Main.styled";

function Main() {
  const navigate = useNavigate();
  const { tasks, loading, error } = useContext(TaskContext);
  console.log("Tasks из контекста:", tasks);

  const statuses = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  // Если нет авторизации — редирект
  if (!localStorage.getItem("userInfo")) {
    navigate("/login");
    return null;
  }

  return (
    <MainWrapper>
      <Container>
        <MainBlock>
          <MainContent>
            {loading ? (
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
                    cards={tasks.filter((task) => task.status === status)}
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
