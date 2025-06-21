import { useState } from "react";
import {
  HeaderWrapper,
  HeaderBlock,
  HeaderLogo,
  HeaderNav,
  HeaderButton,
  HeaderUser,
  HeaderPopUserSet,
  PopUserName,
  PopUserMail,
  PopUserTheme,
  PopUserThemeLabel,
  PopUserThemeToggle,
  PopUserExitButton,
} from "./Header.styled";

function Header() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <HeaderWrapper>
      <div className="container">
        <HeaderBlock>
          {/* Светлый логотип */}
          <div className={!isDarkTheme ? "_show _light" : "_hide"}>
            <a href="" target="_self">
              <HeaderLogo src="images/logo.png" alt="logo" />
            </a>
          </div>

          {/* Тёмный логотип */}
          <div className={isDarkTheme ? "_dark" : "_hide"}>
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

            <HeaderPopUserSet $isOpen={isPopupOpen}>
              <PopUserName>Ivan Ivanov</PopUserName>
              <PopUserMail>ivan.ivanov@gmail.com</PopUserMail>
              <PopUserTheme>
                <PopUserThemeLabel>Темная тема</PopUserThemeLabel>
                <PopUserThemeToggle
                  checked={isDarkTheme}
                  onChange={() => setIsDarkTheme(!isDarkTheme)}
                />
              </PopUserTheme>
              <PopUserExitButton>
                <a href="#popExit">Выйти</a>
              </PopUserExitButton>
            </HeaderPopUserSet>
          </HeaderNav>
        </HeaderBlock>
      </div>
    </HeaderWrapper>
  );
}

export default Header;
