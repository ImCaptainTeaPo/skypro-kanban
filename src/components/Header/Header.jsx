import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "../shared.styled";
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

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsPopupOpen(false);
        setTimeout(() => navigate("/"), 100);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [navigate]);

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
            <HeaderButton id="btnMainNew" onClick={() => navigate("/new")}>
              Создать новую задачу
            </HeaderButton>

            <HeaderUser onClick={() => setIsPopupOpen(!isPopupOpen)}>
              Ivan Ivanov
            </HeaderUser>

            <HeaderPopUserSet ref={modalRef} $isOpen={isPopupOpen}>
              <PopUserName>Ivan Ivanov</PopUserName>
              <PopUserMail>ivan.ivanov@gmail.com</PopUserMail>
              <PopUserTheme>
                <PopUserThemeLabel>Темная тема</PopUserThemeLabel>
                <PopUserThemeToggle
                  checked={isDarkTheme}
                  onChange={() => setIsDarkTheme(!isDarkTheme)}
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
