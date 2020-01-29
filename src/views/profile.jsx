import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";
export const Profile = () => {
  const [profile, setProfile] = useState(null);
  let { id } = useParams();

  const fetchProfile = async () => {
    const result = await axios.get(
      `https://state-trak-bot.herokuapp.com/profile/${id}`
    );
    setProfile(result.data);
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return <div>{profile && <p>{JSON.stringify(profile)}</p>}</div>;
};
