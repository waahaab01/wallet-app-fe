const BASE_URL = 'http://localhost:5001/api';

export async function sendEthFromMainWallet({ toAddress, amountEth, token = 'ETH' }) {
  const response = await fetch(`${BASE_URL}/wallets/send`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ toAddress, amountEth, token }),
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || 'Failed to send transaction');
  return data;
}
