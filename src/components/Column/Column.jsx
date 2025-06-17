import Card from "../Card/Card";
import {
  ColumnWrapper,
  ColumnTitle,
  ColumnTitleText,
  CardsContainer,
} from "./Column.styled";

function Column({ title, cards }) {
  return (
    <ColumnWrapper>
      <ColumnTitle>
        <ColumnTitleText>{title}</ColumnTitleText>
      </ColumnTitle>
      <CardsContainer>
        {cards && cards.length > 0 ? (
          cards.map((card) => (
            <Card
              key={card.id}
              topic={card.topic}
              title={card.title}
              date={card.date}
            />
          ))
        ) : (
          <p style={{ padding: "10px", fontStyle: "italic" }}>Нет задач</p>
        )}
      </CardsContainer>
    </ColumnWrapper>
  );
}

export default Column;
