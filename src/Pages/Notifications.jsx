import React from "react";
import SettingsSidebar from "../Component/SettingsSidebar";
import avatarImg from "../assets/Portrait.png";
import profilebg from "../assets/Image wrap.png";

const notifications = [
  {
    title: "Price Alerts",
    desc: "Lorem ipsum dolor sit amet Et minima iusto qui assumenda.",
    enabled: false,
  },
  {
    title: "Referral Commission Alerts",
    desc: "Lorem ipsum dolor sit amet Et minima iusto qui assumenda.",
    enabled: true,
  },
  {
    title: "Forecast Alerts",
    desc: "Lorem ipsum dolor sit amet Et minima iusto qui assumenda.",
    enabled: false,
  },
  {
    title: "Device Notification Alert",
    desc: "Lorem ipsum dolor sit amet Et minima iusto qui assumenda.",
    enabled: false,
  },
  {
    title: "Email Alert",
    desc: "Lorem ipsum dolor sit amet Et minima iusto qui assumenda.",
    enabled: false,
  },
  {
    title: "SMS Alert",
    desc: "Lorem ipsum dolor sit amet Et minima iusto qui assumenda.",
    enabled: false,
  },
];

const Notifications = () => {
  return (
    <div className="settings-page-wrapper">
      {/* <SettingsSidebar /> */}
      <main className="settings-main-content">
        <img src={profilebg} style={{ marginBottom: "15%",width:"100%" }} />

        {/* Profile Header */}
        <section className="profile-header">
          <img src={avatarImg} alt="avatar" className="profile-avatar" />
          <div className="profile-header-info">
            <h2 className="profile-username">MRFUNKI</h2>
            <div className="profile-userid">userid#294298a12</div>
            <div className="profile-phrasekey">
              phrasekey: *********************{" "}
              <span role="img" aria-label="hide">
                🙈
              </span>
            </div>
          </div>
          <button className="profile-share-btn">🔗 SHARE</button>
        </section>

        {/* Notifications Section */}
        <section className="notifications-section">
          <div className="noti-div">
            <h4 className="section-title">Link Wallet</h4>
            <p className="section-desc">
              Scan the barcode or use the hyperlink to link a wallet.
            </p>
          </div>
          <div className="notifications-box">
            {notifications.map((n, i) => (
              <div className="notification-card" key={i}>
                <div className="notification-info">
                  <div className="notification-title">{n.title}</div>
                  <div className="notification-desc">{n.desc}</div>
                </div>
                <button
                  className={
                    n.enabled
                      ? "notification-enable-btn"
                      : "notification-disable-btn"
                  }
                >
                  {n.enabled ? "ENABLE" : "DISABLE"}
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Notifications;
