import { Button, Container, Grid, Typography } from '@mui/material'
import GitHubIcon from "@mui/icons-material/GitHub";
import React from 'react'
import imageLogo from "../assets/img/AvatarMaker.png";

export const HomePage = () => {
  return (
    <Container sx={{
      flexGrow: 1,
      background: "linear-gradient(to left bottom, #D4E7FE, #FFF)",
      paddingTop: 25,
      paddingBottom: 12,
      paddingX: { xs: 5, md: 20 },
    }}
    maxWidth="ful"
    >

      <Grid container>
        <Grid sx={{ textAlign: "left" }} item xs={12} sm={6}>
          <Typography variant="h1" sx={{
            fontFamily: "quicksand",
            fontWeight: "bold",
            color: "primary.main",
            fontSize: 46,
          }}>
            Hola 👋, Soy Ruben
          </Typography>
          <Typography variant="h1" sx={{
            fontFamily: "quicksand",
            fontWeight: "bold",
            color: "secondary.main",
            fontSize: 46,
            marginBottom: 2,
          }}>
            Trabajemos juntos.
          </Typography>
          <Typography variant="p" sx={{
            fontFamily: "quicksand",
            fontSize: 26,
            marginBottom: 8
          }}>
            Soy un desarrollador web con experiencia en React JS, HTML, CSS, y mucha creatividad.
          </Typography>
          <br></br>
          <Button
            href= "htttpsdf"
            target= '_blank'
            sx={{ border: '1px dashed blue', color: "secondary.main", marginTop: 2, borderRadius: 10, "&:hover": {
              backgroundColor: "secondary.main",
              color: "white",
            },}}
            size="large"
            variant="outline"
            startIcon={<GitHubIcon />}
          >Perfil de GitHub</Button>
        </Grid>
        <Grid sx={{ textAlign: { xs: "center", md: "right" }, marginTop: { xs: 10, md: 0 }, borderRadius: 5 }}  item xs={12} sm={6}>
          <img src={imageLogo} className="homepage" />
        </Grid>
      </Grid>
    </Container>
  )
}
