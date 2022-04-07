import React from "react";
import { Typography, Container, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import gif from "./gif_website.gif";

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
        ABOUT US
      </Typography>
      <br></br>
      <Typography variant="subtitle1" component="h2" gutterBottom>
        CryptoPongz are a collection of 3,933 Platypii partying on the Solana
        Blockchain. Each platypii lives by the mantra:“One cup, everyone knows
        the rules.”A red solo cup is always present in one of their webbed
        hands. Although the platypii love to let loose —fulfillment of their
        personal journeys always comes first. In the end, no one platty is
        greater than another. Together we will rise.
      </Typography>
      <div className={classes.large}>
        <Button disabled variant="contained" className={classes.iconButton}>
          {"MINT: TBA"}
        </Button>
      </div>
    </Container>
  );
};
