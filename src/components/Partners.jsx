import spl from "../assets/images/spl.png";
import aramex from "../assets/images/aramex.png";
import dhl from "../assets/images/dhl.png";
import jnt from "../assets/images/jnt.png";
import Kwickbox from "../assets/images/Kwickbox.png";

import { Box, Grid, Typography } from "@mui/material";

const partners = [
  { name: "SPL", img: spl },
  { name: "Aramex", img: aramex },
  { name: "DHL", img: dhl },
  { name: "J&T", img: jnt },
  { name: "kWickBox", img: Kwickbox },
];

const Partners = () => (
  <Box
    sx={{
      padding: "4rem 2rem",
      textAlign: "center",
      backgroundColor: "#f9f9f9",
    }}
  >
    <Typography variant="h4" sx={{ marginBottom: "1rem" }}>
      Our Trusted Shipping Partners
    </Typography>
    <Typography variant="body1" sx={{ marginBottom: "2rem" }}>
      We work with industry-leading couriers to ensure reliable and efficient
      shipping for your business
    </Typography>
    <Grid container spacing={4} justifyContent="center">
      {partners.map(({ name, img }) => (
        <Grid item key={name}>
          <img
            src={img}
            alt={name}
            style={{
              width: "50px",
              height: "auto",
              transition: "transform 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          />
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Partners;
