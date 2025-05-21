import React, { useEffect, useState } from "react";
import Nav from "./Nav";/*
import { useNavigate } from "react-router-dom";*/
import coinIcon from "../../media/Coin_single.png";
import streakIcon from "../../media/Streak.png";
import foxCongratsImg from "../../media/Fox_congrats.png";
import doubleCoinImg from "../../media/Double_coin.png";

const Home = () => {
  /* old
  const navigate = useNavigate();*/
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    chrome.runtime.sendMessage({ type: "GET_STREAK_DATA" }, (response) => {
      if (response && response.streak !== undefined) {
        setStreak(response.streak);
      }
    });
  }, []);

  const styles = {
    page: {
      position: "relative",
      width: "640px",
      height: "464px",
      margin: 0,
      padding: "4px",
      paddingTop: "64px",
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
      position: "center",
      top: "56px",
      left: "4px",
      display: "flex",
      gap: "16px",
      fontSize: "20px",
      fontWeight: "bold",
    },
    countBlock: {
      display: "flex",
      alignItems: "center",
      gap: "4px",
      margin: 0,
      padding: 0,
    },
    icon: {
      width: "32px",
      height: "auto",
    },
    buttonContainer: {
      marginTop: "4px",
      display: "flex",
      gap: "4px",
      paddingBottom: "10px",
    },
    button: {
      backgroundColor: "#548687",
      color: "#473335",
      fontSize: "20px",
      fontFamily: "'winco', sans-serif",
      fontWeight: 800,
      border: "none",
      padding: "8px 12px",
      borderRadius: "8px",
      cursor: "pointer",
      transition: "background-color 0.3s, transform 0.2s",
      boxShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
    },
    streakImageContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      marginTop: "4px",
    },
    streakImg: {
      width: "140px",
      maxWidth: "80%",
      height: "auto",
      objectFit: "contain",
      borderRadius: "8px",
    },
    streakBox: {
      width: "80%",
      maxWidth: "560px",
      height: "60px",
      backgroundColor: "#FCAA67",
      color: "#473335",
      fontSize: "24px",
      fontWeight: "bold",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "4px",
      borderRadius: "8px",
      boxShadow: "0 2px 3px rgba(0, 0, 0, 0.1)",
      marginTop: "-8px",
      marginBottom: "10px",
      textAlign: "center",
      position: "relative",
    },
    streakIcon: {
      width: "80px",
      height: "auto",
      position: "absolute",
      left: "-38px",
      top: "50%",
      transform: "translateY(-50%)",
    },
    streakProgressContainer: {
      width: "90%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "8px",
      position: "relative",
    },
    streakLine: {
      position: "absolute",
      top: "50%",
      left: "5%",
      width: "90%",
      height: "4px",
      backgroundColor: "#473335",
      zIndex: 0,
      pointerEvents: "none",
    },
    streakProgress: {
      display: "flex",
      justifyContent: "center",
      gap: "12px",
      position: "relative",
      zIndex: 1,
    },
    dayBox: {
      width: "36px",
      height: "36px",
      border: "4px solid #473335",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "20px",
      fontWeight: "bold",
      backgroundColor: "white",
      borderRadius: "6px",
    },
    dayBoxChecked: {
      backgroundColor: "#B0413E",
      color: "#FFFFC7",
      borderColor: "#B0413E",
    },
    lastBox: {
      width: "36px",
      height: "36px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1,
      position: "relative",
    },
    lastBoxImg: {
      width: "66px",
      height: "66px",
      objectFit: "contain",
      position: "relative",
      top: "2px",
      right: "-4px",
    },
    rewardMsg: {
      fontSize: "20px",
      textAlign: "center",
      color: "#473335",
      marginTop: "4px",
    },
  };

  return (
    <div style={styles.page}>
      <Nav />
      {/* old nav functionality }
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={() => navigate("/den")}>
          DEN
        </button>
        <button style={styles.button} onClick={() => navigate("/shop")}>
          SHOP
        </button>
      </div>*/}

      <div style={styles.topLeftInfo}>
        <div style={styles.countBlock}>
          <img src={coinIcon} alt="Coin" style={styles.icon} />
          <span>123</span>
        </div>
        <div style={styles.countBlock}>
          <img src={streakIcon} alt="Streak" style={styles.icon} />
          <span>{streak} days</span>
        </div>
      </div>

      <div style={styles.streakImageContainer}>
        <img src={foxCongratsImg} alt="Happy fox" style={styles.streakImg} />
      </div>

      <div style={styles.streakBox}>
        <img src={streakIcon} alt="Streak icon" style={styles.streakIcon} />
        <p style={{ margin: 0 }}>{streak} days without an impulse purchase!</p>
      </div>

      <div style={styles.streakProgressContainer}>
        <div style={styles.streakLine}></div>
        <div style={styles.streakProgress}>
          {[...Array(10)].map((_, i) => {
            const isChecked = i < streak;
            return (
              <div
                key={i}
                style={isChecked ? { ...styles.dayBox, ...styles.dayBoxChecked } : styles.dayBox}
              >
                {isChecked ? "✔" : ""}
              </div>
            );
          })}
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
