import React, { useState } from "react";
import { auth } from "../firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

// dont change ANYTHING ON THIS PAGE or it will mess everything up
const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isSignup) {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Signed up!");
        navigate("/home");
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Logged in!");
        navigate("/home");
      }
    } catch (err) {
      console.error(err.message);
      alert("Error: " + err.message);
    }
  };

  const styles = {
    page: {
      position: "relative",
      width: "640px",
      height: "464px",
      margin: 0,
      padding: "4px",
      backgroundColor: "#FFFFC7",
      fontFamily: "'winco', sans-serif",
      fontWeight: 800,
      color: "#473335",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      boxSizing: "border-box",
    },
    input: {
      width: "80%",
      padding: "12px",
      margin: "8px 0",
      fontFamily: "'winco', sans-serif",
      fontWeight: 800,
      fontSize: "20px",
      borderRadius: "8px",
      border: "2px solid #473335",
      backgroundColor: "#FFF",
      color: "#473335",
    },
    button: {
      backgroundColor: "#548687",
      color: "#473335",
      fontSize: "20px",
      fontFamily: "'winco', sans-serif",
      fontWeight: 800,
      border: "none",
      padding: "12px 20px",
      borderRadius: "8px",
      cursor: "pointer",
      transition: "background-color 0.3s, transform 0.2s",
      boxShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
      marginTop: "8px",
    },
    toggle: {
      marginTop: "12px",
      fontSize: "18px",
      cursor: "pointer",
      textDecoration: "underline",
      color: "#548687",
    },
    title: {
      fontSize: "28px",
      marginBottom: "12px",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.title}>
        {isSignup ? "Create an Account" : "Sign In"}
      </div>
      <form onSubmit={handleSubmit} style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          {isSignup ? "Sign Up" : "Log In"}
        </button>
      </form>
      <div onClick={() => setIsSignup(!isSignup)} style={styles.toggle}>
        {isSignup ? "Already have an account? Log in" : "New here? Sign up"}
      </div>
    </div>
  );
};

export default Signin;
