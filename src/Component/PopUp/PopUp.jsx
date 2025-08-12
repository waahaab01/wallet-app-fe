import React from "react";
import "./PopUp.css";
import successImg from "../../assets/alien-head.png";
import errorImg from "../../assets/alien-head_error.png";

const PopupNotification = ({
  type = "success",
  title = "Wallet Linked Successfully!",
  message = "Your wallet is now connected. You can view balances, send or top-up crypto right from your vault.",
  buttonText = "CTA BUTTON",
  onClose,
  onButtonClick
}) => {
  const imageSrc = type === "success" ? successImg : errorImg;

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <button className="popup-close" onClick={onClose}>
          ✖
        </button>
        <img src={imageSrc} alt={type} className="popup-icon" />
        <h2 className="popup-title">{title}</h2>
        <p className="popup-message">{message}</p>
        <button className="popup-button" onClick={onButtonClick}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default PopupNotification;
