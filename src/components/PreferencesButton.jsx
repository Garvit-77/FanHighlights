import React from "react";
import "./PreferencesButton.css";

const PreferencesButton = ({ selectedTeams, selectedPlayers }) => {
  const handleSavePreferences = () => {
    const preferences = {
      teams: selectedTeams,
      players: selectedPlayers,
    };

    // Save preferences to localStorage
    localStorage.setItem("userPreferences", JSON.stringify(preferences));

    // Optional: Send to backend
    // fetch("https://your-backend-api/preferences", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(preferences),
    // })
    //   .then((response) => response.json())
    //   .then((data) => console.log("Preferences saved:", data))
    //   .catch((error) => console.error("Error saving preferences:", error));

    alert("Preferences saved successfully!");
  };

  return (
    <button className="preferences-button" onClick={handleSavePreferences}>
      Save Preferences
    </button>
  );
};

export default PreferencesButton;

