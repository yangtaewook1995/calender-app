import React from "react";
import styled from "styled-components";
import {
  getTodayYear,
  getTodayMonth,
  getTodayDate,
  getFirstDay,
  getLastDate,
} from "../calcDate";
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

const drawCalendar = (year, month) => {
  let week = [];
  let cnt = 1;
  let months = [];
  let count = 1;

  const firstDay = getFirstDay(year, month);
  const lastDate = getLastDate(year, month);
  console.log(firstDay, lastDate);
  for (let i = firstDay; i > 0; i--) {
    week.push(getLastDate(year, month - 1) - i + 1);
  }
  for (let i = firstDay; i < 7; i++) {
    week.push(cnt);
    cnt++;
  }
  months.push(week);
  week = [];

  for (let j = 0; j < 5; j++) {
    for (let i = 0; i < 7; i++) {
      if (cnt > lastDate) {
        week.push(count);
        count++;
        continue;
      }
      week.push(cnt);
      cnt++;
    }
    if (count > 7) break;
    months.push(week);
    week = [];
  }

  return <div key={Date.now()}></div>;
};

function Home() {
  let nowYear = getTodayYear();
  let nowMonth = getTodayMonth();
  let temp = nowMonth;
  const drawPrevMonth = () => {
    if (nowMonth == 1) {
      nowYear--;
      nowMonth = 12;
    } else nowMonth--;

    console.log(nowYear, nowMonth);

    drawCalendar(nowYear, nowMonth);
  };

  return (
    <div key={Date.now()}>
      <HeaderColumn key={nowMonth}>
        {/* <div onClick={drawPrevMonth}>◀️</div>
        <Title>
          {Month_ENG[nowMonth - 1]} {nowYear}
        </Title>
        <button onClick={drawPrevMonth}>▶️</button> */}
      </HeaderColumn>
      <Calender year={nowYear} month={nowMonth}></Calender>
    </div>
  );
}

const HeaderColumn = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Title = styled.span``;
const Arrow = styled.button``;

const CalenderDiv = styled.div`
  background-color: green;
  height: 80vh;
  width: 80vw;
  margin-left: 20vh;
`;

const Week_Row = styled.div`
  background-color: blue;
  display: flex;
  height: 15%;
  width: 100%;
`;

const DateContainer = styled.div`
  height: 100%;
  width: 100%;
`;
const DateContainer_Date = styled.div`
  background-color: red;
`;
const DateContainer_Body = styled.div``;

export default Home;
