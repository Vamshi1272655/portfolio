import React from "react";
import { Typography, Container, Grid } from "@mui/material"; // Updated to MUI v5
import { makeStyles } from '@mui/styles'; // Using makeStyles from MUI
import { HiOutlineDatabase } from "react-icons/hi"; // React Icons
import { FaReact } from "react-icons/fa"; // React Icons
import { RiToolsFill } from "react-icons/ri"; // React Icons

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 60
  },
  border: {
    borderTop: "8px dotted #333",
    width: "100px",
    marginBottom: 20
  },
  grid: {
    marginBottom: 40,
    marginTop: 20
  },
  iconContainer: {
    fontSize: "3rem",
    color: "#f50057" // You can style the icons here
  }
}));

const experience = [
  {
    title: "Front-End",
    details: "Experience with Javascript ,React ,Tailwind CSS ,HTML ,CSS ,Typescript ,Redux",
    icon: <FaReact />
  },
  {
    title: "Back-End",
    details: "Experience with Node JS & Mysql",
    icon: <HiOutlineDatabase />
  },
  {
    title: "UI/UX",
    details: "Experience with tools like Figma",
    icon: <RiToolsFill />
  }
];

const Experience = () => {
  const classes = useStyles();
  
  return (
    <Container className={classes.container} id="experience">
      <div className={classes.border}></div>
      <Typography variant="h3" color="primary" component="h6" gutterBottom>
        Technology
      </Typography>
      <Typography variant="body1" color="textSecondary" align="justify">
        I have worked with a range of technologies in the web development world!
        From Front-end to Back-end and UI design.
      </Typography>
      <Grid container spacing={4} className={classes.grid}>
        {experience.map((exp) => (
          <Grid item xs={12} sm={6} md={4} key={exp.title}>
            <div className={classes.iconContainer}>
              {exp.icon}
            </div>
            <Typography variant="h5">{exp.title}</Typography>
            <Typography variant="body2" color="textSecondary">
              {exp.details}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Experience;
