import styled from "styled-components";

export const CalendarWrapper = styled.div`
  width: 100%;
  max-width: 340px;
  margin-left: 21px;
`;

export const CalendarTtl = styled.p`
  font-size: 14px;
  line-height: 100%;
  margin-bottom: 14px;
`;

export const CalendarBlock = styled.div`
  display: block;
`;

export const CalendarNav = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  display: flex;
  justify-content: space-between;
  margin-top: 7px;
  margin-bottom: 12px;
`;

export const CalendarDayName = styled.div`
  color: #94a6be;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.2px;

  &.calendar__day-name.-weekend- {
    color: #ff5c5c;
  }
`;

export const CalendarCells = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const CalendarCell = styled.div`
  width: 42px;
  height: 42px;
  margin: 0 0 0 2px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.2px;
  color: #94a6be;
  cursor: pointer;

  &._weekend {
    color: #ff5c5c;
  }

  &._other-month {
    color: #d5d5d5;
  }

  &._current {
    color: #000000;
    background-color: #eaeef6;
    font-weight: 700;
  }
`;

export const CalendarPeriod = styled.div`
  padding: 0;
`;

export const CalendarParagraph = styled.p`
  color: #94a6be;
  font-size: 14px;
  line-height: 1;

  span {
    color: #000000;
  }
`;
