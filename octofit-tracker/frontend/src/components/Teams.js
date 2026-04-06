import React, { useEffect, useState } from 'react';

const Teams = () => {
  const codespace = process.env.REACT_APP_CODESPACE_NAME;
  const endpoint = codespace
    ? `https://${codespace}-8000.app.github.dev/api/teams/`
    : `${window.location.protocol}//${window.location.hostname}:8000/api/teams/`;
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        console.log('Teams endpoint:', endpoint);
        console.log('Fetched teams:', data);
        setTeams(data.results || data);
      });
  }, [endpoint]);

  return (
    <div>
      <h2>Teams</h2>
      <ul>
        {teams.map((t, i) => (
          <li key={i}>{t.name} ({t.members && t.members.join(', ')})</li>
        ))}
      </ul>
    </div>
  );
};

export default Teams;
