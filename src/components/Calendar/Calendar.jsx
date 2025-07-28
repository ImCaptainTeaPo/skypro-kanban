import {
  CalendarWrapper,
  CalendarTtl,
  CalendarBlock,
  CalendarNav,
  CalendarMonth,
  NavActions,
  NavAction,
  CalendarContent,
  CalendarDaysNames,
  CalendarDayName,
  CalendarCells,
  CalendarCell,
  CalendarPeriod,
  CalendarParagraph,
} from "./Calendar.styled";

function Calendar() {
  return (
    <CalendarWrapper>
      <CalendarTtl>Даты</CalendarTtl>
      <CalendarBlock>
        <CalendarNav>
          <CalendarMonth>Сентябрь 2023</CalendarMonth>
          <NavActions>
            <NavAction data-action="prev">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="11"
                viewBox="0 0 6 11"
              >
                <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
              </svg>
            </NavAction>
            <NavAction data-action="next">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="11"
                viewBox="0 0 6 11"
              >
                <path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z" />
              </svg>
            </NavAction>
          </NavActions>
        </CalendarNav>

        <CalendarContent>
          <CalendarDaysNames>
            {["пн", "вт", "ср", "чт", "пт", "сб", "вс"].map((day, index) => (
              <CalendarDayName key={day} $weekend={index > 4}>
                {day}
              </CalendarDayName>
            ))}
          </CalendarDaysNames>

          <CalendarCells>
            {[
              // Неделя 1
              { label: "28", other: true },
              { label: "29", other: true },
              { label: "30", other: true },
              { label: "31" },
              { label: "1" },
              { label: "2", weekend: true },
              { label: "3", weekend: true },

              // Неделя 2
              { label: "4" },
              { label: "5" },
              { label: "6" },
              { label: "7" },
              { label: "8", current: true },
              { label: "9", weekend: true },
              { label: "10", weekend: true },

              // Неделя 3
              { label: "11" },
              { label: "12" },
              { label: "13" },
              { label: "14" },
              { label: "15" },
              { label: "16", weekend: true },
              { label: "17", weekend: true },

              // Неделя 4
              { label: "18" },
              { label: "19" },
              { label: "20" },
              { label: "21" },
              { label: "22" },
              { label: "23", weekend: true },
              { label: "24", weekend: true },

              // Неделя 5
              { label: "25" },
              { label: "26" },
              { label: "27" },
              { label: "28" },
              { label: "29" },
              { label: "30", weekend: true },
              { label: "1", other: true, weekend: true },
            ].map((day, idx) => (
              <CalendarCell
                key={idx}
                $other={day.other}
                $current={day.current}
                $weekend={day.weekend}
              >
                {day.label}
              </CalendarCell>
            ))}
          </CalendarCells>
        </CalendarContent>

        <CalendarPeriod>
          <CalendarParagraph>
            Выберите срок исполнения <span>09.09.2023</span>
          </CalendarParagraph>
        </CalendarPeriod>
      </CalendarBlock>
    </CalendarWrapper>
  );
}

export default Calendar;
