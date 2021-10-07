import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Calendar({ year, month, nowYear, nowMonth, nowDate }) {
  const planObj = JSON.parse(localStorage.getItem("plans"));
  let dateList = [];
  let sample = [];

  for (let i in planObj) {
    dateList.push(planObj[i].date[0] + planObj[i].date[1] + planObj[i].date[2]);
  }

  const makeList = (year, month) => {
    let week = [];
    let cnt = 1;
    let weeks = [];
    let count = 1;

    const firstDay = new Date(year, month - 1, 1).getDay();
    const lastDate = new Date(year, month, 0).getDate();

    for (let i = firstDay; i > 0; i--) {
      week.push(new Date(year, month - 1, 0).getDate() - i + 1 + "a");
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
          week.push(count + "a");
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

  const drawCalender = (year, month, nowYear, nowMonth, nowDate) => {
    const monthData = makeList(year, month);

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
              {week.map((item, index) => {
                return (
                  <CalendarItem>
                    <CalendarItemDate
                      style={
                        item.toString().includes("a")
                          ? { color: "lightgray" }
                          : item == nowDate
                          ? {}
                          : index == 0
                          ? { color: "red" }
                          : index == 6
                          ? { color: "blue" }
                          : { color: "black" }
                      }
                    >
                      <TodayBox
                        style={
                          item == nowDate &&
                          year == nowYear &&
                          month == nowMonth
                            ? { backgroundColor: "#4b86d8", color: "white" }
                            : {}
                        }
                      >
                        {item.toString().includes("a")
                          ? item.replace("a", "")
                          : item}
                      </TodayBox>
                    </CalendarItemDate>
                    <CalendarItemBody>
                      {dateList.indexOf(
                        year.toString() + month.toString() + item.toString()
                      ) != -1 ? (
                        dateList
                          .map((element, index) => {
                            let tmp = [];
                            return element ==
                              year.toString() +
                                month.toString() +
                                item.toString()
                              ? index
                              : "x";
                          })
                          .filter((el) => el != "x")
                          .sort((a, b) => planObj[a].minute - planObj[b].minute)
                          .sort((a, b) => planObj[a].hour - planObj[b].hour)
                          .map((el, id) => {
                            return (
                              <Link
                                to={`/detail/${year}b${month}b${item}b${el}`}
                              >
                                <Schedule>
                                  <ScheduleHour>
                                    {planObj[el].hour.length < 2
                                      ? "0" + planObj[el].hour
                                      : planObj[el].hour}
                                  </ScheduleHour>
                                  <ScheduleDiv>:</ScheduleDiv>
                                  <ScheduleMin>
                                    {planObj[el].minute.length < 2
                                      ? "0" + planObj[el].minute
                                      : planObj[el].minute}
                                  </ScheduleMin>
                                  <SchedulePlan>
                                    {planObj[el].plan}
                                  </SchedulePlan>
                                </Schedule>
                              </Link>
                            );
                          })
                      ) : (
                        <Schedule></Schedule>
                      )}
                      <Link to={`/add/${year}b${month}b${item}`}>
                        <CalendarItemBlank></CalendarItemBlank>
                      </Link>
                    </CalendarItemBody>
                  </CalendarItem>
                );
              })}
            </CalendarRow>
          );
        })}
      </CalendarContainer>
    );
  };

  return (
    <CalendarBox>
      {drawCalender(year, month, nowYear, nowMonth, nowDate)}
    </CalendarBox>
  );
}

export default Calendar;

const Weeks = styled.div`
  display: flex;
  width: 100%;
`;

const WeekItem = styled.div`
  width: 100%;
  text-align: center;
  border-right: 1px solid lightgray;
  color: grey;
`;

const CalendarBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: 90vh;
`;

const CalendarContainer = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid lightgray;
  border-bottom: 0;
`;

const CalendarRow = styled.div`
  display: flex;
  width: 100%;
  height: 15%;
`;

const CalendarItem = styled.div`
  width: 100%;
  border-bottom: 1px solid lightgray;
  border-right: 1px solid lightgray;
`;

const CalendarItemDate = styled.div`
  text-align: center;
  margin-top: 3px;
  display: flex;
  justify-content: center;
`;

const CalendarItemBody = styled.div`
  width: 100%;
  height: 85%;
`;

const CalendarItemBlank = styled.div`
  width: 100%;
  height: 80%;
`;

const TodayBox = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  text-align: center;
`;

const Schedule = styled.div`
  background-color: green;
  border-radius: 5px;
  display: flex;
  color: white;
  margin: 5px 5px;
  font-size: 13px;
`;

const ScheduleHour = styled.span`
  margin-left: 10px;
`;
const ScheduleDiv = styled.span`
  margin-left: 3px;
  margin-right: 3px;
`;
const ScheduleMin = styled.span`
  margin-right: 5px;
`;
const SchedulePlan = styled.span``;
