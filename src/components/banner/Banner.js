import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import banner from './banner_23.png'

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex-start",
    marginTop: "60px",
    marginBottom: "auto",
    direction: "column",
    justifyContent: "center",
    alignItems: "center",
    "@media (max-width: 768px)": {
      marginLeft: theme.spacing(4),
    },
  },
  large: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  gif: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: '100%',
    height: '100%'
  },
}));

export const Banner = () => {
  const classes = useStyles();

  return (
    <Container component="main" className={classes.main} maxWidth="lg">
      <div className={classes.large}>
        <img
          className={classes.gif}
          src={banner}
          alt="Platty Banner"
        ></img>
      </div>
      
    </Container>
  );
};
