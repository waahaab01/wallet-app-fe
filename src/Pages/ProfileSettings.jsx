// ProfileSettings.js
import React, { useEffect, useState } from "react";
import SettingsSidebar from "../Component/SettingsSidebar";
import profilebg from "../assets/Image wrap.png";
import { getMyProfile, updateMyProfile } from "../api/user";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProfileHeader from "../Component/Profile/ProfileHeader";
import ProfileForm from "../Component/Profile/ProfileForm";
import PersonalInfoForm from "../Component/Profile/PersonalInfoForm";

const BASE_URL = "http://31.97.228.198"; // Change to your actual backend URL

const ProfileSettings = () => {
  const token = localStorage.getItem("authToken");
  const [user, setUser] = useState(null); // ✅ Add this
  const [walletData, setWalletData] = useState({ walletAddress: "", mnemonic: "" });
  const [showDetails, setShowDetails] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    currency: "",
    bio: "",
    email: "",
    image: null,
    username: "",
  });
  const [initialData, setInitialData] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUsernameEditable, setIsUsernameEditable] = useState(true);
  const [showUsernameConfirmModal, setShowUsernameConfirmModal] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    const storedWallet = JSON.parse(localStorage.getItem("userWallet"));
    if (storedWallet) {
      setWalletData({
        walletAddress: storedWallet.address || "",
        mnemonic: storedWallet.mnemonic || "",
      });
    }

    const fetchProfile = async () => {
      try {
        const user = await getMyProfile(token);
        const [fName, lName] = (user.fullName || "").split(" ");
        setFirstName(fName || "");
        setLastName(lName || "");
        setFormData({
          fullName: user.fullName || "",
          username: user.username || "",
          phoneNumber: user.phoneNumber || "",
          currency: user.currency || "",
          bio: user.bio || "",
          email: user.email || "",
          image: user.image || null,
        });
        setUser(user); // ✅ Save full user to pass to ProfileHeader
        if (user.username) setIsUsernameEditable(false);
        setInitialData(user);
      } catch {
        toast.error("Failed to fetch profile.");
      }
    };

    fetchProfile();
  }, [token]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUsernameChange = (e) => {
    const { value } = e.target;
    if (isUsernameEditable) {
      setFormData((prev) => ({ ...prev, username: value }));
      if (!showUsernameConfirmModal) setShowUsernameConfirmModal(true);
    }
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, image: e.target.files[0] }));
  };

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const data = new FormData();
      data.append("username", formData.username || "");
      data.append("bio", formData.bio || "");
      data.append("currency", formData.currency || "");
      await updateMyProfile(token, data);
      toast.success("Profile updated successfully");
    } catch {
      toast.error("Failed to update profile");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePersonalInfoSubmit = async (e) => {
    e.preventDefault();
    console.log("🔄 Form submit triggered");

    const fullName = `${firstName} ${lastName}`.trim();
    if (!fullName) {
      toast.error("First Name and Last Name are required");
      return;
    }

    const data = new FormData();
    data.append("fullName", fullName);
    data.append("phoneNumber", formData.phoneNumber || "");
    data.append("bio", formData.bio || "");
    data.append("currency", formData.currency || "");
    data.append("username", formData.username || "");
    data.append("email", formData.email || "");
    if (formData.image) {
      data.append("image", formData.image);
    }

    try {
      const response = await updateMyProfile(token, data);
      console.log("✅ Backend Response:", response);
      if (response && response.success) {
        toast.success("Profile updated successfully!");
        setUser(response.user); // ✅ update image and name immediately
      } else {
        toast.error("Failed to update profile.");
      }
    } catch (err) {
      toast.error("Something went wrong!");
      console.error("❌ Error occurred while updating profile:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancelReset = () => {
    const [fName, lName] = (initialData.fullName || "").split(" ");
    setFirstName(fName || "");
    setLastName(lName || "");
    setFormData(initialData);
    setShowCancelModal(false);
  };

  const handleUsernameConfirm = async () => {
    try {
      const updatedData = {
        username: formData.username,
      };
      await updateMyProfile(token, updatedData);
      toast.success("Username saved and locked");
      setIsUsernameEditable(false);
      setShowUsernameConfirmModal(false);
    } catch {
      toast.error("Failed to save username");
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!");
  };

  const disableField = (e) => {
    e.preventDefault();
    toast("This field is not editable", { icon: "⚠️" });
  };

  return (
    <>
      <div className="settings-page-wrapper">
        <main className="settings-main-content">
          <img src={profilebg} alt="cover" style={{ marginBottom: "15%", width: "100%" }} />

          <ProfileHeader
            userData={user}
            walletData={walletData}
            showDetails={showDetails}
            setShowDetails={setShowDetails}
            copyToClipboard={copyToClipboard}
          />

          <ProfileForm
            formData={formData}
            handleChange={handleChange}
            handleProfileSubmit={handleProfileSubmit}
            handleUsernameChange={handleUsernameChange}
            showUsernameConfirmModal={showUsernameConfirmModal}
            setShowCancelModal={setShowCancelModal}
            isSubmitting={isSubmitting}
            isUsernameEditable={isUsernameEditable}
            setShowUsernameConfirmModal={setShowUsernameConfirmModal}
          />

          <PersonalInfoForm
            formData={formData}
            handleChange={handleChange}
            handlePersonalInfoSubmit={handlePersonalInfoSubmit}
            handleFileChange={handleFileChange}
            firstName={firstName}
            setFirstName={setFirstName}
            lastName={lastName}
            setLastName={setLastName}
            disableField={disableField}
            isSubmitting={isSubmitting}
            setShowCancelModal={setShowCancelModal}
          />
        </main>
      </div>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar newestOnTop />
    </>
  );
};

export default ProfileSettings;
