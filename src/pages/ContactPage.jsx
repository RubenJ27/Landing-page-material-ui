import { Button, Container, Grid, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export const ContactPage = () => {
  return (
    <Container
      sx={{
        flexGrow: 1,
        backgroundColor: "primary.main",
        paddingY: 12,
        paddingX: { xs: 5, md: 20 },
      }}
      maxWidth="full"
    >
      <Typography
        variant="h1"
        sx={{
          color: "tertiary.main",
          fontFamily: "quicksand",
          fontSize: 42,
          fontWeight: "bold",
          marginBottom: 6,
          textAlign: "center",
        }}
      >
        Contacto
      </Typography>
      <Grid sx={{
         alignItems: "center",
         justifyContent: "center",
      }}container>
        <Grid
          sx={{
            textAlign: { xs: "center", md: "center" },
            justifyContent: "center",
            alignItems: "center",
          }}
          item
          xs={12}
          md={12}
        >
          <Button
            sx={{
              margin: 2,
              borderRadius: 10,
              backgroundColor: "white",
              "&:hover": {
                backgroundColor: "secondary.main",
                color: "white",
              },
              color: "primary.main",
            }}
            href="#"
            size="large"
            variant="contained"
            startIcon={<GitHubIcon />}
          >
            GitHub
          </Button>

          <Button
            sx={{
              margin: 2,
              borderRadius: 10,
              background: "linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d);",
              "&:hover": {
                backgroundColor: "secondary.main",
                color: "white",
              },
              color: "white",
            }}
            href="#"
            size="large"
            variant="contained"
            startIcon={<InstagramIcon />}
          >
            Instagram
          </Button>

          <Button sx={{
            margin: 2,
            borderRadius: 10,
            backgroundColor: "#1DA1F2", '&:hover': {
              backgroundColor: "#093550",
              color: "white"
           },
            color: "white"
          }} href="#" size="large" variant="contained" startIcon={<TwitterIcon />}>Twitter</Button>

<Button sx={{
            margin: 2,
            borderRadius: 10,
            backgroundColor: "#128C7E", '&:hover': {
              backgroundColor: "#062E2A",
              color: "white"
           },
               color: "white"
          }} href="#" size="large" variant="contained" startIcon={<WhatsAppIcon />}>WhastApp</Button>
        </Grid>
      </Grid>
    </Container>
  );
};
