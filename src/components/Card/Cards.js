import React from "react";
import cardData from "./cardData";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
  Container
} from "@mui/material";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    padding: 20,
    margin: "10px auto"
  },
  media: {
    height: 350
  },
  title: {
    marginTop: 8
  },
  border: {
    borderTop: "8px dotted #333",
    width: "100px",
    marginBottom: 20
  }
}));

const Cards = () => {
  const classes = useStyles();

  return (
    <Container id="projects">
      <div className={classes.border}></div>
      <Typography variant="h3" color="primary" component="h6" gutterBottom>
        Projects
      </Typography>
      <Typography variant="body1" color="textSecondary">
        Some of my recent projects that I build for learning purpose.
      </Typography>
      <Grid container spacing={1} justifyContent="space-evenly">
        {cardData.map((data) => (
          <Grid item key={data.title} xs={12} md={6}>
            <Card className={classes.root}>
              <CardMedia
                className={classes.media}
                image={data.img}
                title={data.title}
              />
              <CardContent>
                <Grid container spacing={2} justifyContent="space-evenly">
                  <Grid item xs={12} md={6}>
                    <Typography
                      variant="h5"
                      component="h2"
                      className={classes.title}
                    >
                      {data.title}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <CardActions>
                      <Button
                        variant="contained"
                        size="small"
                        color="primary"
                        href={data.url}
                        target="_blank"
                      >
                        Code
                      </Button>
                      <Button
                        size="small"
                        color="primary"
                        variant="outlined"
                      >
                        Preview
                      </Button>
                    </CardActions>
                  </Grid>
                </Grid>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  gutterBottom
                >
                  {data.description}
                </Typography>
                <Typography variant="body2" color="secondary" component="p">
                  <span className={classes.icon}>{data.icon}</span>
                  {data.stack}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Cards;
