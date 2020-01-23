import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

import styled from "styled-components";

export const Match = () => {
  let { shareCode } = useParams();
  const [match, setMatch] = useState(null);

  const getMatch = async () => {
    try {
      const res = await axios.get(
        `https://state-trak-bot.herokuapp.com/match/${shareCode}`
      );
      setMatch(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getMatch();
  }, []);
  console.log(match);
  return (
    <div>
      <h1>Game</h1>
      {match && (
        <div>
          <Row>
            <Column>User</Column>
            <Column>Kills</Column>
            {/* <Column>Deaths</Column> */}
            <Column>Headshots</Column>
          </Row>
          <Row>
            <Column>
              {match.users.map(user => (
                <div>
                  <Link href={`https://steamcommunity.com/profiles/${user}`}>
                    {user}
                  </Link>
                </div>
              ))}
            </Column>
            <Column>
              {match.kills.map(kills => (
                <div>{kills}</div>
              ))}
            </Column>
            {/* <Column>
            {match.deaths.map(deaths => (
              <div>{deaths}</div>
            ))}
          </Column> */}
            <Column>
              {match.headshots.map(hs => (
                <div>{hs}</div>
              ))}
            </Column>
          </Row>
        </div>
      )}
    </div>
  );
};

const Link = styled.a`
  text-decoration: none;
  color: white;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
