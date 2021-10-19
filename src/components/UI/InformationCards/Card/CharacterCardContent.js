import React from "react";

export const CharacterCardContent = ({ characterInfo }) => {
  console.log("🚀 ~ file: CharacterCardContent.js ~ line 4 ~ CharacterCardContent ~ characterInfo", characterInfo)
  const { species, status, type, gender } = characterInfo;
  return (
    <div className="contentDetails">
      <h3>Character Information</h3>
      <ol>
        <li>Specie: {species}</li>
        <li>Status: {status}</li>
        <li>Type: {type || "unknown"}</li>
        <li>Gender: {gender}</li>
      </ol>
    </div>
  );
};
