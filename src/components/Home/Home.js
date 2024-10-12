import React from "react";
import { makeStyles } from "@mui/styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { Typography, Paper, Grid, IconButton } from "@mui/material";
const useStyles = makeStyles((theme) => ({
  paper: {
    padding: 100,
    marginBottom: 20,
  },
  
   
}));
const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <Paper elevation={2} className={classes.paper}>
        <Typography variant="h3" component="h5" align="center">
          Hi! I am Vamshi
        </Typography>
        <Typography variant="h5" gutterBottom align="center">
          Front-End Developer
        </Typography>
        <Grid container justifyContent="center">
          <Grid item>
            <IconButton
              href="https://github.com/Vamshi1272655"
              target="_blank"
              color="secondary"
            >
              <GitHubIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              href="https://www.linkedin.com/in/vamshi-s-9a93631b3/"
              target="_blank"
              color="primary"
            >
              <LinkedInIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Typography variant="body1" align="center">
          Download Resume
          <IconButton href="https://vamshi1272655.github.io/portfolio/vamshiResume.pdf" target="_blank">
            <FileDownloadIcon />
          </IconButton>
        </Typography>
      </Paper>
    </div>
  );
};

export default Home;
