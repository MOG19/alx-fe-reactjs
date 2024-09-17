import React, { useState } from 'react';
import axios from 'axios';

function Home() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');

  // Function to fetch GitHub user data
  const fetchGitHubUser = async () => {
    setError('');
    setUserData(null);

    if (!username) {
      setError('Please enter a username');
      return;
    }

    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUserData(response.data);
    } catch (err) {
      setError('User not found or an error occurred');
    }
  };

  return (
    <div className="home">
      <h1>GitHub User Search</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={fetchGitHubUser}>Search</button>
      </div>

      {error && <p className="error">{error}</p>}

      {userData && (
        <div className="user-profile">
          <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} />
          <h2>{userData.login}</h2>
          <p>Followers: {userData.followers}</p>
          <p>Following: {userData.following}</p>
          <a href={userData.html_url} target="_blank" rel="noreferrer">
            Visit Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default Home;
