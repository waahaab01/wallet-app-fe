const BASE_URL = 'http://31.97.228.198/api';
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
export const getMyProfile = async (token) => {
  console.log("Sending token in getMyProfile:", token);
  try {
    const res = await fetch(`${BASE_URL}/users/me`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      const errorRes = await res.json();
      console.log("Error response:", errorRes);
      throw new Error(errorRes.message || 'Failed to fetch profile');
    }

    const data = await res.json();
    return data.user;
  } catch (err) {
    console.log("Fetch profile error:", err);
    throw err.message || 'Failed to fetch profile';
  }
};


export const updateMyProfile = async (token, formData) => {
  try {
    const res = await fetch(`${BASE_URL}/users/me`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        // ❌ Do NOT set Content-Type manually for FormData — let browser handle it!
      },
      body: formData,
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || 'Failed to update profile');
    }

    return data; // Contains { success: true, user: { ... } }
  } catch (err) {
    console.error("❌ updateMyProfile error:", err);
    throw err;
  }
};

