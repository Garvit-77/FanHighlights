import React, { useState, useEffect } from "react";
import "./PlayerSelector.css";

const PlayerSelector = ({ teamId, onSelectPlayers }) => {
  const [players, setPlayers] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  useEffect(() => {
    if (teamId) {
      fetch(
        `https://statsapi.mlb.com/api/v1/teams/${teamId}/roster?season=2024`
      )
        .then((response) => response.json())
        .then((data) => setPlayers(data.roster || []))
        .catch((error) => console.error("Error fetching players:", error));
    }
  }, [teamId]);

  const togglePlayerSelection = (playerId) => {
    setSelectedPlayers((prev) =>
      prev.includes(playerId)
        ? prev.filter((id) => id !== playerId)
        : [...prev, playerId]
    );
  };

  const handleConfirmSelection = () => {
    onSelectPlayers(selectedPlayers);
    alert(`Selected players: ${selectedPlayers.join(", ")}`);
  };

  return (
    <div className="player-selector-container">
      <h2>Select Players</h2>
      <div className="player-cards">
        {players.map((player) => (
          <div
            key={player.person.id}
            className={`player-card ${
              selectedPlayers.includes(player.person.id) ? "selected" : ""
            }`}
            onClick={() => togglePlayerSelection(player.person.id)}
          >
            <label>{player.person.fullName}</label>
          </div>
        ))}
      </div>
      <button className="confirm-selection" onClick={handleConfirmSelection}>
        Confirm Selection
      </button>
    </div>
  );
};

export default PlayerSelector;
