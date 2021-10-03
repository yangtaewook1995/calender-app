import { render } from "@testing-library/react";
import React, { useState } from "react";
import styled from "styled-components";
import { getTodayYear, getTodayMonth, getTodayDate } from "../calcDate";
import Calender from "../Components/Calendar";

const Month_ENG = [
  "January",
  "Feburary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function Home() {
  let nowYear = getTodayYear();
  let nowMonth = getTodayMonth();
  let temp = nowMonth;

  const [month, setMonth] = useState(nowMonth);
  const [year, setYear] = useState(nowYear);

  const drawPrevMonth = () => {
    if (nowMonth == 1) {
      nowYear--;
      nowMonth = 12;
    } else nowMonth--;
    setYear(nowYear);
    setMonth(nowMonth);
  };

  const drawNextMonth = () => {
    if (nowMonth == 12) {
      nowYear++;
      nowMonth = 1;
    } else nowMonth++;
    setYear(nowYear);
    setMonth(nowMonth);
  };

  return (
    <div>
      <HeaderColumn>
        <Arrow onClick={drawPrevMonth}>◀️</Arrow>
        <Title>
          {Month_ENG[month - 1]} {year}
        </Title>
        <Arrow onClick={drawNextMonth}>▶️</Arrow>
      </HeaderColumn>
      <Calender year={nowYear} month={month}></Calender>
    </div>
  );
}

const HeaderColumn = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
const Title = styled.span``;
const Arrow = styled.button`
  margin: 0px 20px;
`;

export default Home;
