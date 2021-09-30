import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div``;
const HeaderColumn = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Title = styled.span``;
const Arrow = styled.div``;
const Body = styled.div``;
const CalendarDate = styled.div``;
const CalendarDay = styled.div`
  display: flex;
  justify-content: space-around;
`;
const DayColumn = styled.div``;
const WeekColumn = styled.div`
  display: flex;
  justify-content: space-between;
`;
const DateBox = styled.div`
  background-color: tomato;
  width: 100vw;
  height: 100vh;
`;
const DateBoxDate = styled.div`
  background-color: green;
`;
const DateBoxBody = styled.div`
  background-color: blue;
  width: 100%;
  height: 100%;
`;
const DateColumn = styled.div`
  display: flex;
  justify-content: space-between;
`;

function HomePresenter({
  year,
  month,
  date,
  lastDate,
  firstDay,
  getLastDate,
  getFirstDay,
}) {
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

  let week = [];
  let months = [];
  let cnt = 1;
  let count = 1;
  for (let i = firstDay; i > 0; i--) {
    week.push(getLastDate(year, month - 1) - i + 1);
  }

  for (let i = firstDay; i < 7; i++) {
    week.push(cnt);
    cnt++;
  }
  months.push(week);
  week = [];

  for (let j = 0; j < 4; j++) {
    for (let i = 0; i < 7; i++) {
      if (cnt > lastDate) {
        week.push(count);
        count++;
        continue;
      }
      week.push(cnt);
      cnt++;
    }
    months.push(week);
    week = [];
  }

  return (
    <Container>
      <HeaderColumn>
        <Arrow>◀️</Arrow>
        <Title>
          {Month_ENG[month - 1]} {year}
        </Title>
        <Arrow>▶️</Arrow>
      </HeaderColumn>

      <Body>
        <CalendarDay>
          <DayColumn>Sun</DayColumn>
          <DayColumn>Mon</DayColumn>
          <DayColumn>Tue</DayColumn>
          <DayColumn>Wed</DayColumn>
          <DayColumn>Thu</DayColumn>
          <DayColumn>Fri</DayColumn>
          <DayColumn>Sat</DayColumn>
        </CalendarDay>
        <CalendarDate>
          <ul>
            <WeekColumn>
              {months[0].map((item) => {
                return (
                  <DateBox>
                    <DateBoxDate>{item}</DateBoxDate>
                    <DateBoxBody></DateBoxBody>
                  </DateBox>
                );
              })}
            </WeekColumn>
            <DateColumn>
              {months[1].map((item) => {
                return (
                  <DateBox>
                    <DateBoxDate>{item}</DateBoxDate>
                    <DateBoxBody></DateBoxBody>
                  </DateBox>
                );
              })}
            </DateColumn>
            <DateColumn>
              {months[2].map((item) => {
                return (
                  <DateBox>
                    <DateBoxDate>{item}</DateBoxDate>
                    <DateBoxBody></DateBoxBody>
                  </DateBox>
                );
              })}
            </DateColumn>
            <DateColumn>
              {months[3].map((item) => {
                return (
                  <DateBox>
                    <DateBoxDate>{item}</DateBoxDate>
                    <DateBoxBody></DateBoxBody>
                  </DateBox>
                );
              })}
            </DateColumn>
            <DateColumn>
              {months[4].map((item) => {
                return (
                  <DateBox>
                    <DateBoxDate>{item}</DateBoxDate>
                    <DateBoxBody></DateBoxBody>
                  </DateBox>
                );
              })}
            </DateColumn>
          </ul>
        </CalendarDate>
      </Body>
    </Container>
  );
}

export default HomePresenter;
