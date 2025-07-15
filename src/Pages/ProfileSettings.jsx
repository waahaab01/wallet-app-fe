import React from "react";
import SettingsSidebar from "../Component/SettingsSidebar";
import avatarImg from "../assets/Portrait.png";
import profilebg from "../assets/Image wrap.png"

const ProfileSettings = () => {
  return (
    <div className="settings-page-wrapper">
      <SettingsSidebar />
      <main className="settings-main-content">
        {/* Profile Header */}
        <img src={profilebg} style={{ marginBottom: "15%",width:"100%" }} />
        <section className="profile-header">
          <img src={avatarImg} alt="avatar" className="profile-avatar" />
          <div className="profile-header-info">
            <h2 className="profile-username">MRFUNKI</h2>
            <div className="profile-userid">userid#294298a12</div>
            <div className="profile-phrasekey">phrasekey: HERE PHRASE KEY WILL DISPLAY <span role="img" aria-label="hide">🙈</span></div>
          </div>
          <button className="profile-share-btn">🔗 SHARE</button>
        </section>

        {/* Profile Form */}
        <form className="profile-form">
          <h3>Profile</h3>
          <div className="form-group">
            <label>Username*</label>
            <input type="text" placeholder="Enter your username" />
          </div>
          <div className="form-group">
            <label>Bio</label>
            <textarea placeholder="Start here" maxLength={275}></textarea>
            <div className="char-count">275 characters</div>
          </div>
          <div className="form-group">
            <label>Country</label>
            <select>
              <option>Australia</option>
              <option>USA</option>
              <option>UK</option>
            </select>
          </div>
          <div className="form-group">
            <label>Timezone</label>
            <select>
              <option>PST (UTC-08:00)</option>
              <option>EST (UTC-05:00)</option>
              <option>GMT (UTC+00:00)</option>
            </select>
          </div>
          <div className="form-actions">
            <button type="button" className="cancel-btn">CANCEL</button>
            <button type="submit" className="save-btn">SAVE</button>
          </div>
        </form>

        {/* Personal Info Form */}
        <form className="personal-info-form">
          <h3>Personal Info</h3>
          <div className="form-row">
            <div className="form-group">
              <label>First Name*</label>
              <input type="text" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label>Last Name*</label>
              <input type="text" placeholder="Enter your email" />
            </div>
          </div>
          <div className="form-group">
            <label>Email*</label>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label>Phone Number*</label>
            <div className="phone-input-row">
              <select className="country-code-select">
                <option>US +1</option>
                <option>AU +61</option>
              </select>
              <input type="text" placeholder="Phone number" />
            </div>
          </div>
          <div className="form-group">
            <label>Currency*</label>
            <select>
              <option>Select Your Currency</option>
              <option>USD</option>
              <option>EUR</option>
            </select>
          </div>
          <div className="form-group avatar-upload-group">
            <img src={avatarImg} alt="avatar" className="profile-avatar" />
            <div className="avatar-upload-box">
              <div className="upload-icon">⬆️</div>
              <div className="upload-text">
                Click to upload <span>or drag and drop</span><br />
                <span className="upload-hint">PNG or JPG (max. 800x400px)</span>
              </div>
            </div>
          </div>
          <div className="form-actions">
            <button type="button" className="cancel-btn">CANCEL</button>
            <button type="submit" className="save-btn">SAVE</button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default ProfileSettings; 