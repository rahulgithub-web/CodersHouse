import React from "react";
import Card from "../../components/shared/Card/Card";
import styles from "./Home.module.css";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/shared/Button/Button";

const Home = () => {
  const signinLinkStyle = {
    color: "#0077ff",
    fontWeight: "bold",
    textDecoration: "none",
    marginLeft: "10px",
  };

  let navigate = useNavigate();

  function startRegister() {
    navigate("/register");
  }

  return (
    <div className={styles.cardWrapper}>
      <Card title="Welcome to Codershouse!" icon="logo">
        <p className={styles.text}>
          We're working to get-Codershouse ready for everyone! while we wrap up
          the finishing youchers, we're adding people gradually to make sure
          nothing breaks.
        </p>
        <div>
          <Button onClick={startRegister} text="Get your username"></Button>
          <div className={styles.signinWrapper}>
            <span className={styles.hasInvite}>Enter the invite code</span>
            <Link style={signinLinkStyle} to="/login">
              Sign in
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Home;
