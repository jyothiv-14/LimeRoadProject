import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.languageSelector}>Limeroad is offered in : <span style={styles.language}>हिन्दी</span></div>
      <div style={styles.linksContainer}>
        <div style={styles.linkColumn}>
          <Link href="#" style={styles.link}>About Us</Link>
          <Link href="#" style={styles.link}>Team</Link>
          <Link href="#" style={styles.link}>Careers</Link>
          <Link href="#" style={styles.link}>Faq</Link>
          <Link href="#" style={styles.link}>Contact Us</Link>
          <Link href="#" style={styles.link}>Settings</Link>
        </div>
        <div style={styles.linkColumn}>
          <Link href="#" style={styles.link}>Orders</Link>
          <Link href="#" style={styles.link}>Shopping Cart</Link>
          <Link href="#" style={styles.link}>Terms Of Use</Link>
          <Link href="#" style={styles.link}>Privacy Policy</Link>
          <Link href="#" style={styles.link}>Return Policy</Link>
          <Link href="#" style={styles.link}>Disclaimer</Link>
        </div>
      </div>
      <div style={styles.copyright}>copyright &copy; 2025 limeroad.com</div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#f8f8f8",
    padding: "20px 40px",
    textAlign: "center",
  },
  languageSelector: {
    fontSize: "14px",
    marginBottom: "10px",
  },
  language: {
    fontWeight: "bold",
  },
  linksContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "50px",
    marginBottom: "15px",
  },
  linkColumn: {
    display: "flex",
    flexDirection: "column",
  },
  link: {
    textDecoration: "none",
    color: "black",
    fontSize: "14px",
    marginBottom: "5px",
  },
  copyright: {
    fontSize: "12px",
    color: "#777",
  },
};

export default Footer;
