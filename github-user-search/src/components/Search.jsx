import React, { useState } from 'react';
import { fetchAdvancedUserData } from '../services/githubService'; // Import the updated API call

const Search = () => {
  const [username, setUsername] = useState(''); // Track GitHub username
  const [location, setLocation] = useState(''); // Track location
  const [minRepos, setMinRepos] = useState(''); // Track minimum repositories
  const [userData, setUserData] = useState([]); // Store search results
  const [loading, setLoading] = useState(false); // Track loading
  const [error, setError] = useState(''); // Track errors
  const [page, setPage] = useState(1); // Track pagination

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setUserData([]);
    setLoading(true);

    try {
      const data = await fetchAdvancedUserData(username, location, minRepos, page); // Call API with advanced search
      setUserData(data.items); // Store search results
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError('Error fetching users or no users match your criteria');
    }
  };

  // Handle "Load More" functionality
  const handleLoadMore = async () => {
    setPage((prevPage) => prevPage + 1);
    setLoading(true);

    try {
      const data = await fetchAdvancedUserData(username, location, minRepos, page + 1); // Fetch next page
      setUserData((prevData) => [...prevData, ...data.items]); // Append new results
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError('Error loading more users');
    }
  };

  return (
    <div className="search p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Advanced GitHub User Search</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Enter GitHub username"
            className="input input-bordered w-full p-2 border rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Location"
            className="input input-bordered w-full p-2 border rounded"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Minimum Repositories"
            className="input input-bordered w-full p-2 border rounded"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
          />
        </div>
        <button type="submit" className="btn bg-blue-500 text-white py-2 px-4 rounded">
          Search
        </button>
      </form>

      {loading && <p className="text-blue-500 mt-4">Loading...</p>}
      {error && <p className="text-red-500 mt-4">{error}</p>}

      {/* Display user data */}
      <div className="mt-6">
        {userData.length > 0 && (
          <ul>
            {userData.map((user) => (
              <li key={user.id} className="p-4 border-b">
                <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
                <h2 className="font-semibold">{user.login}</h2>
                <p>{user.location || 'Location not available'}</p>
                <p>Repositories: {user.public_repos || 'N/A'}</p>
                <a href={user.html_url} target="_blank" rel="noreferrer" className="text-blue-500">
                  Visit Profile
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Load More Button */}
      {userData.length > 0 && (
        <button
          onClick={handleLoadMore}
          className="btn bg-gray-500 text-white py-2 px-4 mt-4 rounded"
          disabled={loading}
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default Search;


"fetchUserData"