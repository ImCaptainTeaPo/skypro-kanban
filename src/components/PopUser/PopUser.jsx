import { useEffect, useRef, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

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
  const navigate = useNavigate();
  const modalRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  const { logout } = useContext(AuthContext);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsVisible(false);
        setTimeout(() => navigate("/"), 100);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [navigate]);

  const handleExit = () => {
    setIsVisible(false);
    logout();
    setTimeout(() => navigate("/login"), 100);
  };

  const handleStay = () => {
    setIsVisible(false);
    setTimeout(() => navigate("/"), 100);
  };

  if (!isVisible) return null;

  return (
    <PopExit>
      <PopExitContainer>
        <PopExitBlock ref={modalRef}>
          <PopExitTitle>
            <h2>Выйти из аккаунта?</h2>
          </PopExitTitle>
          <PopExitForm action="#">
            <PopExitFormGroup>
              <PopExitYes onClick={handleExit}>Да, выйти</PopExitYes>
              <PopExitNo onClick={handleStay}>Нет, остаться</PopExitNo>
            </PopExitFormGroup>
          </PopExitForm>
        </PopExitBlock>
      </PopExitContainer>
    </PopExit>
  );
}

export default PopUser;
