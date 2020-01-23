import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { GlobalStats } from "../components/globalStats";

export const Home = () => {
  const [stats, setStats] = useState(null);

  const getStats = async () => {
    try {
      const res = await axios.get(
        "https://state-trak-bot.herokuapp.com/global"
      );
      console.log(res.data);
      setStats(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setTimeout(getStats, 10000);
    }
  };

  useEffect(() => {
    getStats();
  }, []);
  return (
    <Wrapper>
      <h1>StateTrak™</h1>
      <Row>
        <GlobalStats stats={stats} />
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
