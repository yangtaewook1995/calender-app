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

function HomePresenter({ year, month, date, lastDate, firstDay }) {
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
        <Title>
          {lastDate} {firstDay}
        </Title>
      </Body>
    </Container>
  );
}

export default HomePresenter;
