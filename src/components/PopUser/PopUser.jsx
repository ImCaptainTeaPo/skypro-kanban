import {
  PopExit,
  PopExitContainer,
  PopExitBlock,
  PopExitTitle,
  PopExitForm,
  PopExitFormGroup,
  PopExitYes,
  PopExitNo,
} from "./PopUser.styled";

function PopUser() {
  return (
    <PopExit id="popExit">
      <PopExitContainer>
        <PopExitBlock>
          <PopExitTitle>
            <h2>Выйти из аккаунта?</h2>
          </PopExitTitle>
          <PopExitForm id="formExit" action="#">
            <PopExitFormGroup>
              <PopExitYes id="exitYes">
                <a href="modal/signin.html">Да, выйти</a>
              </PopExitYes>
              <PopExitNo id="exitNo">
                <a href="main.html">Нет, остаться</a>
              </PopExitNo>
            </PopExitFormGroup>
          </PopExitForm>
        </PopExitBlock>
      </PopExitContainer>
    </PopExit>
  );
}

export default PopUser;
