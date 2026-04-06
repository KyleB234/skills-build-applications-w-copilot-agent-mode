import React, { useEffect, useState } from 'react';

const Workouts = () => {
  const codespace = process.env.REACT_APP_CODESPACE_NAME;
  const endpoint = codespace
    ? `https://${codespace}-8000.app.github.dev/api/workouts/`
    : `${window.location.protocol}//${window.location.hostname}:8000/api/workouts/`;
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        console.log('Workouts endpoint:', endpoint);
        console.log('Fetched workouts:', data);
        setWorkouts(data.results || data);
      });
  }, [endpoint]);

  return (
    <div>
      <h2>Workouts</h2>
      <ul>
        {workouts.map((w, i) => (
          <li key={i}>{w.name} (Suggested for: {w.suggested_for && w.suggested_for.join(', ')})</li>
        ))}
      </ul>
    </div>
  );
};

export default Workouts;
