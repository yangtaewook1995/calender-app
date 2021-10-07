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
        <ConfirmButton onClick={modifyPlan}>변경</ConfirmButton>
        <ConfirmButton onClick={deletePlan}>제거</ConfirmButton>

        <ConfirmButton onClick={props.history.goBack}>뒤로</ConfirmButton>
      </Confirm>
    </Container>
  );
}

export default Schedule;

const Container = styled.div`
  margin: 40px;
  width: 50vw;
  height: 80vh;
  border: 1px solid lightgray;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #4b86d8;
  width: 100%;
  height: 20%;
  color: white;
  text-align: center;
  font-size: 25px;
`;

const Body = styled.div`
  width: 100%;
  height: 60%;
  margin-top: 50px;
  margin-left: 20px;
`;

const BodyPlan = styled.input`
  display: block;
  width: calc(100% - 40px);
  font-size: 25px;
  border: none;
  border-bottom: 2px solid lightgray;
  margin-top: 50px;
  margin: 20px 0px;
  :focus {
    outline-offset: 0px;
    outline: none;
  }
`;
const BodyTime = styled.input`
  width: calc(50% - 30px);
  font-size: 25px;
  border: none;
  border-bottom: 2px solid lightgray;
  margin: 20px 0px;
  margin-top: 50px;
  margin-right: 20px;
  :focus {
    outline-offset: 0px;
    outline: none;
  }
`;

const Confirm = styled.div`
  margin: 20px 20px;
`;

const ConfirmButton = styled.button`
  margin-right: 10px;
  border: none;
  width: 30%;
  background-color: #58c6b3;
  color: white;
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
  :hover {
    cursor: pointer;
  }
`;

const BackButton = styled.button`
  margin-left: 10px;
  width: 40%;
  border: none;
  background-color: #58c6b3;
  color: white;
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
  :hover {
    cursor: pointer;
  }
`;
