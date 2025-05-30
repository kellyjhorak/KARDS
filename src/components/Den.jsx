import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import foxImg from "../../media/June.png";

// backgrounds
import DenBackground from "../../media/fire-1.png";
import Fire2 from "../../media/fire-2.png";
import Fire3 from "../../media/fire-3.png";
import Fire4 from "../../media/fire-4.png";

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

const Den = () => {
  const [selectedTop, setSelectedTop] = useState(null);
  const [selectedBottom, setSelectedBottom] = useState(null);
  const [fireOn, setFireOn] = useState(false);
  const [showGlow, setShowGlow] = useState(true);
  const [fireFrameIndex, setFireFrameIndex] = useState(0);

  const fireFrames = [Fire2, Fire3, Fire4];

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

  useEffect(() => {
    chrome.storage.local.get(["selectedTop", "selectedBottom"], (result) => {
      if (result.selectedTop !== undefined) setSelectedTop(result.selectedTop);
      if (result.selectedBottom !== undefined) setSelectedBottom(result.selectedBottom);
    });

    const timer = setTimeout(() => setShowGlow(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let intervalId;

    if (fireOn) {
      intervalId = setInterval(() => {
        setFireFrameIndex((prevIndex) => (prevIndex + 1) % fireFrames.length);
      }, 300); // frame speed in ms
    } else {
      setFireFrameIndex(0); // reset to base frame if fire is off
    }

    return () => clearInterval(intervalId);
  }, [fireOn]);

  const backgroundImage = fireOn
    ? `url(${fireFrames[fireFrameIndex]})`
    : `url(${DenBackground})`;

  const styles = {
    body: {
      position: "relative",
      width: "640px",
      height: "464px",
      margin: 0,
      padding: 0,
      backgroundImage,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      fontFamily: "'Rubik Doodle Shadow', cursive",
      color: "#473335",
      overflow: "hidden",
    },
    fox: {
      position: "absolute",
      width: "300px",
      top: "220px",
      left: "320px",
      transform: "translate(-50%, 0)",
      userSelect: "none",
      pointerEvents: "none",
    },
    equippedItem: {
      position: "absolute",
      top: "220px",
      left: "320px",
      width: "300px",
      transform: "translate(-50%, 0)",
      pointerEvents: "none",
      userSelect: "none",
    },
    fireplaceHotspot: {
      position: "absolute",
      top: "300px",
      left: "410px",
      width: "120px",
      height: "100px",
      cursor: "pointer",
      zIndex: 10,
    },
    glowAura: {
      position: "absolute",
      top: "335px",
      left: "460px",
      width: "20px",
      height: "20px",
      borderRadius: "50%",
      backgroundColor: "rgba(255, 255, 255, 0.3)",
      boxShadow: "0 0 5px 2px rgba(255, 255, 255, 0.6)",
      animation: "innerGlow 1.5s ease-in-out infinite",
      zIndex: 9,
      pointerEvents: "none",
    },
  };

  return (
    <div style={styles.body}>
      <style>
        {`@keyframes innerGlow {
          0% { box-shadow: 0 0 4px 1px rgba(255, 255, 255, 0.3); }
          50% { box-shadow: 0 0 12px 4px rgba(255, 255, 255, 0.7); }
          100% { box-shadow: 0 0 4px 1px rgba(255, 255, 255, 0.3); }
        }`}
      </style>

      <Nav />

      {showGlow && !fireOn && <div style={styles.glowAura} />}

      <div
        style={styles.fireplaceHotspot}
        onClick={() => setFireOn((prev) => !prev)}
      />

      <img src={foxImg} alt="June the Fox" style={styles.fox} />

      {selectedTop !== null && (
        <img src={tops[selectedTop]} alt="Top" style={styles.equippedItem} />
      )}
      {selectedBottom !== null && (
        <img src={bottoms[selectedBottom]} alt="Bottom" style={styles.equippedItem} />
      )}
    </div>
  );
};

export default Den;
