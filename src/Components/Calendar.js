import React, { Component } from "react";

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

    console.log(firstDay, lastDate);
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
    const result = (
      <div>
        {monthData.map((week) => {
          return (
            <div>
              {week.map((item) => {
                return (
                  <div>
                    <div>{item}</div>
                    <div></div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    );

    return;
  };

  return <div>{makeList(year, month)}</div>;
}

export default Calendar;

{
  /* <CalenderDiv key={Date.now()}>
{weeks.map((week) => {
  return (
    <Week_Row key={week[0]}>
      {week.map((item) => {
        return (
          <DateContainer>
            <DateContainer_Date>{item}</DateContainer_Date>
            <DateContainer_Body></DateContainer_Body>
          </DateContainer>
        );
      })}
    </Week_Row>
  );
})}
</CalenderDiv> */
}
