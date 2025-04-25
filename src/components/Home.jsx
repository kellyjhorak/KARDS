import React from "react";
import { useNavigate } from "react-router-dom";
import coinIcon from "../../media/Coin_single.png";
import streakIcon from "../../media/Streak.png";
import foxCongratsImg from "../../media/Fox_congrats.png";
import doubleCoinImg from "../../media/Double_coin.png";

const Home = () => {
  const navigate = useNavigate();

  const styles = {
    page: {
      position: "relative",
      width: "320px",
      height: "232px",
      margin: 0,
      padding: "2px",
      backgroundColor: "#FFFFC7",
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
    topLeftInfo: {
      position: "absolute",
      top: "2px",
      left: "2px",
      display: "flex",
      gap: "8px",
      fontSize: "10px",
      fontWeight: "bold",
    },
    countBlock: {
      display: "flex",
      alignItems: "center",
      gap: "2px",
      margin: 0,
      padding: 0,
    },
    icon: {
      width: "16px",
      height: "auto",
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
    streakImageContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      marginTop: "2px",
    },
    streakImg: {
      width: "70px",
      maxWidth: "80%",
      height: "auto",
      objectFit: "contain",
      borderRadius: "4px",
    },
    streakBox: {
      width: "80%",
      maxWidth: "280px",
      height: "30px",
      backgroundColor: "#FCAA67",
      color: "#473335",
      fontSize: "12px",
      fontWeight: "bold",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "2px",
      borderRadius: "4px",
      boxShadow: "0 2px 3px rgba(0, 0, 0, 0.1)",
      marginTop: "-4px",
      marginBottom: "5px",
      textAlign: "center",
      position: "relative",
    },
    streakIcon: {
      width: "40px",
      height: "auto",
      position: "absolute",
      left: "-19px",
      top: "50%",
      transform: "translateY(-50%)",
    },
    streakProgressContainer: {
      width: "90%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "4px",
      position: "relative",
    },
    streakLine: {
      position: "absolute",
      top: "50%",
      left: "5%",
      width: "90%",
      height: "2px",
      backgroundColor: "#473335",
      zIndex: 0,
      pointerEvents: "none",
    },
    streakProgress: {
      display: "flex",
      justifyContent: "center",
      gap: "6px",
      position: "relative",
      zIndex: 1,
    },
    dayBox: {
      width: "18px",
      height: "18px",
      border: "2px solid #473335",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "10px",
      fontWeight: "bold",
      backgroundColor: "white",
      borderRadius: "3px",
    },
    dayBoxChecked: {
      backgroundColor: "#B0413E",
      color: "#FFFFC7",
      borderColor: "#B0413E",
    },
    lastBox: {
      width: "18px",
      height: "18px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1,
      position: "relative",
    },
    lastBoxImg: {
      width: "33px",
      height: "33px",
      objectFit: "contain",
      position: "relative",
      top: "1px",
      right: "-2px",
    },
    rewardMsg: {
      fontSize: "10px",
      textAlign: "center",
      color: "#473335",
      marginTop: "2px",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.buttonContainer}>
        <button
          style={styles.button}
          onClick={() => navigate("/den")}
        >
          DEN
        </button>
        <button
          style={styles.button}
          onClick={() => navigate("/shop")}
        >
          SHOP
        </button>
      </div>

      <div style={styles.topLeftInfo}>
        <div style={styles.countBlock}>
          <img src={coinIcon} alt="Coin" style={styles.icon} />
          <span>123</span>
        </div>
        <div style={styles.countBlock}>
          <img src={streakIcon} alt="Streak" style={styles.icon} />
          <span>4 days</span>
        </div>
      </div>

      <div style={styles.streakImageContainer}>
        <img src={foxCongratsImg} alt="Happy fox" style={styles.streakImg} />
      </div>

      <div style={styles.streakBox}>
        <img src={streakIcon} alt="Streak icon" style={styles.streakIcon} />
        <p style={{ margin: 0 }}>3 days without an impulse purchase!</p>
      </div>

      <div style={styles.streakProgressContainer}>
        <div style={styles.streakLine}></div>
        <div style={styles.streakProgress}>
          {[...Array(3)].map((_, i) => (
            <div key={i} style={{ ...styles.dayBox, ...styles.dayBoxChecked }}>✔</div>
          ))}
          {[...Array(7)].map((_, i) => (
            <div key={i} style={styles.dayBox}></div>
          ))}
          <div style={styles.lastBox}>
            <img src={doubleCoinImg} alt="Double coin" style={styles.lastBoxImg} />
          </div>
        </div>
      </div>

      <div style={styles.rewardMsg}>
        Get to a 10-day streak to earn a 2x coin multiplier!
      </div>
    </div>
  );
};

export default Home;
