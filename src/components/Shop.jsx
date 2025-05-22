import React, { useState } from "react";
import Nav from "./Nav";

import foxImg from "../../media/June.png";
import background from "../../media/Shop_background.png";

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

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("tops");
  const [selectedTop, setSelectedTop] = useState(null);
  const [selectedBottom, setSelectedBottom] = useState(null);

  const styles = {
    page: {
      position: "relative",
      width: "640px",
      height: "464px",
      padding: "4px",
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
      overflow: "hidden",
      boxSizing: "border-box",
    },
    tabContainer: {
      position: "absolute",
      top: "95px",
      left: "45px",
      width: "260px",
      display: "flex",
      justifyContent: "center",
      gap: "6px",
      zIndex: 2,
    },
    tab: {
      padding: "3px 6px",
      backgroundColor: "#548687",
      color: "#FFFFC7",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "10px",
      fontWeight: "bold",
      border: "none",
    },
    itemBanner: {
      position: "absolute",
      top: "100px",
      left: "35px",
      width: "260px",
      height: "300px",
      overflowY: "auto",
      overflowX: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "2px",
      padding: "2px",
      backgroundColor: "rgba(255, 255, 255, 0)",
      scrollBehavior: "smooth",
    },
    itemImg: {
      height: "150px",
      objectFit: "contain",
      cursor: "pointer",
      transition: "transform 0.2s",
    },
    fox: {
      position: "absolute",
      width: "300px", 
      top: "210px",  
      left: "325px", 
    },
    equippedItem: {
      position: "absolute",
      objectFit: "contain",
      zIndex: 3,
    },
  };

  const categories = {
    tops: [Black_peace_shirt, Camo_shirt, Dad_shirt, Luv_den_shirt, NYC_shirt],
    bottoms: [Cargos_shorts, Gym_shorts, Jorts_shorts, Orange_skirt, Purple_skirt],
  };

  const equippedItemStyle = {
    tops: { top: "210px", left: "325px", width: "300px" },
    bottoms: { top: "210px", left: "325px", width: "300px" },
  };

  const handleItemClick = (index) => {
    if (selectedCategory === "tops") {
      setSelectedTop(index);
    } else if (selectedCategory === "bottoms") {
      setSelectedBottom(index);
    }
  };

  return (
    <div style={styles.page}>
      <Nav />

      <div style={styles.tabContainer}>
        {Object.keys(categories).map((cat) => (
          <button
            key={cat}
            style={{
              ...styles.tab,
              backgroundColor: selectedCategory === cat ? "#B0413E" : "#548687",
            }}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      <div style={{ ...styles.itemBanner, ...customScrollbarStyle }}>
        {categories[selectedCategory].map((item, index) => (
          <img
            key={index}
            src={item}
            alt={`Item ${index}`}
            style={styles.itemImg}
            onClick={() => handleItemClick(index)}
            onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1.0)")}
          />
        ))}
      </div>

      <img src={foxImg} alt="Fox" style={styles.fox} />

      {selectedTop !== null && (
        <img
          src={categories.tops[selectedTop]}
          alt="Equipped Top"
          style={{ ...styles.equippedItem, ...equippedItemStyle.tops }}
        />
      )}

      {selectedBottom !== null && (
        <img
          src={categories.bottoms[selectedBottom]}
          alt="Equipped Bottom"
          style={{ ...styles.equippedItem, ...equippedItemStyle.bottoms }}
        />
      )}
    </div>
  );
};

const customScrollbarStyle = {
  scrollbarWidth: "thin",
  scrollbarColor: "#B0413E #FFFFC7",
  msOverflowStyle: "none",
};

export default Shop;
