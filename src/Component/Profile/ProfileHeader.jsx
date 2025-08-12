import React from "react";
import { FiEye, FiEyeOff, FiCopy } from "react-icons/fi";

const BASE_URL = "http://31.97.228.198"; // 🔁 Replace with your actual backend URL

const ProfileHeader = ({
  userData,             // 👈 user data passed from parent
  walletData,
  showDetails,
  setShowDetails,
  copyToClipboard,
}) => {
  const profileImage = userData?.image
    ? typeof userData.image === "string"
      ? `${BASE_URL}/${userData.image.replace(/\\/g, "/")}`
      : null
    : null;

  return (
    <section className="profile-header">
      <img
        src={profileImage || "/fallback-avatar.png"} // 🔁 add fallback if needed
        alt="avatar"
        className="profile-avatar"
      />

      <div className="profile-header-info">
        <h2 className="profile-username">{userData?.fullName || "User"}</h2>

        <div className="profile-userid">
          Wallet Address:&nbsp;
          {showDetails ? walletData.walletAddress : "************"}
          <span onClick={() => setShowDetails(!showDetails)} className="ml-2 cursor-pointer">
            {showDetails ? <FiEyeOff /> : <FiEye />}
          </span>
          {showDetails && (
            <span onClick={() => copyToClipboard(walletData.walletAddress)} className="ml-2 cursor-pointer">
              <FiCopy />
            </span>
          )}
        </div>

        <div className="profile-phrasekey">
          Phrase Key:&nbsp;
          {showDetails ? walletData.mnemonic : "************"}
          <span onClick={() => setShowDetails(!showDetails)} className="ml-2 cursor-pointer">
            {showDetails ? <FiEyeOff /> : <FiEye />}
          </span>
          {showDetails && (
            <span onClick={() => copyToClipboard(walletData.mnemonic)} className="ml-2 cursor-pointer">
              <FiCopy />
            </span>
          )}
        </div>
      </div>

      <button className="profile-share-btn">🔗 SHARE</button>
    </section>
  );
};

export default ProfileHeader;
