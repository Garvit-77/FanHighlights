import React, { useState } from "react";
import Navbar from "./components/navbar";
import TeamSelector from "./components/TeamSelector";
import PlayerSelector from "./components/PlayerSelector";
import PreferencesButton from "./components/PreferencesButton";

const App = () => {
  const [selectedTeamId, setSelectedTeamId] = useState(null);
  const [selectedTeams, setSelectedTeams] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const handleTeamSelect = (teamId) => {
    setSelectedTeamId(teamId);
    if (!selectedTeams.includes(teamId)) {
      setSelectedTeams((prev) => [...prev, teamId]);
    }
  };

  const handlePlayerSelect = (players) => {
    setSelectedPlayers(players);
  };

  return (
    <div>
      <Navbar />
      <TeamSelector onSelectTeam={handleTeamSelect} />
      {selectedTeamId && (
        <PlayerSelector
          teamId={selectedTeamId}
          onSelectPlayers={handlePlayerSelect}
        />
      )}
      <PreferencesButton
        selectedTeams={selectedTeams}
        selectedPlayers={selectedPlayers}
      />
    </div>
  );
};

export default App;
