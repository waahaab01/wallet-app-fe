import { getUserWallets, getWalletBalance } from '../api/wallet';
import btcIcon from '../assets/wallet/bitcoin.png';
import ethIcon from '../assets/wallet/bitcoin1.png';
import usdtIcon from '../assets/wallet/usdt1.png';
import othersIcon from '../assets/wallet/others.png';

// Assign a color and icon for each wallet type
const WALLET_COLORS = {
  BTC: '#f7931a',
  ETH: '#26a17b',
  USDT: '#26a17b',
  OTHERS: '#a6a6a6',
};

const WALLET_ICONS = {
  BTC: btcIcon,
  ETH: ethIcon,
  USDT: usdtIcon,
  OTHERS: othersIcon,
};

// Fetch all wallets and their balances, return { wallets, total }
export async function fetchWalletsAndBalances(token) {
  const walletsRes = await getUserWallets(token);
  const wallets = walletsRes.wallets || [];
  // Fetch balances in parallel
  const balances = await Promise.all(
    wallets.map(async (w) => {
      try {
        const balRes = await getWalletBalance({ walletId: w._id, token });
        return {
          ...w,
          balance: parseFloat(balRes.balance?.eth || 0),
        };
      } catch {
        return { ...w, balance: 0 };
      }
    })
  );
  // Calculate total
  const total = balances.reduce((sum, w) => sum + (w.balance || 0), 0);
  return { wallets: balances, total };
}

// For bar rendering: get color/icon for wallet type
export function getWalletBarMeta(type) {
  const upper = (type || 'OTHERS').toUpperCase();
  return {
    color: WALLET_COLORS[upper] || WALLET_COLORS.OTHERS,
    icon: WALLET_ICONS[upper] || WALLET_ICONS.OTHERS,
  };
}