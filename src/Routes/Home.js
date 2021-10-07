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
  let nowDate = getTodayDate();

  const [month, setMonth] = useState(nowMonth);
  const [year, setYear] = useState(nowYear);

  const drawTodayMonth = () => {
    setYear(nowYear);
    setMonth(nowMonth);
  };

  const drawPrevMonth = () => {
    let tempMonth = month;
    let tempYear = year;
    if (tempMonth == 1) {
      tempYear--;
      tempMonth = 12;
    } else tempMonth--;
    setYear(tempYear);
    setMonth(tempMonth);
  };

  const drawNextMonth = () => {
    let tempMonth = month;
    let tempYear = year;
    if (tempMonth == 12) {
      tempYear++;
      tempMonth = 1;
    } else tempMonth++;
    setYear(tempYear);
    setMonth(tempMonth);
  };

  return (
    <div>
      <HeaderColumn>
        <Today onClick={drawTodayMonth}>Today</Today>
        <Arrow onClick={drawPrevMonth}>&lt;</Arrow>
        <Arrow onClick={drawNextMonth}>&gt;</Arrow>
        <Title>
          {Month_ENG[month - 1]} {year}
        </Title>
      </HeaderColumn>
      <Calender
        year={year}
        month={month}
        nowYear={nowYear}
        nowMonth={nowMonth}
        nowDate={nowDate}
      ></Calender>
    </div>
  );
}

const HeaderColumn = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 40px;
  margin-left: 130px;
  margin-bottom: 40px;
  align-items: center;
`;

const Title = styled.span`
  font-size: 30px;
  color: grey;
`;

const Today = styled.span`
  font-size: 20px;
  margin-right: 10px;
  border: 1px solid lightgray;
  padding: 10px;
  border-radius: 10px;
  :hover {
    cursor: pointer;
  }
  color: grey;
`;

const Arrow = styled.div`
  font-size: 20px;
  margin-right: 20px;
  :hover {
    cursor: pointer;
  }
  color: grey;
`;

export default Home;
