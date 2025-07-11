import React from "react";

// You can replace this with your own image path
import underConstructionImg from "../assets/nft.png";

const NftPage = () => {
  return (
    <div
      className="nft-under-construction-wrapper"
      style={{
        minHeight: "78vh",
        // background: "#C6E6FF",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "32px 12px",
      }}
    >
      <img
        src={underConstructionImg}
        alt="Under Construction"
        style={{
          maxWidth: "400px",
          width: "100%",
          height: "auto",
          marginBottom: "32px",
        }}
      />
      <h2
        style={{
          fontFamily: '"Luckiest Guy", "Arial Black", cursive',
          fontWeight: 700,
          fontSize: "2rem",
          letterSpacing: "2px",
          margin: 0,
          textAlign: "center",
        }}
      >
        UNDER CONSTRUCTION
      </h2>
      <p
        style={{
          fontSize: "1rem",
          color: "#222",
          maxWidth: "500px",
          textAlign: "center",
          marginTop: "16px",
          lineHeight: 1.6,
        }}
      >
        We're forging something awesome behind the scenes. This module is still in the works—stay tuned for updates and fresh features coming your way soon.
      </p>
    </div>
  );
};

export default NftPage;
