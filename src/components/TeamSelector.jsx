import React, { useEffect, useState } from "react";
import "./TeamSelector.css";

const TeamSelector = ({ onSelectTeam }) => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch("https://statsapi.mlb.com/api/v1/teams?sportId=1")
      .then((response) => response.json())
      .then((data) => setTeams(data.teams))
      .catch((error) => console.error("Error fetching teams:", error));
  }, []);

  return (
    <div className="team-selector">
      <h2>Select a Team</h2>
      <div className="team-cards">
        {teams.map((team) => (
          <div
            key={team.id}
            className="team-card"
            onClick={() => onSelectTeam(team.id)}
          >
            <h3>{team.name}</h3>
            <p>{team.division.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSelector;
