import Calendar from "../components/Calendar/Calendar";
import {
  PopNewCard,
  PopNewCardContainer,
  PopNewCardBlock,
  PopNewCardContent,
  PopNewCardTitle,
  PopNewCardWrap,
  PopNewCardForm,
  PopNewCardCalendar,
  FormBlock,
  FormInput,
  FormArea,
  FormButton,
  FormSubTitle,
  ThemesGroup,
  ThemeItem,
} from "./NewCardPage.styled";
import { PopNewCardClose } from "./NewCardPage.styled";

function NewCardPage() {
  return (
    <PopNewCard>
      <PopNewCardContainer>
        <PopNewCardBlock>
          <PopNewCardContent>
            <PopNewCardTitle>Создание задачи</PopNewCardTitle>
            <PopNewCardClose>&times;</PopNewCardClose>

            <PopNewCardWrap>
              <PopNewCardForm id="formNewCard">
                <FormBlock>
                  <label htmlFor="formTitle">
                    <FormSubTitle>Название задачи</FormSubTitle>
                  </label>
                  <FormInput
                    type="text"
                    name="name"
                    id="formTitle"
                    placeholder="Введите название"
                  />
                </FormBlock>

                <FormBlock>
                  <FormSubTitle>Описание задачи</FormSubTitle>
                  <FormArea
                    name="text"
                    id="formArea"
                    placeholder="Введите описание"
                  />
                </FormBlock>

                <FormBlock>
                  <FormSubTitle>Выберите категорию</FormSubTitle>
                  <ThemesGroup>
                    <ThemeItem variant="orange" active>
                      <p>Web Design</p>
                    </ThemeItem>
                    <ThemeItem variant="green">
                      <p>Research</p>
                    </ThemeItem>
                    <ThemeItem variant="purple">
                      <p>Copywriting</p>
                    </ThemeItem>
                  </ThemesGroup>
                </FormBlock>
              </PopNewCardForm>
              <FormBlock>
                <PopNewCardCalendar>
                  <Calendar />
                </PopNewCardCalendar>
              </FormBlock>
            </PopNewCardWrap>
            <FormButton type="submit">Создать задачу</FormButton>
          </PopNewCardContent>
        </PopNewCardBlock>
      </PopNewCardContainer>
    </PopNewCard>
  );
}

export default NewCardPage;
