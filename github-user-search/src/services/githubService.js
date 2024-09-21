import axios from 'axios';

// GitHub API call function for advanced search
export const fetchAdvancedUserData = async (username, location, minRepos, page = 1) => {
  try {
    let query = `q=${username ? `${username}` : ''}`;
    
    if (location) {
      query += `+location:${location}`;
    }

    if (minRepos) {
      query += `+repos:>=${minRepos}`;
    }

    const response = await axios.get(
      `https://api.github.com/search/users?q`
    );
    return response.data; // Return user data
  } catch (error) {
    throw new Error('Error fetching user data'); // Handle API errors
  }
};
