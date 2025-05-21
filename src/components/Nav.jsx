import React from "react";
import { useNavigate } from "react-router-dom";

const Nav = ({ style = {} }) => {
  const navigate = useNavigate();

  const baseButton = {
    backgroundColor: "#548687",
    color: "#473335",
    fontSize: "10px",
    fontFamily: "'winco', sans-serif",
    fontWeight: 800,
    border: "none",
    padding: "2px 6px",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s, transform 0.2s",
    boxShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
    minWidth: "52px",
    height: "22px",
  };

  const containerStyle = {
    position: "absolute",
    top: "4px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    gap: "6px",
    zIndex: 10,
    ...style,
  };

  const handleNav = (route) => {
    navigate(`/${route}`);
  };

  return (
    <div style={containerStyle}>
      {["home", "den", "shop"].map((page) => (
        <button
          key={page}
          style={baseButton}
          onClick={() => handleNav(page)}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#B0413E")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#548687")}
          onMouseDown={(e) => (e.target.style.backgroundColor = "#b37800")}
          onMouseUp={(e) => (e.target.style.backgroundColor = "#B0413E")}
        >
          {page.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default Nav;