import axios from 'axios';

// GitHub API call function
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data; // Return user data
  } catch (error) {
    throw new Error('Error fetching user data'); // Handle any API errors
  }
};
