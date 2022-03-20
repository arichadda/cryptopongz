import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Link, Tooltip, Zoom, Container } from "@material-ui/core";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";

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
  linkText: {
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
}));

export const WorkExperience = () => {
  const classes = useStyles();

  return (
    <Container component="main" className={`${classes.main}`} maxWidth="lg">
      <Typography variant="h4" component="h2" gutterBottom>
        ROADMAP
      </Typography>
      <Timeline align="alternate">
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="primary">Phase 1</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary"></TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" component="h3">
              THE CRYPTOPONG NEWSLETTER
            </Typography>
            <Typography variant="body1" component="h3">
              larroes catch medloes
            </Typography>
            <Typography variant="body2">
              Subjugate and conquer. 'Cause that's who we are. That's what we
              are. Capitalism harnesses that better than any other economic
              model on Earth. Everything we have is because of capitalism.
              ‘Cause someone had an incentive to get up off his ass, to
              out-invent, to out-earn, yes, and to subjugate others less
              capable, less intelligent, less ambitious, less lucky—to make
              those capitalistic dreams come true.
            </Typography>
            <Tooltip
              title={"CRYPTOPONG Substack"}
              placement="right"
              TransitionComponent={Zoom}
            >
              <Link
                color="inherit"
                underline="always"
                href="https://cryptopong.substack.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.linkText}
              >
                <Typography variant="subtitle2">
                  <div>Click here to read the newsletter on Substack.</div>
                </Typography>
              </Link>
            </Tooltip>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="primary">Phase 2</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" component="h3">
              THE CRYPTOPONGZ NFT COLLECTION
            </Typography>
            <Typography variant="body1" component="h3">
              larroes catch medloes
            </Typography>
            <Typography variant="body2">
              Subjugate and conquer. 'Cause that's who we are. That's what we
              are. Capitalism harnesses that better than any other economic
              model on Earth. Everything we have is because of capitalism.
              ‘Cause someone had an incentive to get up off his ass, to
              out-invent, to out-earn, yes, and to subjugate others less
              capable, less intelligent, less ambitious, less lucky—to make
              those capitalistic dreams come true.
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="primary">Phase 3</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" component="h3">
              MUTANT CRYPTOPONGZ NFT AIRDROP
            </Typography>
            <Typography variant="body1" component="h3">
              larroes catch medloes
            </Typography>
            <Typography variant="body2">
              Subjugate and conquer. 'Cause that's who we are. That's what we
              are. Capitalism harnesses that better than any other economic
              model on Earth. Everything we have is because of capitalism.
              ‘Cause someone had an incentive to get up off his ass, to
              out-invent, to out-earn, yes, and to subjugate others less
              capable, less intelligent, less ambitious, less lucky—to make
              those capitalistic dreams come true.
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="primary">Phase 4</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" component="h3">
              CRYPTOPONG DAO
            </Typography>
            <Typography variant="body1" component="h3">
              larroes catch medloes
            </Typography>
            <Typography variant="body2">
              Subjugate and conquer. 'Cause that's who we are. That's what we
              are. Capitalism harnesses that better than any other economic
              model on Earth. Everything we have is because of capitalism.
              ‘Cause someone had an incentive to get up off his ass, to
              out-invent, to out-earn, yes, and to subjugate others less
              capable, less intelligent, less ambitious, less lucky—to make
              those capitalistic dreams come true.
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Container>
  );
};
