import React from "react";
import { useNavigate } from "react-router-dom";
import shirtImg from "../../media/Dad_shirt.png";
import foxImg from "../../media/Fox_og.png";
import background from "../../media/Shop_background.png";

const Shop = () => {
  const navigate = useNavigate();

  const styles = {
    page: {
      position: "relative",
      width: "320px",
      height: "232px",
      margin: 0,
      padding: "2px",
      backgroundImage: `url(${background})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      fontFamily: "'winco', sans-serif",
      fontWeight: 800,
      color: "#473335",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      overflow: "hidden",
      boxSizing: "border-box",
    },
    buttonContainer: {
      marginTop: "2px",
      display: "flex",
      gap: "2px",
      paddingBottom: "5px",
    },
    button: {
      backgroundColor: "#548687",
      color: "#473335",
      fontSize: "10px",
      fontFamily: "'winco', sans-serif",
      fontWeight: 800,
      border: "none",
      padding: "4px 6px",
      borderRadius: "4px",
      cursor: "pointer",
      transition: "background-color 0.3s, transform 0.2s",
      boxShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
    },
    shopItems: {
      position: "absolute",
      top: "45px",
      left: "30px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "4px",
    },
    glasses: {
      width: "50px",
    },
    shirt: {
      width: "120px",
    },
    fox: {
      position: "absolute",
      width: "85px",
      top: "95px",
      left: "195px",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.buttonContainer}>
        <button
          style={styles.button}
          onClick={() => navigate("/home")}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#B0413E")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#548687")}
          onMouseDown={(e) => (e.target.style.backgroundColor = "#b37800")}
          onMouseUp={(e) => (e.target.style.backgroundColor = "#B0413E")}
        >
          HOME
        </button>
        <button
          style={styles.button}
          onClick={() => navigate("/den")}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#B0413E")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#548687")}
          onMouseDown={(e) => (e.target.style.backgroundColor = "#b37800")}
          onMouseUp={(e) => (e.target.style.backgroundColor = "#B0413E")}
        >
          DEN
        </button>
      </div>

      <div style={styles.shopItems}>
        <img src={shirtImg} alt="Shirt" style={styles.shirt} />
      </div>

      <img src={foxImg} alt="Fox wearing items" style={styles.fox} />
    </div>
  );
};

export default Shop;