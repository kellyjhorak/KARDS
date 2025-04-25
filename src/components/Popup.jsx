import React from "react";
import { useNavigate } from "react-router-dom";
import foxCommentImg from "../../media/Fox_comment.png"; // adjust if needed

const Popup = () => {
  const navigate = useNavigate();

  const styles = {
    page: {
      width: "320px",
      height: "420px",
      backgroundColor: "#FFFFC7",
      fontFamily: "'winco', sans-serif",
      fontWeight: 800,
      color: "#473335",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      overflow: "hidden",
      boxSizing: "border-box",
    },
    container: {
      width: "90%",
      padding: "20px",
    },
    heading: {
      fontSize: "22px",
      marginBottom: "10px",
    },
    paragraph: {
      fontSize: "14px",
      marginBottom: "10px",
    },
    imageContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      marginBottom: "15px",
    },
    image: {
      width: "150px",
      height: "auto",
      maxWidth: "80%",
    },
    buttonGroup: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },
    button: {
      backgroundColor: "#548687",
      color: "#473335",
      fontSize: "14px",
      fontFamily: "'winco', sans-serif",
      fontWeight: 800,
      border: "none",
      padding: "10px 16px",
      borderRadius: "6px",
      cursor: "pointer",
      transition: "background-color 0.3s, transform 0.2s",
      boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
    },
  };

  // Navigation logic
  const handleNav = (page) => {
    navigate(`/${page}`);
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Stop before you buy!</h2>
        <p style={styles.paragraph}>Let's think about this purchase first!</p>

        <div style={styles.imageContainer}>
          <img src={foxCommentImg} alt="Fox commenting" style={styles.image} />
        </div>

        <div style={styles.buttonGroup}>
          <button
            style={styles.button}
            onClick={() => handleNav("home")}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#B0413E")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#548687")}
            onMouseDown={(e) => (e.target.style.backgroundColor = "#b37800")}
            onMouseUp={(e) => (e.target.style.backgroundColor = "#B0413E")}
          >
            Go to Home
          </button>

          <button
            style={styles.button}
            onClick={() => handleNav("den")}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#B0413E")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#548687")}
            onMouseDown={(e) => (e.target.style.backgroundColor = "#b37800")}
            onMouseUp={(e) => (e.target.style.backgroundColor = "#B0413E")}
          >
            Go to Den
          </button>

          <button
            style={styles.button}
            onClick={() => handleNav("shop")}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#B0413E")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#548687")}
            onMouseDown={(e) => (e.target.style.backgroundColor = "#b37800")}
            onMouseUp={(e) => (e.target.style.backgroundColor = "#B0413E")}
          >
            Go to Shop
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
