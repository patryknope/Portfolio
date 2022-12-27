import { Box, Button, styled, Typography } from "@mui/material";
import React from "react";
const Hero = () => {
  const CustomButton = styled(Button)(({ theme }) => ({
    border: "3px solid transparent",
    backgroundColor: "#00C7FF",
    color: "white",
    width: "20%",
    borderRadius: "25px",
    "&:hover": {
      border: "3px solid white",
      backgroundColor: "transparent",
    },
    [theme.breakpoints.down("md")]: {
      width: "35%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "50%",
    },
  }));
  const CustomTitle = styled(Typography)(({ theme }) => ({
    color: "white",
    textAlign: "center",
    borderRadius: "25px",
    [theme.breakpoints.down("md")]: {
      width: "3.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      width: "2.5rem",
    },
  }));

  return (
    <Box
      sx={{ mt: 8, mb: 12, p: 2, maxWidth: "1200px", mx: "auto" }}
      id={"home"}
    >
      <Typography
        sx={{ color: "white", textAlign: "center", mb: 2 }}
        variant={"h6"}
      >
        Hello, I'm Patryk!
      </Typography>
      <CustomTitle variant={"h2"}>
        I enjoy <span style={{ color: "rgba(0,199,255,255)" }}>building</span>{" "}
        and <span style={{ color: "rgba(0,199,255,255)" }}>designing</span>{" "}
        full-stack web applications
      </CustomTitle>
      <br />
      <br />
      <br />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <CustomButton href="https://www.linkedin.com/in/patryk-paszkowski-1a2538234">
          Contact me
        </CustomButton>
      </Box>
    </Box>
  );
};

export default Hero;
