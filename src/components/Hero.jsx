import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import TableComponent from "./TableComponent";

const Hero = () => (
  <Box
    sx={{
      padding: "4rem 2rem",
      backgroundColor: "#f9f9f9",
    }}
  >
   
    <Grid container>
     
      <Grid item xs={6} md={6}>
        <Box>
          <Box sx={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
            <Typography
              variant="h3"
              sx={{ color: "#ff5722", marginBottom: "1rem" }}
            >
              Nitros
            </Typography>

            <Typography variant="h3">platform gets you</Typography>
          </Box>
          <Typography variant="h3" sx={{ marginBottom: "2rem" }}>
            shipping carriers at the
          </Typography>
          <Typography
            variant="h3"
            sx={{ color: "#ff5722", marginBottom: "2rem" }}
          >
            best prices
          </Typography>

          <Typography variant="body1" sx={{ marginBottom: "0.5rem" }}>
            Link your e-store with Nitros with few steps to ship from your door
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "2rem" }}>
            to the client's door.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
              width: "169px",
              height: "42px",
              borderRadius: "99px",
              padding: "8px 32px",
              fontSize: "12px",
            }}
          >
            Start Now
          </Button>
        </Box>
      </Grid>

      
      <Grid Grid item xs={12} md={6} marginLeft={"-90px"}>
        <TableComponent />
      </Grid>
    </Grid>
  </Box>
);

export default Hero;
