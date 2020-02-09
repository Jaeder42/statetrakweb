import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import axios from "axios";
export const Profile = () => {
  let { id } = useParams();
  const [profile, setProfile] = useState(null);

  const fetchProfile = async () => {
    const result = await axios.get(
      `https://state-trak-bot.herokuapp.com/profile/${id}`
    );
    setProfile(result.data);
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div>
      {profile && (
        <Wrapper>
          <Id>{profile.id}</Id>
          <Title>{profile.comp_rank}</Title>
          <Title>Commendations</Title>
          <Commendations>
            <Row>
              <Column>Friendly</Column>
              <Column>Teacher</Column>
              <Column>Leader</Column>
            </Row>
            <Row>
              <Column>{profile.friendly}</Column>
              <Column>{profile.teaching}</Column>
              <Column>{profile.leader}</Column>
            </Row>
          </Commendations>
          <p>{JSON.stringify(profile)}</p>
        </Wrapper>
      )}
    </div>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Id = styled.h1``;

const Title = styled.h2``;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
`;

const Commendations = styled.div`
  max-width: 500px;
  min-width: 200px;
`;
