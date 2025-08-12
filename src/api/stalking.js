const BASE_URL = 'http://31.97.228.198/api'; // Update if needed

export async function stakeTokens({ amount, token }) {
  console.log('Staking request started:', { amount, token });
  try {
    const response = await fetch(`${BASE_URL}/staking/stake`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      body: JSON.stringify({ amount }),
    });
    console.log('Staking response status:', response.status);
    const data = await response.json();
    console.log('Staking response data:', data);
    if (!response.ok) throw new Error(data.message || 'Staking failed');
    return data;
  } catch (error) {
    console.error('Staking API error:', error);
    throw error;
  }
}

export async function createStakingPlan({ name, description, durationDays, rewardRate, token }) {
  console.log('Creating staking plan:', { name, description, durationDays, rewardRate, token });
  try {
    const response = await fetch(`${BASE_URL}/staking/plans`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      body: JSON.stringify({ name, description, durationDays, rewardRate }),
    });
    console.log('Create plan response status:', response.status);
    const data = await response.json();
    console.log('Create plan response data:', data);
    if (!response.ok) throw new Error(data.message || 'Failed to create staking plan');
    return data;
  } catch (error) {
    console.error('Create staking plan API error:', error);
    throw error;
  }
}
