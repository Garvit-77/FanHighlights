import axios from "axios";

export const fetchTeam = async (teamId) => {
  const response = await axios.get(`https://statsapi.mlb.com/api/v1/teams/${teamId}`);
  return response.data.teams[0]; // Returns the first team from the response
};

export const fetchPlayer = async (playerId) => {
  const response = await axios.get(`https://statsapi.mlb.com/api/v1/people/${playerId}`);
  return response.data.people[0]; // Returns the first player from the response
};
