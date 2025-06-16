import { useState } from "react";
import {
  HeaderWrapper,
  HeaderBlock,
  HeaderLogo,
  HeaderNav,
  HeaderButton,
  HeaderUser,
  HeaderPopUserSet,
} from "./Header.styled";

function Header() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <HeaderWrapper>
      <div className="container">
        <HeaderBlock>
          {/* Светлый логотип */}
          <div className="_show _light">
            <a href="" target="_self">
              <HeaderLogo src="images/logo.png" alt="logo" />
            </a>
          </div>

          {/* Тёмный логотип */}
          <div className="_dark">
            <a href="" target="_self">
              <HeaderLogo src="images/logo_dark.png" alt="logo" />
            </a>
          </div>

          <HeaderNav>
            <HeaderButton id="btnMainNew">
              <a href="#popNewCard">Создать новую задачу</a>
            </HeaderButton>

            <HeaderUser onClick={() => setIsPopupOpen(!isPopupOpen)}>
              Ivan Ivanov
            </HeaderUser>

            <HeaderPopUserSet
              style={{ display: isPopupOpen ? "block" : "none" }}
            >
              <p className="pop-user-set__name">Ivan Ivanov</p>
              <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
              <div className="pop-user-set__theme">
                <p>Темная тема</p>
                <input type="checkbox" className="checkbox" name="checkbox" />
              </div>
              <button type="button" className="_hover03">
                <a href="#popExit">Выйти</a>
              </button>
            </HeaderPopUserSet>
          </HeaderNav>
        </HeaderBlock>
      </div>
    </HeaderWrapper>
  );
}

export default Header;
