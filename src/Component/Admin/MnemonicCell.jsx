import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const MnemonicCell = ({ mnemonic }) => {
  const [show, setShow] = useState(false);

  // Hide mnemonic with dots, but keep spaces for word count
  const hidden = mnemonic ? mnemonic.replace(/\S/g, "•") : "";

  return (
    <div className="mnemonic-cell">
      <span className="mnemonic-words">{show ? mnemonic : hidden}</span>
      <button
        className="mnemonic-toggle"
        onClick={e => { e.stopPropagation(); setShow(s => !s); }}
        aria-label={show ? "Hide mnemonic" : "Show mnemonic"}
        tabIndex={0}
      >
        {show ? <FaEyeSlash /> : <FaEye />}
      </button>
    </div>
  );
};

export default MnemonicCell; 