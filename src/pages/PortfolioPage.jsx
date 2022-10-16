import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import GitHubIcon from "@mui/icons-material/GitHub";
import { Box, Button, Container, Grid, Paper, Stack, Typography } from "@mui/material";
import { projects } from "../database/projects";

export const PortfolioPage = () => {
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
        Portafolio
      </Typography>

      {projects.map((project) => (
        <Box key={project.id} sx={{ width: "100%" }}>
          <Paper
            sx={{
              margin: 4,
              padding: 4,
              borderRadius: 5,
            }}
            elevation={24}
          >
            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{

            }}>
              <Grid item md={6} xs={12}>
                <img 
                className="portfolio"
                src={project.image}
                alt={project.name}
                />
              </Grid>

              <Grid item md={6} xs={12}>
                <Typography sx={{
                  fontFamily: "quicksand",
                  fontSize: 28,
                  fontWeight: "bold",
                  marginBottom: 2,
                }} variant="h1">
                  {project.name}
                </Typography>
                <Typography sx={{
                  fontFamily: "quicksand",
                  fontSize: 16,
                  fontWeight: "bold",
                  marginBottom: 2,
                }}>
                  {project.description}
                </Typography>
                <Typography sx={{
                  fontFamily: "quicksand",
                  fontSize: 18,
                  fontWeight: "bold",
                  color: "secondary.main",
                  marginBottom: 6,
                }}>
                  {project.stack}
                </Typography>
                <Stack spacing={2} direction="row">
                  <Button sx={{
                   borderRadius: 10,
                   backgroundColor: "secondary.main",
                  }} size="large" variant="contained" startIcon={<ArrowOutwardIcon />} href={project.url_preview} target="_blank">
                  Vista previa
                  </Button>
                  <Button sx={{
                   borderRadius: 10,
                   backgroundColor: "primary.main","&:hover": {
                     backgroundColor: "#093550",
                     color: "white",
                   },
                  }} size="large" variant="contained" startIcon={<GitHubIcon />} href={project.url_github} target="_blank">
                  GitHub
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      ))}
    </Container>
  );
};
