import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import { auth, db } from "../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
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
      padding: "8px 14px",     
      backgroundColor: "#548687",
      color: "#FFFFC7",
      borderRadius: "6px",    
      cursor: "pointer",
      fontSize: "16px",       
      fontWeight: "bold",
      border: "none",
      minWidth: "80px",         
      textAlign: "center",
    },
    itemBanner: {
      position: "absolute",
      top: "100px",
      left: "35px",
      width: "300px",           
      height: "300px",
      overflowY: "auto",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",    
      justifyContent: "center",
      gap: "4px",
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

  const itemData = {
    tops: [
      { src: Black_peace_shirt, price: 10 },
      { src: Camo_shirt, price: 12 },
      { src: Dad_shirt, price: 8 },
      { src: Luv_den_shirt, price: 15 },
      { src: NYC_shirt, price: 10 },
    ],
    bottoms: [
      { src: Cargos_shorts, price: 10 },
      { src: Gym_shorts, price: 10 },
      { src: Jorts_shorts, price: 12 },
      { src: Orange_skirt, price: 15 },
      { src: Purple_skirt, price: 8 },
    ],
  };

  const categories = {
    tops: itemData.tops.map(item => item.src),
    bottoms: itemData.bottoms.map(item => item.src),
  };

  const equippedItemStyle = {
    tops: { top: "210px", left: "325px", width: "300px" },
    bottoms: { top: "210px", left: "325px", width: "300px" },
  };

  const handleItemClick = (index) => {
    if (selectedCategory === "tops") {
      setSelectedTop(index);
      chrome.storage.local.set({ selectedTop: index });
    } else if (selectedCategory === "bottoms") {
      setSelectedBottom(index);
      chrome.storage.local.set({ selectedBottom: index });
    }
  };

  const handleBuy = async () => {
    const user = auth.currentUser;
    if (!user) return alert("Not signed in");
    const userRef = doc(db, "users", user.uid);
    const snap = await getDoc(userRef);
    const data = snap.data();
    const type = selectedCategory;
    const index = type === "tops" ? selectedTop : selectedBottom;
    if (index === null) return alert("Select an item first");
    const item = itemData[type][index];
    const ownedItems = data[type] || [];
    const userCoins = data.coins || 0;
    if (ownedItems.includes(item.src)) {
      alert("You already own this item!");
      return;
    }
    if (userCoins < item.price) {
      alert("Not enough coins!");
      return;
    }
    await updateDoc(userRef, {
      coins: userCoins - item.price,
      [type]: [...ownedItems, item.src],
    });
    alert(`Purchased for ${item.price} coins!`);
  }

  useEffect(() => {
    chrome.storage.local.get(["selectedTop", "selectedBottom"], (result) => {
      if (result.selectedTop !== undefined) setSelectedTop(result.selectedTop);
      if (result.selectedBottom !== undefined) setSelectedBottom(result.selectedBottom);
    });
  }, []);

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
      <button onClick={handleBuy}
        style={{
        position: "absolute",
        bottom: "20px",
        right: "20px",
        padding: "10px 20px",
        backgroundColor: "#B0413E",
        color: "#FFFFC7",
        fontSize: "16px",
        fontWeight: "bold",
        borderRadius: "6px",
        border: "none",
        cursor: "pointer",
        }}
        >
          Buy
      </button>
    </div>
  );
};

const customScrollbarStyle = {
  scrollbarWidth: "thin",
  scrollbarColor: "#B0413E #FFFFC7",
  msOverflowStyle: "none",
};

export default Shop;
