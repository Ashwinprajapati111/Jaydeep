import React from "react";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import "./navbar.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const Navbar = () => {
  return (
    <>
    <div className="main-nav">
      {/* <nav className="main-nav">
        <div className="logo">
          <h2>Ashwin Prajapati</h2>
        </div>
        <div className="manu-link">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Service</a>
            </li>
            <li>
              <a href="#">Map</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="social">
            <ul className="social-desktop">
                <li className="facebook"><FaFacebookSquare/></li>
                <li className="insta"><FaInstagramSquare/></li>
            </ul>
        </div>
      </nav> */}
      <Grid container spacing={0}>
        <Grid item xs={4}>
          {" "}
          <div className="logo">
            <h2>Ashwin Prajapati</h2>
          </div>
        </Grid>
        <Grid item xs={8}>
          <div className="manu-link">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Service</a>
              </li>
              <li>
                <a href="#">Map</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </Grid>
        
      </Grid>
      <nav className="main-nav"></nav>
    </div>
    </>
  );
};

export default Navbar;
