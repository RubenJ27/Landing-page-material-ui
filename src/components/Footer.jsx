import { Box, Container, Typography } from "@mui/material";
import ImageLogoNav from "../assets/img/JadaLogo.png";

export const Footer = () => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "secondary.main",
        paddingY: 2,
        paddingX: { xs: 5, md: 20 },
      }}
      maxWidth="full"
    >
      <Box sx={{ display: 'flex'}}>
        <img width={40} src={ImageLogoNav} />

        <Typography
          variant="h6"
          component="a"
          href="/"
          sx={{
            mt: 1,
            ml: 2,
            fontFamily: "quicksand",
            display: "flex",
            fontWeight: "bold",
            color: "primary.main",
            textDecoration: "none",
          }}
        >
          Ruben Jaramillo Cervantes
        </Typography>
      </Box>
    </Container>
  );
};
