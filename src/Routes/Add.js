import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Schedule from "../Components/Schedule";

function Add(props) {
  const {
    location: { pathname },
  } = props;
  const Date = pathname.substring(5, pathname.length).split("b");

  console.log(Date);

  let plans = [];

  const addPlan = () => {
    const plan = document.querySelector(".planBody").value;
    const time = document.querySelector(".plantime").value;

    return <Schedule date={Date} plans={plans}></Schedule>;
  };

  return (
    <Container>
      <Title>새로운 일정</Title>
      <Body>
        <BodyPlan className="planBody" placeholder="일정 추가"></BodyPlan>
        <BodyTime className="plantime" placeholder="시간 추가"></BodyTime>
      </Body>
      <Confirm>
        <button onClick={addPlan}>저장</button>
        <Link to={"/"}>뒤로</Link>
      </Confirm>
    </Container>
  );
}

export default Add;

const Container = styled.div``;

const Title = styled.div``;

const Body = styled.div``;
const BodyPlan = styled.input``;
const BodyTime = styled.input``;

const Confirm = styled.div``;
