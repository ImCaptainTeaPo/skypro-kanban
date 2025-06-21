// function Card({ topic, title, date }) {
//   const topicClassMap = {
//     "Web Design": "card__theme--orange",
//     Research: "card__theme--green",
//     Copywriting: "card__theme--purple",
//   };

//   const themeClass = topicClassMap[topic] || "card__theme--default";

//   return (
//     <div className="cards__item">
//       <div className="cards__card card">
//         <div className="card__group">
//           <div className={`card__theme ${themeClass}`}>
//             <p>{topic}</p>
//           </div>
//           <a href="#popBrowse" target="_self">
//             <div className="card__btn">
//               <div></div>
//               <div></div>
//               <div></div>
//             </div>
//           </a>
//         </div>
//         <div className="card__content">
//           <a href="" target="_blank">
//             <h3 className="card__title">{title}</h3>
//           </a>
//           <div className="card__date">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="13"
//               height="13"
//               viewBox="0 0 13 13"
//               fill="none"
//             >
//               <g clipPath="url(#clip0_1_415)">
//                 <path
//                   d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z"
//                   stroke="#94A6BE"
//                   strokeWidth="0.8"
//                   strokeLinejoin="round"
//                 />
//                 <path
//                   d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z"
//                   stroke="#94A6BE"
//                   strokeWidth="0.8"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </g>
//               <defs>
//                 <clipPath id="clip0_1_415">
//                   <rect width="13" height="13" fill="white" />
//                 </clipPath>
//               </defs>
//             </svg>
//             <p>{date}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Card;



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

function Card({ topic, title, date }) {

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
          <a href="#popBrowse" target="_self">
            <CardButton>
              <div></div>
              <div></div>
              <div></div>
            </CardButton>
          </a>
        </CardGroup>

        <CardContent>
          <a href="#" target="_blank">
            <CardTitle>{title}</CardTitle>
          </a>
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
