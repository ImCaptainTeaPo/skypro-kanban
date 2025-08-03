import {
  Container,
  DecorativeCircle,
  HomeButton,
  Message,
  Title,
} from "./NotFound.styled";

const NotFound = () => {
  return (
    <Container>
      <DecorativeCircle />
      <Title>404</Title>
      <Message>
        Упс! Страница, которую вы ищете, не существует. Пожалуйста, вернитесь на
        главную.
      </Message>
      <HomeButton to="/">Вернуться на Главную</HomeButton>
    </Container>
  );
};

export default NotFound;
