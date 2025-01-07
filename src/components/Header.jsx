import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import logo from "../assets/images/logo.png";

const Header = () => (
  <AppBar
    position="static"
    sx={{
      backgroundColor: "white",
      boxShadow: "none",
      borderRadius: "12px",
      padding: "0 2rem",
      border: "1px solid #f0f0f0",
    }}
  >
    <Toolbar
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
            <Box
        component="img"
        src={logo} 
        alt="Nitros Logo"
        sx={{
          height: "40px", 
          cursor: "pointer",
        }}
      />

      <Box
        sx={{
          display: "flex",
          gap: "2rem",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Button
          sx={{
            color: "#primary",
            backgroundColor: "#f5f5f5",
            borderRadius: "8px",

            padding: "0.5rem 1rem",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#primary",
              color: "white",
            },
          }}
        >
          Home
        </Button>
        <Button
          sx={{
            color: "#4a4a4a",
            fontWeight: "400",
            textTransform: "none",
            "&:hover": {
              color: "#ff5722",
            },
          }}
        >
          Rates Calculator
        </Button>
        <Button
          sx={{
            color: "#4a4a4a",
            fontWeight: "400",
            textTransform: "none",
            "&:hover": {
              color: "#ff5722",
            },
          }}
        >
          Shipping
        </Button>
        <Button
          sx={{
            color: "#4a4a4a",
            fontWeight: "400",
            textTransform: "none",
            "&:hover": {
              color: "#ff5722",
            },
          }}
        >
          Pricing
        </Button>
        <Button
          sx={{
            color: "#4a4a4a",
            fontWeight: "400",
            textTransform: "none",
            "&:hover": {
              color: "#ff5722",
            },
          }}
        >
          Why Nitros
        </Button>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <Button
          sx={{
            color: "#4a4a4a",
            fontWeight: "400",
            textTransform: "none",
            "&:hover": {
              color: "#ff5722",
            },
          }}
        >
          Sign Up / In
        </Button>
        <Typography
          variant="body1"
          sx={{
            color: "#4a4a4a",
            fontWeight: "400",
            cursor: "pointer",
            "&:hover": {
              color: "#ff5722",
            },
          }}
        >
          عربي
        </Typography>
      </Box>
    </Toolbar>
  </AppBar>
);

export default Header;
