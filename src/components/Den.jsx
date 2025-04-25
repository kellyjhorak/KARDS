import React from "react";
import { useNavigate } from "react-router-dom";
import foxImg from "../../media/Fox_og.png";

const Den = () => {
  const navigate = useNavigate();

  const styles = {
    body: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
      height: "235px",
      width: "320px",
      margin: 0,
      padding: 0,
      backgroundImage: `url('../../media/Den_background.png')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      fontFamily: "'Rubik Doodle Shadow', cursive",
      color: "#473335",
      overflow: "hidden",
    },
    buttonContainer: {
      marginTop: "20px",
      display: "flex",
      gap: "10px",
    },
    button: {
      backgroundColor: "#548687",
      color: "#473335",
      fontSize: "14px",
      fontFamily: "'winco', sans-serif",
      fontWeight: 800,
      border: "none",
      padding: "8px 16px",
      borderRadius: "6px",
      cursor: "pointer",
      transition: "background-color 0.3s, transform 0.2s",
      boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
    },
    imageContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      marginTop: "20px",
    },
    image: {
      width: "120px",
      maxWidth: "80%",
      height: "auto",
      objectFit: "contain",
      borderRadius: "8px",
    },
  };

  const handleNav = (page) => {
    navigate(`/${page}`); 
  };

  return (
    <div style={styles.body}>
      <div style={styles.buttonContainer}>
        <button
          style={styles.button}
          onClick={() => handleNav("home")}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#B0413E")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#548687")}
          onMouseDown={(e) => (e.target.style.backgroundColor = "#b37800")}
          onMouseUp={(e) => (e.target.style.backgroundColor = "#B0413E")}
        >
          HOME
        </button>
        <button
          style={styles.button}
          onClick={() => handleNav("shop")}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#B0413E")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#548687")}
          onMouseDown={(e) => (e.target.style.backgroundColor = "#b37800")}
          onMouseUp={(e) => (e.target.style.backgroundColor = "#B0413E")}
        >
          SHOP
        </button>
      </div>
      <div style={styles.imageContainer}>
        <img src={foxImg} alt="June the Fox" style={styles.image} />
      </div>
    </div>
  );
};

export default Den;
