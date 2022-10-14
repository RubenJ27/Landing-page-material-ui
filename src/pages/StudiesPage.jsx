import { Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";

export const StudiesPage = () => {
  return (
    <Container
      sx={{
        flexGlow: 1,
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
        Estudios
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
              Desarrollador FrontEnd con React JS
            </Typography>
            <Typography
              sx={{
                fontFamily: "quicksand",
                fontWeight: "ligher",
                fontSize: 20,
              }}
            >
              Carrera universitaria de ingenieria de sistemas en la universidad
              nacional. 2012 - 2017
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
              Desarrollador FrontEnd con React JS
            </Typography>
            <Typography
              sx={{
                fontFamily: "quicksand",
                fontWeight: "ligher",
                fontSize: 20,
              }}
            >
              Carrera universitaria de ingenieria de sistemas en la universidad
              nacional. 2012 - 2017
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
              Desarrollador FrontEnd con React JS
            </Typography>
            <Typography
              sx={{
                fontFamily: "quicksand",
                fontWeight: "ligher",
                fontSize: 20,
              }}
            >
              Carrera universitaria de ingenieria de sistemas en la universidad
              nacional. 2012 - 2017
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
              Desarrollador FrontEnd con React JS
            </Typography>
            <Typography
              sx={{
                fontFamily: "quicksand",
                fontWeight: "ligher",
                fontSize: 20,
              }}
            >
              Carrera universitaria de ingenieria de sistemas en la universidad
              nacional. 2012 - 2017
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
              Desarrollador FrontEnd con React JS
            </Typography>
            <Typography
              sx={{
                fontFamily: "quicksand",
                fontWeight: "ligher",
                fontSize: 20,
              }}
            >
              Carrera universitaria de ingenieria de sistemas en la universidad
              nacional. 2012 - 2017
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
              Desarrollador FrontEnd con React JS
            </Typography>
            <Typography
              sx={{
                fontFamily: "quicksand",
                fontWeight: "ligher",
                fontSize: 20,
              }}
            >
              Carrera universitaria de ingenieria de sistemas en la universidad
              nacional. 2012 - 2017
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
