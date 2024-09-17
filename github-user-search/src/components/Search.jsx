import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService'; // Import the API call

const Search = () => {
  const [username, setUsername] = useState(''); // State to track input
  const [userData, setUserData] = useState(null); // State to store user data
  const [loading, setLoading] = useState(false); // State to track loading
  const [error, setError] = useState(''); // State to track errors

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reset error before new search
    setUserData(null); // Reset previous user data
    setLoading(true); // Start loading

    try {
      const data = await fetchUserData(username); // Call the API function
      setUserData(data); // Store user data
      setLoading(false); // Stop loading
    } catch (err) {
      setLoading(false);
      setError('Looks like we cant find the user'); // Set error message
    }
  };

  return (
    <div className="search">
      <h1>Search GitHub Users</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)} // Update username state
        />
        <button type="submit">Search</button>
      </form>

      {/* Conditional Rendering */}
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      {userData && (
        <div className="user-profile">
          <img src={userData.avatar_url} alt={userData.login} />
          <h2>{userData.name || userData.login}</h2>
          <p>Followers: {userData.followers}</p>
          <p>Following: {userData.following}</p>
          <a href={userData.html_url} target="_blank" rel="noreferrer">
            Visit Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
