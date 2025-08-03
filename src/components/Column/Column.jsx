import Card from "../Card/Card";
import Loader from "../Loaders/Loader";
import {
  ColumnWrapper,
  ColumnTitle,
  ColumnTitleText,
  CardsContainer,
} from "./Column.styled";

function Column({ title, cards, loading }) {
  return (
    <ColumnWrapper>
      <ColumnTitle>
        <ColumnTitleText>{title}</ColumnTitleText>
      </ColumnTitle>
      <CardsContainer>
        {cards && cards.length > 0 ? (
          cards.map((card) => {
            if (loading) {
              return <Loader key={card._id} />;
            } else {
              return (
                <Card
                  key={card._id}
                  _id={card._id}
                  topic={card.topic}
                  title={card.title}
                  date={card.date}
                />
              );
            }
          })
        ) : (
          <p style={{ padding: "10px", fontStyle: "italic" }}>Нет задач</p>
        )}
      </CardsContainer>
    </ColumnWrapper>
  );
}

export default Column;

// {cards && cards.length > 0 ? (
//           cards.map((card) => {
//             loading ? (
//               <Loader />
//             ) : (
//               <Card
//                 _id={card._id}
//                 key={card._id}
//                 topic={card.topic}
//                 title={card.title}
//                 date={card.date}
//               />
//             );
//           })
//         ) : (
//           <p style={{ padding: "10px", fontStyle: "italic" }}>Нет задач</p>
//         )}
