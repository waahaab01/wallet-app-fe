const BASE_URL = 'http://localhost:5001/api';
// const BASE_URL = 'https://wallet-be-production-b87d.up.railway.app/api';

// Get all users (admin only)
export const getAllUsers = async (token) => {
  try {
    const res = await fetch(`${BASE_URL}/users`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) throw new Error((await res.json()).message || 'Failed to fetch users');
    const data = await res.json();
    return data.users;
  } catch (err) {
    throw err.message || "Failed to fetch users";
  }
};

// Get single user by ID (admin only)
export const getSingleUser = async (id, token) => {
  try {
    const res = await fetch(`${BASE_URL}/users/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) throw new Error((await res.json()).message || 'Failed to fetch user details');
    const data = await res.json();
    return data.user;
  } catch (err) {
    throw err.message || "Failed to fetch user details";
  }
};
