import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Add(props) {
  const {
    location: { pathname },
  } = props;
  const Date = pathname.substring(5, pathname.length).split("b");

  let plans =
    localStorage.getItem("plans") == null
      ? []
      : JSON.parse(localStorage.getItem("plans"));

  const [schedule, setSchedule] = useState(plans);

  const addPlan = () => {
    const plan = document.querySelector(".planBody").value;
    const hour = document.querySelector(".planHour").value;
    const minute = document.querySelector(".planMin").value;
    if (
      Number(hour) <= 24 &&
      Number(hour) >= 0 &&
      Number(minute) <= 60 &&
      Number(minute) >= 0
    ) {
      let max = -1;
      for (let i in plans) {
        if (plans[i].id > max) max = plans[i].id;
      }
      plans.push({
        plan: plan,
        date: Date,
        hour: hour,
        minute: minute,
        id: max + 1,
      });
      setSchedule(plans);

      window.localStorage.setItem("plans", JSON.stringify(plans));
      alert("Success Add Schedule");
      props.history.goBack();
    } else {
      alert("Invalid Time");
    }
  };

  return (
    <Container>
      <Title>새로운 일정</Title>
      <Body>
        <BodyPlan className="planBody" placeholder="일정 추가"></BodyPlan>
        <BodyTime className="planHour" placeholder="시"></BodyTime>
        <BodyTime className="planMin" placeholder="분"></BodyTime>
      </Body>
      <Confirm>
        <button onClick={addPlan}>저장</button>
        <button onClick={props.history.goBack}>뒤로</button>
      </Confirm>
    </Container>
  );
}

export default Add;

const Container = styled.div``;

const Title = styled.div``;

const Body = styled.div``;
const BodyPlan = styled.input`
  display: block;
`;
const BodyTime = styled.input``;

const Confirm = styled.div``;
