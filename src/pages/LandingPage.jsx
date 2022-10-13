import { Box } from "@mui/material";
import React from "react";
import {
  HomePage,
  ProfilePage,
  StudiesPage,
  ExperiencePage,
  PortfolioPage,
  ContactPage,
} from "./";

export const LandingPage = () => {
  return (
    <Box>
      <Box id="home">
        <HomePage />
      </Box>
      <Box id="profile">
        <ProfilePage />
      </Box>
      <Box id="studies">
        <StudiesPage />
      </Box>
      <Box id="experience">
        <ExperiencePage />
      </Box>
      <Box id="portfolio">
        <PortfolioPage />
      </Box>
      <Box id="contact">
        <ContactPage />
      </Box>
    </Box>
  );
};
