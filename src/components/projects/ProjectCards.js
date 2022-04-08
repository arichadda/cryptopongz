import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Hidden } from "@material-ui/core";

import plattyOne from "./plattys/platty1.png";
import plattyTwo from "./plattys/platty2.png";
import plattyThree from "./plattys/platty3.png";
import plattyFour from "./plattys/platty4.png";
import plattyFive from "./plattys/platty5.png";
import plattySix from "./plattys/platty6.png";

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex-start",
    marginTop: "80px",
    marginBottom: "auto",
    direction: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  large: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  platty: {
    marginBottom: "20px",
    marginRight: "20px",
    marginLeft: "20px",
    width: "200px",
  },
}));

export const ProjectCards = () => {
  const classes = useStyles();

  return (
    <Container component="main" className={classes.main} maxWidth="lg">
      <div>
        <Typography variant="h4" component="h2" gutterBottom>
          CRYPTOPONGZ RARITY
        </Typography>
        <br></br>
        <Hidden smDown>
          <div>
            <div className={classes.large}>
              <div className={classes.platty}>
                <div height="200px" width="200px">
                  <img
                    src={plattyOne}
                    alt="Breakfast"
                    height="200px"
                    width="200px"
                  />
                </div>
                <Typography variant="h5">TIER 1</Typography>
                <Typography>Wildcard</Typography>
                <Typography>Mint Count: 33</Typography>
              </div>
              <div className={classes.platty}>
                <div height="200px" width="200px">
                  <img
                    src={plattyTwo}
                    alt="Breakfast"
                    height="200px"
                    width="200px"
                  />
                </div>
                <Typography variant="h5">TIER 2</Typography>
                <Typography>Black + Gold</Typography>
                <Typography>Mint Count: 200</Typography>
              </div>
              <div className={classes.platty}>
                <div height="200px" width="200px">
                  <img
                    src={plattyThree}
                    alt="Breakfast"
                    height="200px"
                    width="200px"
                  />
                </div>
                <Typography variant="h5">TIER 3</Typography>
                <Typography>Creme + Crimson</Typography>
                <Typography>Mint Count: 450</Typography>
              </div>
            </div>
            <div className={classes.large}>
              <div className={classes.platty}>
                <div height="200px" width="200px">
                  <img
                    src={plattyFour}
                    alt="Breakfast"
                    height="200px"
                    width="200px"
                  />
                </div>
                <Typography variant="h5">TIER 4</Typography>
                <Typography>Purple + Green</Typography>
                <Typography>Mint Count: 750</Typography>
              </div>
              <div className={classes.platty}>
                <div height="200px" width="200px">
                  <img
                    src={plattyFive}
                    alt="Breakfast"
                    height="200px"
                    width="200px"
                  />
                </div>
                <Typography variant="h5">TIER 5</Typography>
                <Typography>Blue + Orange</Typography>
                <Typography>Mint Count: 1000</Typography>
              </div>
              <div className={classes.platty}>
                <div height="200px" width="200px">
                  <img
                    src={plattySix}
                    alt="Breakfast"
                    height="200px"
                    width="200px"
                  />
                </div>
                <Typography variant="h5">TIER 6</Typography>
                <Typography>Pink + White</Typography>
                <Typography>Mint Count: 1500</Typography>
              </div>
            </div>
          </div>
        </Hidden>
        <Hidden mdUp>
          <div className={classes.large}>
            <div className={classes.platty}>
              <div height="200px" width="200px">
                <img
                  src={plattyOne}
                  alt="Breakfast"
                  height="200px"
                  width="200px"
                />
              </div>
              <Typography variant="h5">TIER 1</Typography>
              <Typography>Wildcard</Typography>
              <Typography>Mint Count: 33</Typography>
            </div>
          </div>
          <div className={classes.large}>
            <div className={classes.platty}>
              <div height="200px" width="200px">
                <img
                  src={plattyTwo}
                  alt="Breakfast"
                  height="200px"
                  width="200px"
                />
              </div>
              <Typography variant="h5">TIER 2</Typography>
              <Typography>Black + Gold</Typography>
              <Typography>Mint Count: 200</Typography>
            </div>
          </div>
          <div className={classes.large}>
            <div className={classes.platty}>
              <div height="200px" width="200px">
                <img
                  src={plattyThree}
                  alt="Breakfast"
                  height="200px"
                  width="200px"
                />
              </div>
              <Typography variant="h5">TIER 3</Typography>
              <Typography>Creme + Crimson</Typography>
              <Typography>Mint Count: 450</Typography>
            </div>
          </div>
          <div className={classes.large}>
            <div className={classes.platty}>
              <div height="200px" width="200px">
                <img
                  src={plattyFour}
                  alt="Breakfast"
                  height="200px"
                  width="200px"
                />
              </div>
              <Typography variant="h5">TIER 4</Typography>
              <Typography>Purple + Green</Typography>
              <Typography>Mint Count: 750</Typography>
            </div>
          </div>
          <div className={classes.large}>
            <div className={classes.platty}>
              <div height="200px" width="200px">
                <img
                  src={plattyFive}
                  alt="Breakfast"
                  height="200px"
                  width="200px"
                />
              </div>
              <Typography variant="h5">TIER 5</Typography>
              <Typography>Blue + Orange</Typography>
              <Typography>Mint Count: 1000</Typography>
            </div>
          </div>
          <div className={classes.large}>
            <div className={classes.platty}>
              <div height="200px" width="200px">
                <img
                  src={plattySix}
                  alt="Breakfast"
                  height="200px"
                  width="200px"
                />
              </div>
              <Typography variant="h5">TIER 6</Typography>
              <Typography>Pink + White</Typography>
              <Typography>Mint Count: 1500</Typography>
            </div>
          </div>
        </Hidden>
      </div>
    </Container>
  );
};
