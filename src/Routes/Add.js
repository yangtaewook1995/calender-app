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
        <BodyPlan className="planBody" placeholder="제목 추가"></BodyPlan>
        <BodyTime className="planHour" placeholder="시간 추가"></BodyTime>
        <BodyTime className="planMin" placeholder="시간 추가"></BodyTime>
      </Body>
      <Confirm>
        <ConfirmButton onClick={addPlan}>저장</ConfirmButton>
        <BackButton onClick={props.history.goBack}>뒤로</BackButton>
      </Confirm>
    </Container>
  );
}

export default Add;

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
  border: none;
  width: 40%;
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
