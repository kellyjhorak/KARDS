import React, { useEffect, useState } from "react";
import { getUserData } from "../firestoreService";
import { auth } from "../firebase";
import { updateStreakAndCoins } from "../streakManager";
import Nav from "./Nav";
import coinIcon from "../../media/Coin_single.png";
import streakIcon from "../../media/Streak.png";
import doubleCoinImg from "../../media/Double_coin.png";
import foxImg from "../../media/June_happy.png";

// tops
import Black_peace_shirt from "../../media/Black_peace_shirt.png";
import Camo_shirt from "../../media/Camo_shirt.png";
import Dad_shirt from "../../media/Dad_shirt.png";
import Luv_den_shirt from "../../media/Luv_den_shirt.png";
import NYC_shirt from "../../media/NYC_shirt.png";

// bottoms
import Cargos_shorts from "../../media/Cargos_shorts.png";
import Gym_shorts from "../../media/Gym_shorts.png";
import Jorts_shorts from "../../media/Jorts_shorts.png";
import Orange_skirt from "../../media/Orange_skirt.png";
import Purple_skirt from "../../media/Purple_skirt.png";

const Home = () => {
  const [streak, setStreak] = useState(0);
  const [selectedTop, setSelectedTop] = useState(null);
  const [selectedBottom, setSelectedBottom] = useState(null);

  const tops = [
    Black_peace_shirt,
    Camo_shirt,
    Dad_shirt,
    Luv_den_shirt,
    NYC_shirt,
  ];

  const bottoms = [
    Cargos_shorts,
    Gym_shorts,
    Jorts_shorts,
    Orange_skirt,
    Purple_skirt,
  ];

  const [coins, setCoins] = useState(0);

  // getting user streak
  useEffect(() => {

    // getting streak/coinz from streakManager.js
    updateStreakAndCoins();
    
    chrome.runtime.sendMessage({ type: "GET_STREAK_DATA" }, (response) => {
      if (response && response.streak !== undefined) {
        setStreak(response.streak);
      }
    });

    // getting user coinz
    const user = auth.currentUser;
      if (user) {
        getUserData(user.uid).then((data) => {
          if (data) setCoins(data.coins || 0);
        });
      }

    chrome.storage.local.get(["selectedTop", "selectedBottom"], (result) => {
      if (result.selectedTop !== undefined) setSelectedTop(result.selectedTop);
      if (result.selectedBottom !== undefined) setSelectedBottom(result.selectedBottom);
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
    foxContainer: {
      position: "relative",
      width: "300px",
      height: "300px",
      marginTop: "18px",
    },
    foxBase: {
      position: "absolute",
      width: "100%",
      top: 0,
      left: 0,
      userSelect: "none",
      pointerEvents: "none",
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

      <div style={styles.topLeftInfo}>
        <div style={styles.countBlock}>
          <img src={coinIcon} alt="Coin" style={styles.icon} />
          <span>{coins}</span>
        </div>
        <div style={styles.countBlock}>
          <img src={streakIcon} alt="Streak" style={styles.icon} />
          <span>{streak} days</span>
        </div>
      </div>

      <div style={styles.foxContainer}>
        <img src={foxImg} alt="June the Fox" style={styles.foxBase} />
        {selectedTop !== null && (
          <img src={tops[selectedTop]} alt="Top" style={styles.foxBase} />
        )}
        {selectedBottom !== null && (
          <img src={bottoms[selectedBottom]} alt="Bottom" style={styles.foxBase} />
        )}
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
        Get to a 10-day streak to earn special clothes in the shop!
      </div>
    </div>
  );
};

export default Home;
