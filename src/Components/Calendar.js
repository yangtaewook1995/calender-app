import React, { Component } from "react";
import styled from "styled-components";

function Calendar({ year, month }) {
  const makeList = (year, month) => {
    let week = [];
    let cnt = 1;
    let weeks = [];
    let count = 1;

    // Day of (month, 1)
    const firstDay = new Date(year, month - 1, 1).getDay();
    // last date of month
    const lastDate = new Date(year, month, 0).getDate();

    for (let i = firstDay; i > 0; i--) {
      week.push(new Date(year, month - 1, 0).getDate() - i + 1);
    }
    for (let i = firstDay; i < 7; i++) {
      week.push(cnt);
      cnt++;
    }
    weeks.push(week);
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
      weeks.push(week);
      week = [];
    }

    return weeks;
  };

  const drawCalender = (year, month) => {
    const monthData = makeList(year, month);
    console.log(monthData);
    return (
      <CalendarContainer>
        <Weeks>
          <WeekItem>Sun</WeekItem>
          <WeekItem>Mon</WeekItem>
          <WeekItem>Tue</WeekItem>
          <WeekItem>Wed</WeekItem>
          <WeekItem>Thu</WeekItem>
          <WeekItem>Fri</WeekItem>
          <WeekItem>Sat</WeekItem>
        </Weeks>
        {monthData.map((week) => {
          return (
            <CalendarRow>
              {week.map((item) => {
                return (
                  <CalendarItem>
                    <CalendarItemDate>{item}</CalendarItemDate>
                    <CalendarItemBody></CalendarItemBody>
                  </CalendarItem>
                );
              })}
            </CalendarRow>
          );
        })}
      </CalendarContainer>
    );
  };

  return <CalendarBox>{drawCalender(year, month)}</CalendarBox>;
}

export default Calendar;

const Weeks = styled.div`
  display: flex;
`;

const WeekItem = styled.div`
  width: 70vw;
  witdh: 100%;
`;

const CalendarBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5%;
`;

const CalendarContainer = styled.div`
  width: 70vw;
  height: 70vh;
`;

const CalendarRow = styled.div`
  display: flex;
  width: 100%;
  height: 15%;
`;

const CalendarItem = styled.div`
  width: 100%;
`;

const CalendarItemDate = styled.div``;

const CalendarItemBody = styled.div``;
