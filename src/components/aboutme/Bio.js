import React from "react";
import { Typography, Container, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import gif from "./larger_gif.gif";

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
    borderRadius: "10px",
  },
  iconButton: {
    maxWidth: "120px",
    maxHeight: "60px",
    minWidth: "120px",
    minHeight: "60px",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: theme.palette.primary.main,
  },
}));

export const Bio = () => {
  const classes = useStyles();

  return (
    <Container component="main" className={classes.main} maxWidth="lg">
      <div>
        <Typography variant="h4" component="h2" gutterBottom>
          WELCOME TO PALTYPUS VILLAGE
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          MINT: TBA
        </Typography>
        <br></br>
      </div>
      <div className={classes.large}>
        <img
          className={classes.gif}
          src={gif}
          alt="Platty GIF"
          height="400px"
          width="400px"
        ></img>
      </div>
      <br></br>
      <br></br>
      <Typography component="h2" gutterBottom>
        larroes catch medloes
      </Typography>
      <br></br>
      <Typography variant="subtitle1" component="h2" gutterBottom>
        Subjugate and conquer. 'Cause that's who we are. That's what we are.
        Capitalism harnesses that better than any other economic model on Earth.
        Everything we have is because of capitalism. ‘Cause someone had an
        incentive to get up off his ass, to out-invent, to out-earn, yes, and to
        subjugate others less capable, less intelligent, less ambitious, less
        lucky—to make those capitalistic dreams come true.
      </Typography>
      <div className={classes.large}>
        <Button disabled variant="contained" className={classes.iconButton}>
          {"MINT: TBA"}
        </Button>
      </div>
    </Container>
  );
};
