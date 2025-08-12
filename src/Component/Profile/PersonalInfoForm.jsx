import React from "react";

const PersonalInfoForm = ({
  formData,
  handleChange,
  handlePersonalInfoSubmit,
  handleFileChange,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  disableField,
  isSubmitting,
  setShowCancelModal,
}) => {
  const handleFirstNameChange = (e) => {
    console.log("First Name Changed:", e.target.value);
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    console.log("Last Name Changed:", e.target.value);
    setLastName(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted with Data:", {
      firstName,
      lastName,
      ...formData,
    });
    handlePersonalInfoSubmit(e);
  };

  const onPhoneNumberChange = (e) => {
    console.log("Phone Number Changed:", e.target.value);
    handleChange(e);
  };

  const onFileChange = (e) => {
    console.log("File Selected:", e.target.files[0]);
    handleFileChange(e);
  };

  const onCancelClick = () => {
    console.log("Cancel Clicked");
    setShowCancelModal(true);
  };
const BASE_URL = "http://31.97.228.198"; // 🌐 Change this to your backend base URL

  return (
    <form className="personal-info-form" onSubmit={onFormSubmit}>
      <h3>Personal Info</h3>

      <div className="form-row">
        <div className="form-group">
          <label>First Name*</label>
          <input
            type="text"
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </div>
        <div className="form-group">
          <label>Last Name*</label>
          <input type="text" value={lastName} onChange={handleLastNameChange} />
        </div>
      </div>

      <div className="form-group">
        <label>Email*</label>
        <input
          type="email"
          value={formData.email}
          disabled
          onClick={() => {
            console.log("Email Clicked");
            disableField();
          }}
        />
      </div>

      <div className="form-group">
        <label>Phone Number*</label>
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={onPhoneNumberChange}
          placeholder="Enter your phone number"
        />
      </div>

      <div className="form-group avatar-upload-group">
       <img
  src={
    formData.image
      ? typeof formData.image === "string"
        ? `${BASE_URL}/${formData.image.replace(/\\/g, "/")}`
        : URL.createObjectURL(formData.image)
      : null
  }
  alt="avatar"
  className="profile-avatar"
/>
        <div className="avatar-upload-box">
          <input type="file" accept="image/*" onChange={onFileChange} />
        </div>
      </div>

      <div className="form-actions">
        <button type="button" className="cancel-btn" onClick={onCancelClick}>
          CANCEL
        </button>
        <button type="submit" className="save-btn" disabled={isSubmitting}>
          {isSubmitting ? "Saving..." : "SAVE"}
        </button>
      </div>
    </form>
  );
};

export default PersonalInfoForm;
