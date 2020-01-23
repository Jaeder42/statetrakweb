import React from "react";
import { formatNumbers } from "../utils/formatNumbers";
import styled from "styled-components";

export const GlobalStats = ({ stats }) => {
  if (stats) {
    return (
      <Container>
        <code> {formatNumbers(stats.players_online)} players online.</code>
        <code> {formatNumbers(stats.ongoing_matches)} games being played.</code>
      </Container>
    );
  } else {
    return (
      <Container>
        {" "}
        <code> Loading...</code>
      </Container>
    );
  }
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  background-color: #343434;
  padding: 20px;
  border-radius: 10px;
  min-height: 50px;
  min-width: 270px;
`;
