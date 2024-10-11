import React from "react";
import { makeStyles } from '@mui/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Wave from "react-wavify";
import { Grid, IconButton, Typography } from "@mui/material"; // Changed to Grid

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: 100,
    padding:  0,
    backgroundColor: "#F9F9F9"
  },
  text: {
    marginTop: 10
  },
  img: {
    height: "80%",
    width: 180,
    cursor: "pointer"
  }
}));

function Copyright() {
  const classes = useStyles();
  return (
    <Typography variant="h6" color="textSecondary" className={classes.text}>
      {" © "}
      {new Date().getFullYear()}
      {"| Vamsh.S"}
    </Typography>
  );
}

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.paper}>
      <Grid container spacing={4} justifyContent="space-evenly">
        <Grid item>
          <div className="pname">Vamsh.S</div>
        </Grid>
        <Grid item>
          <Copyright />
        </Grid>
        <Grid item>
          <Grid container spacing={2} justifyContent="space-between">
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
        </Grid>
      </Grid>
      <Wave
        fill="#E3D4C5"
        paused={false}
        options={{
          height: 20,
          amplitude: 20,
          speed: 0.15,
          points: 4
        }}
      />
    </div>
  );
};

export default Footer;
