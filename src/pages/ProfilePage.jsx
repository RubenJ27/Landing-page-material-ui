import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import imageStack from "../assets/img/stackcss.png";

export const ProfilePage = () => {
  return (
    <Container sx={{
      flexGrow: 1,
      backgroundColor: "#FFF",
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
            fontSize: 36,
            marginBottom: 4,
          }}>
            Desarrollador FrontEnd con React JS
          </Typography>
          <Typography variant="p" sx={{
            fontFamily: "quicksand",
            fontSize: 22,
            marginBottom: 6,
          }}>
              Disfruto creando sitios web y aplicaciones web hermosos y faciles de usar. Mira algunos de mis trabajos y experiencias! Si te gusta lo que ves y tienes un proyecto que necesitas codificar, no dudes en contactarme. 
          </Typography>
        </Grid>
        <Grid sx={{ textAlign: { xs: "center", md: "right" }, marginTop: { xs: 10, md: 0 } }} item xs={12} sm={6}>
          <img src={imageStack} width={300} />
        </Grid>
      </Grid>
    </Container>
  )
}
