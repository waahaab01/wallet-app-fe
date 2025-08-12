    import React from "react";

const ProfileForm = ({
  formData,
  handleChange,
  handleProfileSubmit,
  handleUsernameChange,
  showUsernameConfirmModal,
  setShowCancelModal,
  isSubmitting,
  isUsernameEditable,
  setShowUsernameConfirmModal,
}) => (
  <form className="profile-form" onSubmit={handleProfileSubmit}>
    <h3>Profile</h3>

    <div className="form-group">
      <label>Username*</label>
      <input
        name="username"
        value={formData.username}
        placeholder="Enter your username"
        type="text"
        disabled={!isUsernameEditable}
        onChange={handleUsernameChange}
        onClick={() => {
          if (!isUsernameEditable)
            toast("Username cannot be changed", { icon: "⚠️" });
        }}
      />
    </div>

    <div className="form-group">
      <label>Bio</label>
      <textarea
        name="bio"
        value={formData.bio}
        onChange={handleChange}
        placeholder="Start here"
        maxLength={275}
      />
      <div className="char-count">{275 - formData.bio.length} characters left</div>
    </div>

    <div className="form-group">
      <label>Currency</label>
      <select name="currency" value={formData.currency} onChange={handleChange}>
        <option value="">Select</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="PKR">PKR</option>
      </select>
    </div>

    <div className="form-actions">
      <button type="button" className="cancel-btn" onClick={() => setShowCancelModal(true)}>
        CANCEL
      </button>
      <button type="submit" className="save-btn" disabled={isSubmitting}>
        {isSubmitting ? "Saving..." : "SAVE"}
      </button>
    </div>
  </form>
);

export default ProfileForm;
