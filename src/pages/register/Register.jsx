import {
  Wrapper,
  Container,
  Modal,
  ModalBlock,
  ModalTitle,
  Form,
  Input,
  Button,
  FormGroup,
} from "../login/Login.styled";

function Register() {
  return (
    <Wrapper>
      <Container>
        <Modal>
          <ModalBlock>
            <ModalTitle>
              <h2>Регистрация</h2>
            </ModalTitle>
            <Form>
              <Input type="text" name="login" placeholder="Эл. почта" />
              <Input type="password" name="password" placeholder="Пароль" />
              <Input
                type="password"
                name="passwordRepeat"
                placeholder="Повторите пароль"
              />
              <Button type="submit">Зарегистрироваться</Button>
              <FormGroup>
                <p>Уже есть аккаунт?</p>
                <a href="/login">Войти</a>
              </FormGroup>
            </Form>
          </ModalBlock>
        </Modal>
      </Container>
    </Wrapper>
  );
}

export default Register;
