import { Box, Button, Typography, styled } from "@mui/material";
import React from "react";

const About = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      gap: "2rem",
    },
  }));

  const CustomTitleBox = styled(Box)(({ theme }) => ({
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      gap: "2rem",
    },
  }));

  const CustomButton = styled(Button)(({ theme }) => ({
    border: "3px solid white",
    borderRadius: "25px",
    color: "white",
    width: "15%",
    display: "block",
    "&:hover": {
      border: "3px solid #00C7FF",
    },
    [theme.breakpoints.down("md")]: {
      width: "50%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "75%",
    },
  }));

  return (
    <Box sx={{ maxWidth: "1300px", my: 10, padding: 3, mx: "auto" }} id="about">
      <CustomTitleBox
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Typography
          variant="h2"
          style={{ color: "white", textAlign: "center" }}
        >
          About me
        </Typography>
      </CustomTitleBox>
      <div
        style={{
          height: "5px",
          backgroundColor: "#00C7FF",
          width: "100%",
          mx: "auto",
          border: 0,
          borderRadius: "25px",
          marginTop: "25px",
          marginBottom: "100px",
        }}
      ></div>
      <Typography variant="h5" style={{ color: "white", textAlign: "left" }}>
        I am currently in my third year of studying IT part-time at the
        University of Lower Silesia. During a three-month internship at Iteratec
        GmbH, I had the opportunity to work as a full-stack developer and gain
        valuable experience in both back-end and front-end technologies. I am
        passionate about continuously learning and improving my software
        development skills. In my free time, I enjoy playing poker and have
        recently started learning chess, but I'm not very good at it (yet).
      </Typography>

      <CustomBox sx={{ my: 7 }}></CustomBox>

      <div
        style={{
          height: "5px",
          backgroundColor: "#00C7FF",
          width: "100%",
          mx: "auto",
          border: 0,
          borderRadius: "25px",
        }}
      ></div>

      <Typography
        variant="h4"
        sx={{ color: "white", mt: 12, textAlign: "center" }}
      >
        Interested in Working Together?
      </Typography>
      <a href="https://www.linkedin.com/in/patryk-paszkowski-1a2538234/">
        <CustomButton
          variant="outlined"
          sx={{
            mx: "auto",
            mt: 3,
            mb: 8,
          }}
        >
          Get in Touch
        </CustomButton>
      </a>
    </Box>
  );
};

export default About;
