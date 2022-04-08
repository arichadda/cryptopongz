import React from "react";
import {
  Typography,
  Container,
  Link,
  Tooltip,
  Zoom,
  Hidden,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ari from "./fplattys/ari.png";
import pat from "./fplattys/pat.png";
import { Twitter } from "@material-ui/icons";

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
  gif: {
    marginTop: "20px",
    marginBottom: "20px",
    width: "360px",
    height: "360px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "200px",
    marginRight: theme.spacing(4),
    marginLeft: theme.spacing(4),
  },
  big: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "60px",
  },
  link: {
    marginLeft: "10px",
    marginRight: "10px",
    color: "inherit",
  },
  mobile: {
    marginRight: theme.spacing(2),
  },
  centered: {
    display: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export const Headshots = () => {
  const classes = useStyles();

  return (
    <Container component="main" className={classes.main} maxWidth="lg">
      <div>
        <Typography variant="h4" component="h2" gutterBottom>
          WHO WE ARE
        </Typography>
        <br></br>
        <Hidden smDown>
          4t
          <div className={classes.large}>
            <Typography
              variant="h6"
              component="h2"
              gutterBottom
              align="justify"
            >
              We founded CryptoPong to bring together individuals who love
              creating just as much as we do. Late-night pong games and early
              morning binge drinking coffee sessions led us to where we are
              today. Our company’s mantra of “One Cup, Everyone Knows the Rules”
              emphasizes the paradoxical nature of our members’ party-centric
              lifestyles. Although we love to let loose every once in a while,
              fulfillment of our personal/professional journeys always comes
              first. To this end, we seek to build a community of like-minded,
              disuptive individuals who can bounce start-up ideas, investing
              strategies, NFT opportunities, etc. off of each other to help each
              other achieve monetary and personal success.
            </Typography>
            <br></br>
          </div>
          <br></br>
          <br></br>
          <Typography variant="h6" component="h2" gutterBottom align={"left"}>
            Together we will rise. Welcome to the CryptoPong family.
          </Typography>
          <br></br>
          <div className={classes.big}>
            <div className={classes.large}>
              <div direction="column" width="360px">
                <img
                  className={classes.gif}
                  src={ari}
                  alt="Ari"
                  height="360px"
                  width="360px"
                ></img>
                <div className={classes.large}>
                  <Typography variant="h4" component="h2">
                    Ari
                  </Typography>
                </div>
                <br></br>
                <div className={classes.large}>
                  <Typography variant="h6" component="h2">
                    Founder | Builder
                  </Typography>
                </div>
                <div className={classes.large}>
                  <Link
                    className={classes.link}
                    href={"https://twitter.com/arichadda"}
                    key={"twitter"}
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="none"
                    color="inherit"
                  >
                    <Tooltip
                      title={"Ari's Twitter"}
                      placement="left"
                      TransitionComponent={Zoom}
                    >
                      <Twitter className={classes.icon} />
                    </Tooltip>
                  </Link>
                  <Link
                    className={classes.link}
                    href={"https://discordapp.com/users/914356380679430196"}
                    key={"discord"}
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="none"
                    color="inherit"
                  >
                    <Tooltip
                      title={"Ari's Discord"}
                      placement="right"
                      TransitionComponent={Zoom}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
                      </svg>
                    </Tooltip>
                  </Link>
                </div>
              </div>
              <div direction="column" width="360px">
                <img
                  className={classes.gif}
                  src={pat}
                  alt="Pat"
                  height="360px"
                  width="360px"
                ></img>
                <div className={classes.large}>
                  <Typography variant="h4" component="h2">
                    Pat
                  </Typography>
                </div>
                <br></br>
                <div className={classes.large}>
                  <Typography variant="h6" component="h2">
                    Founder | Creator
                  </Typography>
                </div>
                <div className={classes.large}>
                  <Link
                    className={classes.link}
                    href={"https://twitter.com/patrickkmurphyy"}
                    key={"twitter"}
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="none"
                    color="inherit"
                  >
                    <Tooltip
                      title={"Pat's Twitter"}
                      placement="left"
                      TransitionComponent={Zoom}
                    >
                      <Twitter className={classes.icon} />
                    </Tooltip>
                  </Link>
                  <Link
                    className={classes.link}
                    href={"https://discordapp.com/users/913153735344152696"}
                    key={"discord"}
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="none"
                    color="inherit"
                  >
                    <Tooltip
                      title={"Pat's Discord"}
                      placement="right"
                      TransitionComponent={Zoom}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
                      </svg>
                    </Tooltip>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Hidden>
        <Hidden mdUp>
            <div className={classes.large}>
              <Typography
                variant="h6"
                component="h2"
                gutterBottom
                align="justify"
              >
                We founded CryptoPong to bring together individuals who love
                creating just as much as we do. Late-night pong games and early
                morning binge drinking coffee sessions led us to where we are
                today. Our company’s mantra of “One Cup, Everyone Knows the
                Rules” emphasizes the paradoxical nature of our members’
                party-centric lifestyles. Although we love to let loose every
                once in a while, fulfillment of our personal/professional
                journeys always comes first. To this end, we seek to build a
                community of like-minded, disuptive individuals who can bounce
                start-up ideas, investing strategies, NFT opportunities, etc.
                off of each other to help each other achieve monetary and
                personal success.
              </Typography>
              <br></br>
            </div>
            <br></br>
            <br></br>
            <Typography variant="h6" component="h2" gutterBottom align={"left"}>
              Together we will rise. Welcome to the CryptoPong family.
            </Typography>
            <br></br>
            <div className={classes.big}>
              <div className={classes.mobile}>
                <div
                  direction="column"
                  className={classes.centered}
                >
                  <img
                    className={classes.gif}
                    src={ari}
                    alt="Ari"
                    height="360px"
                    width="360px"
                  ></img>
                  <div className={classes.large}>
                    <Typography variant="h4" component="h2">
                      Ari
                    </Typography>
                  </div>
                  <br></br>
                  <div className={classes.large}>
                    <Typography variant="h6" component="h2" >
                      Founder | Builder
                    </Typography>
                  </div>
                  <div className={classes.large}>
                    <Link
                      className={classes.link}
                      href={"https://twitter.com/arichadda"}
                      key={"twitter"}
                      target="_blank"
                      rel="noopener noreferrer"
                      underline="none"
                      color="inherit"
                    >
                      <Tooltip
                        title={"Ari's Twitter"}
                        placement="left"
                        TransitionComponent={Zoom}
                      >
                        <Twitter className={classes.icon} />
                      </Tooltip>
                    </Link>
                    <Link
                      className={classes.link}
                      href={"https://discordapp.com/users/914356380679430196"}
                      key={"discord"}
                      target="_blank"
                      rel="noopener noreferrer"
                      underline="none"
                      color="inherit"
                    >
                      <Tooltip
                        title={"Ari's Discord"}
                        placement="right"
                        TransitionComponent={Zoom}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
                        </svg>
                      </Tooltip>
                    </Link>
                  </div>
                </div>
                <div
                  direction="column"
                  width="360px"
                  className={classes.centered}
                >
                  <img
                    className={classes.gif}
                    src={pat}
                    alt="Pat"
                    height="360px"
                    width="360px"
                  ></img>
                  <div className={classes.large}>
                    <Typography variant="h4" component="h2">
                      Pat
                    </Typography>
                  </div>
                  <br></br>
                  <div className={classes.large}>
                    <Typography variant="h6" component="h2">
                      Founder | Creator
                    </Typography>
                  </div>
                  <div className={classes.large}>
                    <Link
                      className={classes.link}
                      href={"https://twitter.com/patrickkmurphyy"}
                      key={"twitter"}
                      target="_blank"
                      rel="noopener noreferrer"
                      underline="none"
                      color="inherit"
                    >
                      <Tooltip
                        title={"Pat's Twitter"}
                        placement="left"
                        TransitionComponent={Zoom}
                      >
                        <Twitter className={classes.icon} />
                      </Tooltip>
                    </Link>
                    <Link
                      className={classes.link}
                      href={"https://discordapp.com/users/913153735344152696"}
                      key={"discord"}
                      target="_blank"
                      rel="noopener noreferrer"
                      underline="none"
                      color="inherit"
                    >
                      <Tooltip
                        title={"Pat's Discord"}
                        placement="right"
                        TransitionComponent={Zoom}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
                        </svg>
                      </Tooltip>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
        </Hidden>
      </div>
    </Container>
  );
};
