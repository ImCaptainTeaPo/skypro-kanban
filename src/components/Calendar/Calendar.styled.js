import styled from "styled-components";

export const CalendarWrapper = styled.div`
  width: 100%;
  max-width: 340px;
`;

export const CalendarBlock = styled.div`
  display: block;
`;

export const CalendarTtl = styled.div`
  margin-bottom: 14px;
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

export const CalendarMonth = styled.p`
  color: #94a6be;
  font-size: 14px;
  line-height: 25px;
  font-weight: 600;
`;

export const CalendarContent = styled.div`
  margin-bottom: 12px;
`;

export const CalendarDaysNames = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  margin: 7px 0;
  padding: 0 7px;
`;

export const CalendarDayName = styled.div`
  color: #94a6be;
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.2px;
`;

export const CalendarCells = styled.div`
  width: 344px;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const CalendarCell = styled.div`
  width: 42px;
  height: 42px;
  margin: 2px;
  border-radius: 50%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  color: #94a6be;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.2px;
  cursor: pointer;
`;

export const CalendarNav = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
  padding: 0;
`;

export const CalendarPeriod = styled.div`
  padding: 0;
`;

export const DateCreate = styled.div`
  display: none;
  margin-bottom: 7px;
`;
