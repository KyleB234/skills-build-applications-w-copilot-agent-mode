import React, { useEffect, useState } from 'react';

const Users = () => {
  const codespace = process.env.REACT_APP_CODESPACE_NAME;
  const endpoint = codespace
    ? `https://${codespace}-8000.app.github.dev/api/users/`
    : `${window.location.protocol}//${window.location.hostname}:8000/api/users/`;
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        console.log('Users endpoint:', endpoint);
        console.log('Fetched users:', data);
        setUsers(data.results || data);
      });
  }, [endpoint]);

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((u, i) => (
          <li key={i}>{u.name} ({u.email}) - Team: {u.team}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
