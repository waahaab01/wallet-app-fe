const BASE_URL = 'http://localhost:5001/api';
//  const BASE_URL = 'https://wallet-app-backend-production-6c34.up.railway.app/api';

export async function sendEthFromMainWallet({ toAddress, amountEth, token }) {
  console.log('API CALL: sendEthFromMainWallet', { toAddress, amountEth, token });
  const response = await fetch(`${BASE_URL}/wallets/send`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    body: JSON.stringify({ toAddress, amountEth }),
  });
  console.log('API RESPONSE STATUS:', response.status);
  const data = await response.json();
  console.log('API RESPONSE DATA:', data);
  if (!response.ok) throw new Error(data.message || 'Failed to send');
  return data;
}
export async function linkWallet({ walletType, walletAddress, chain, token }) {
  const response = await fetch(`${BASE_URL}/wallets/link`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // If you use JWT auth, add the token:
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    body: JSON.stringify({ walletType, walletAddress, chain }),
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || 'Failed to link wallet');
  return data;
}

export async function getUserWallets(token) {
  const response = await fetch(`${BASE_URL}/wallets/my-wallets`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || 'Failed to fetch wallets');
  return data;
}

export async function getWalletBalance({ walletId, token }) {
  const response = await fetch(`${BASE_URL}/wallets/balance/${walletId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || 'Failed to fetch wallet balance');
  return data;
}

export async function getTransactionHistory(token) {
  const response = await fetch(`${BASE_URL}/wallets/transactions`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || 'Failed to fetch transaction history');
  return data;
}

export async function importWalletFromMnemonic({ mnemonic, token }) {
  const response = await fetch(`${BASE_URL}/wallets/import-mnemonic`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    body: JSON.stringify({ mnemonic }),
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || 'Failed to import wallet');
  return data;
}

export async function getReceivedTransactions(token) {
  const response = await fetch(`${BASE_URL}/wallets/received`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || 'Failed to fetch received transactions');
  return data;
}

export async function syncWalletByUserId({ userId, token }) {
  const response = await fetch(`${BASE_URL}/wallets/sync/${userId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || 'Failed to sync wallet');
  return data;
}