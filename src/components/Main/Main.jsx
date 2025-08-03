import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TaskContext } from "../../context/TaskContext";
import Column from "../Column/Column";
import { Container } from "../shared.styled";
import { MainWrapper, MainBlock, MainContent, MainColumn } from "./Main.styled";
import Loader from "../Loaders/Loader";

function Main() {
  const navigate = useNavigate();
  const { tasks, loading, error } = useContext(TaskContext);

  const statuses = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  if (!localStorage.getItem("userInfo")) {
    navigate("/login");
    return null;
  }

  return (
    <MainWrapper>
      <Container>
        <MainBlock>
          <MainContent>
            {error ? (
              <p style={{ color: "red", fontSize: "18px", padding: "20px" }}>
                {error}
              </p>
            ) : (
              statuses.map((status) => (
                <MainColumn key={status}>
                  <Column
                    loading={loading}
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
