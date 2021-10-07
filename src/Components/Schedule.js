import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Schedule(props) {
  const {
    match: {
      params: { id },
    },
  } = props;
  const Date = id.split("b");

  const planObj = JSON.parse(localStorage.getItem("plans"));
  let sample = [];

  const planIdList = id.split("b");
  const planId = planIdList[planIdList.length - 1];
  const target = planObj[planId];

  let plans =
    localStorage.getItem("plans") == null
      ? []
      : JSON.parse(localStorage.getItem("plans"));

  const [schedule, setSchedule] = useState(plans);

  const modifyPlan = () => {
    const plan = document.querySelector(".planBody").value;
    const hour = document.querySelector(".planHour").value;
    const minute = document.querySelector(".planMin").value;
    if (
      Number(hour) <= 24 &&
      Number(hour) >= 0 &&
      Number(minute) <= 60 &&
      Number(minute) >= 0
    ) {
      const newPlans = plans.filter((el) => el.id != target.id);
      let max = -1;
      for (let i in plans) {
        if (plans[i].id > max) max = plans[i].id;
      }
      newPlans.push({
        plan: plan,
        date: Date,
        hour: hour,
        minute: minute,
        id: max + 1,
      });

      setSchedule(newPlans);

      window.localStorage.setItem("plans", JSON.stringify(newPlans));
      alert("Success Add Schedule");
      props.history.goBack();
    } else {
      alert("Invalid Time");
    }
  };

  const deletePlan = () => {
    const newPlans = plans.filter((el) => el.id != target.id);

    setSchedule(newPlans);

    window.localStorage.setItem("plans", JSON.stringify(newPlans));
    alert("Success Delete Schedule");
    props.history.push("/");
  };

  return (
    <Container>
      <Title>일정 변경 및 제거</Title>
      <Body>
        <BodyPlan defaultValue={target.plan} className="planBody"></BodyPlan>
        <BodyTime defaultValue={target.hour} className="planHour"></BodyTime>
        <BodyTime defaultValue={target.minute} className="planMin"></BodyTime>
      </Body>
      <Confirm>
        <button onClick={modifyPlan}>변경</button>
        <button onClick={deletePlan}>제거</button>

        <button onClick={props.history.goBack}>뒤로</button>
      </Confirm>
    </Container>
  );
}

export default Schedule;

const Container = styled.div``;

const Title = styled.div``;

const Body = styled.div``;
const BodyPlan = styled.input`
  display: block;
`;
const BodyTime = styled.input``;

const Confirm = styled.div``;
