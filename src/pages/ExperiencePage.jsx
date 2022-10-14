import { Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";

export const ExperiencePage = () => {
  return (
    <Container
      sx={{
        flexGlow: 1,
        background: "linear-gradient(to left bottom, #D4E7FE, #FFF)",
        paddingY: 12,
        paddingX: { xs: 5, md: 20 },
      }}
      maxWidth="full"
    >
      <Typography
        variant="h1"
        sx={{
          color: "primary.main",
          fontFamily: "quicksand",
          fontSize: 42,
          fontWeight: "bold",
          marginBottom: 6,
          textAlign: "center",
        }}
      >
        Experiencia
      </Typography>
      <Grid container>
        <Grid sx={{ textAlign: "left" }} item xs={12} sm={6}>
          <Paper
            sx={{
              margin: 4,
              padding: 4,
              borderRadius: 5,
            }}
            elevation={8}
          >
            <Typography
              sx={{
                fontFamily: "quicksand",
                fontWeight: "bold",
                fontSize: 22,
                marginBottom: 2,
              }}
              variant="h1"
            >
              2022 - FrontEnd developer
            </Typography>
            <Typography
              sx={{
                fontFamily: "quicksand",
                fontWeight: "ligher",
                fontSize: 20,
              }}
            >
              Actualmente en empresa.com como desarrollador FrontEnd.
            </Typography>
          </Paper>
          <Paper
            sx={{
              margin: 4,
              padding: 4,
              borderRadius: 5,
            }}
            elevation={8}
          >
            <Typography
              sx={{
                fontFamily: "quicksand",
                fontWeight: "bold",
                fontSize: 22,
                marginBottom: 2,
              }}
              variant="h1"
            >
              2022 - FrontEnd developer
            </Typography>
            <Typography
              sx={{
                fontFamily: "quicksand",
                fontWeight: "ligher",
                fontSize: 20,
              }}
            >
               Actualmente en empresa.com como desarrollador FrontEnd.
            </Typography>
          </Paper>
        </Grid>

        <Grid sx={{ textAlign: "left" }} item xs={12} sm={6}>
          <Paper
            sx={{
              margin: 4,
              padding: 4,
              borderRadius: 5,
            }}
            elevation={8}
          >
            <Typography
              sx={{
                fontFamily: "quicksand",
                fontWeight: "bold",
                fontSize: 22,
                marginBottom: 2,
              }}
              variant="h1"
            >
              2022 - FrontEnd developer
            </Typography>
            <Typography
              sx={{
                fontFamily: "quicksand",
                fontWeight: "ligher",
                fontSize: 20,
              }}
            >
               Actualmente en empresa.com como desarrollador FrontEnd.
            </Typography>
          </Paper>
          <Paper
            sx={{
              margin: 4,
              padding: 4,
              borderRadius: 5,
            }}
            elevation={8}
          >
            <Typography
              sx={{
                fontFamily: "quicksand",
                fontWeight: "bold",
                fontSize: 22,
                marginBottom: 2,
              }}
              variant="h1"
            >
              2022 - FrontEnd developer
            </Typography>
            <Typography
              sx={{
                fontFamily: "quicksand",
                fontWeight: "ligher",
                fontSize: 20,
              }}
            >
               Actualmente en empresa.com como desarrollador FrontEnd.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
