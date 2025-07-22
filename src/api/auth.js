// src/api/auth.js

// const BASE_URL = 'http://localhost:5001/api';
const BASE_URL = 'https://wallet-be-production-b87d.up.railway.app/api';

export async function loginUser({ email, password }) {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || 'Login failed');
  return data;
}

export async function signupUser({ fullName, email, password }) {
  const response = await fetch(`${BASE_URL}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ fullName, email, password })
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || 'Signup failed');
  return data;
}

export async function sendResetOTP({ email }) {
  const response = await fetch(`${BASE_URL}/auth/reset/send-otp`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email })
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || 'Failed to send OTP');
  return data;
}

export async function verifyResetOTP({ email, otp }) {
  const response = await fetch(`${BASE_URL}/auth/reset/verify-otp`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, otp })
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || 'OTP verification failed');
  return data;
}

export async function resetPassword({ email, newPassword }) {
  const response = await fetch(`${BASE_URL}/auth/reset/password`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, newPassword })
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || 'Password reset failed');
  return data;
}

export async function verifyLoginOTP({ email, otp }) {
  const response = await fetch(`${BASE_URL}/auth/login/verify-otp`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, otp })
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || 'OTP verification failed');
  return data;
}

export async function loginWithMnemonic(mnemonic) {
  try {
    const response = await fetch(`${BASE_URL}/auth/login-mnemonic`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ mnemonic }),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message || 'Failed to login with mnemonic');
    return data;
  } catch (error) {
    throw error;
  }
}

export async function verifyLoginMnemonicOTP({ mnemonic, otp }) {
  const response = await fetch(`${BASE_URL}/auth/login-mnemonic/verify-otp`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ mnemonic, otp })
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || 'OTP verification failed');
  return data;
}
