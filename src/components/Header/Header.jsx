import { useEffect, useRef, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "../shared.styled";
import { AuthContext } from "../../context/AuthContext";

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
  const navigate = useNavigate();
  const modalRef = useRef(null);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setTimeout(() => setIsPopupOpen(false), 100);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <HeaderWrapper>
      <Container>
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
            <HeaderButton id="btnMainNew" to="/new">
              Создать новую задачу
            </HeaderButton>

            <HeaderUser onClick={() => setIsPopupOpen(!isPopupOpen)}>
              {user?.name || "Пользователь"}
            </HeaderUser>

            <HeaderPopUserSet ref={modalRef} $isOpen={isPopupOpen}>
              <PopUserName>{user?.name || "Имя не указано"}</PopUserName>
              <PopUserMail>{user?.email || "email@example.com"}</PopUserMail>

              <PopUserTheme>
                <PopUserThemeLabel>Темная тема</PopUserThemeLabel>
                <PopUserThemeToggle
                  onClick={() => setIsDarkTheme(!isDarkTheme)}
                />
              </PopUserTheme>

              <PopUserExitButton onClick={() => navigate("/exit")}>
                Выйти
              </PopUserExitButton>
            </HeaderPopUserSet>
          </HeaderNav>
        </HeaderBlock>
      </Container>
    </HeaderWrapper>
  );
}

export default Header;
