import { Link } from "react-router-dom";
import {
  CardItem,
  CardWrapper,
  CardGroup,
  CardTheme,
  CardButton,
  CardContent,
  CardTitle,
  CardDate,
} from "./Card.styled";

function Card({ _id, topic, title, date }) {
  const themeClassMap = {
    "Web Design": "card__theme--orange",
    Research: "card__theme--green",
    Copywriting: "card__theme--purple",
  };

  const themeClass = themeClassMap[topic] || "card__theme--default";

  return (
    <CardItem>
      <CardWrapper>
        <CardGroup>
          <CardTheme className={themeClass}>
            <p>{topic}</p>
          </CardTheme>
          <Link to={`/card/${_id}`}>
            <CardButton>
              <div></div>
              <div></div>
              <div></div>
            </CardButton>
          </Link>
        </CardGroup>

        <CardContent>
          <Link to={`/card/${_id}`}>
            <CardTitle>{title}</CardTitle>
          </Link>
          <CardDate>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <g clipPath="url(#clip0_1_397)">
                <path
                  d="M12.6666 2.66663H3.33329C2.59691 2.66663 2.00659 3.26698 2.00659 4.00004L2 12C2 12.7331 2.59691 13.3334 3.33329 13.3334H12.6666C13.403 13.3334 14 12.7331 14 12V4.00004C14 3.26698 13.403 2.66663 12.6666 2.66663ZM12.6666 12H3.33329V6.66671H12.6666V12ZM3.33329 4.00004H12.6666V5.33337H3.33329V4.00004Z"
                  fill="#94A6BE"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_397">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p>{date}</p>
          </CardDate>
        </CardContent>
      </CardWrapper>
    </CardItem>
  );
}

export default Card;
