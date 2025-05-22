import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import foxImg from "../../media/June.png";

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
  }, []);

  const styles = {
    body: {
      position: "relative",
      width: "640px",
      height: "464px",
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
    fox: {
      position: "absolute",
      width: "300px",
      top: "220px",
      left: "320px",
      transform: "translate(-50%, 0)", // center horizontally on left:320px
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
  };

  return (
    <div style={styles.body}>
      <Nav />
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
