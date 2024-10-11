import React from "react";
import HighTech from "../../images/Aboutme.png";
 
import { Container, Typography, Grid, Paper } from "@mui/material";
import "./styles.css";

const About = () => {
   
  return (
    <div>
        <Container className="container" id="about">
            <div className="border"></div>
            <Typography variant="h3" color="primary" component="h6" gutterBottom>
            About
            </Typography>
            <Grid container justify="center">
                <Grid item xs={12} md={6}>
                    <img src={HighTech} alt="about-img" className="img"/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper className="paper">
                    <Typography variant="h6">About Me</Typography>
                    <Typography variant="body1" align="justify">
                        I am Vamshi S, a graduate in Information Science and Engineering from 
                        East West Institute of Technology, Bengaluru. I possess a strong technical 
                        skill set in Core Java, JavaScript, Python, SQL, HTML, CSS, React.js, Tailwind CSS, 
                        and Redux, with proficiency in Git for version control.
                    </Typography>
                    </Paper>
                </Grid>
            </Grid>
      </Container>
    </div>
    
  );
};

export default About;

// My professional experience includes employed at Conexus Solutions Inc., 
// where I focus on creating reusable custom components, integrating data into applications, 
// and enhancing data visualization projects.