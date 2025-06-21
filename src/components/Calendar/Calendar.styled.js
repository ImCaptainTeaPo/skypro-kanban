import styled from "styled-components";

export const CalendarWrapper = styled.div`
  width: 100%;
  max-width: 340px;
  margin-left: 21px;
  margin-bottom: 20px;

  @media (max-width: 660px) {
    max-width: 100%;
    width: 100%;
    margin-left: 0;
  }
`;

export const CalendarTtl = styled.p`
  font-size: 14px;
  line-height: 100%;
  margin-bottom: 14px;
  padding: 0 7px;
  color: #000;
  font-weight: 600;
`;

export const CalendarBlock = styled.div`
  display: block;
`;

export const CalendarNav = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 7px;
  margin-top: 14px;
`;

export const CalendarMonth = styled.div`
  color: #94a6be;
  font-size: 14px;
  line-height: 25px;
  font-weight: 600;
`;

export const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const NavAction = styled.div`
  width: 20px;
  height: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    fill: #94a6be;
  }
`;

export const CalendarContent = styled.div`
  margin-bottom: 12px;
`;

export const CalendarDaysNames = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
  margin: 7px 0;
  padding: 0 7px;
`;

export const CalendarDayName = styled.div`
  color: ${(props) => (props.$weekend ? "#ff5c5c" : "#94a6be")};
  font-size: 10px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.2px;
  text-align: center;

  @media (max-width: 660px) {
    font-size: 14px;
  }
`;

export const CalendarCells = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
  padding: 0 7px;

  @media (max-width: 660px) {
    gap: 8px;
  }
`;

export const CalendarCell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1/1;
  border-radius: 50%;
  font-size: 10px;
  line-height: 1;
  letter-spacing: -0.2px;
  color: ${(props) => {
    if (props.$other) return "#d5d5d5";
    if (props.$weekend) return "#ff5c5c";
    return "#94a6be";
  }};
  cursor: pointer;
  font-weight: ${(props) => (props.$current ? "700" : "normal")};
  background-color: ${(props) => (props.$current ? "#eaeef6" : "transparent")};

  &:hover {
    background-color: #eaeef6;
  }

  @media (max-width: 660px) {
    font-size: 14px;
  }
`;

export const CalendarPeriod = styled.div`
  padding: 0 7px;
`;

export const CalendarParagraph = styled.p`
  color: #94a6be;
  font-size: 10px;
  line-height: 1;

  span {
    color: #000000;
    font-weight: 600;
  }

  @media (max-width: 660px) {
    font-size: 14px;
  }
`;
