import React, { useEffect, useState } from 'react';

const Leaderboard = () => {
  const codespace = process.env.REACT_APP_CODESPACE_NAME;
  const endpoint = codespace
    ? `https://${codespace}-8000.app.github.dev/api/leaderboard/`
    : `${window.location.protocol}//${window.location.hostname}:8000/api/leaderboard/`;
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        console.log('Leaderboard endpoint:', endpoint);
        console.log('Fetched leaderboard:', data);
        setLeaderboard(data.results || data);
      });
  }, [endpoint]);

  return (
    <div>
      <h2>Leaderboard</h2>
      <ul>
        {leaderboard.map((l, i) => (
          <li key={i}>{l.team}: {l.points} pts</li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
