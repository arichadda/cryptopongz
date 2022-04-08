import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Link,
  Tooltip,
  Zoom,
  Container,
  Hidden,
} from "@material-ui/core";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex-start",
    marginTop: "60px",
    marginBottom: "auto",
    direction: "column",
    justifyContent: "center",
    alignItems: "center",
    width: '100%'
  },
  linkText: {
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  text: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  }
}));

export const WorkExperience = () => {
  const classes = useStyles();

  return (
    <Container component="main" className={classes.main} maxWidth="lg">
      <Typography variant="h4" component="h2" gutterBottom>
        ROADMAP
      </Typography>
      <Hidden smDown>
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
              <Typography variant="body2" align="justify">
                As the platypii graze the Australian Alps—hunting for fish at
                night and seeking shelter during the day, they become restless.
                A rumor spreads of the growing web3 sector that is spreading
                like wildfire across their homeland. Two of the platypiis’
                forefront leaders, Pat and Ari, began scanning the interwebs for
                the most straightforward, unbiased information that the world
                has to offer to educate their peers about the booming sector. To
                do so, they form CRYPTOPONG: the newsletter—a weekly write-up
                released every Sunday night to help their peers see crypto for
                what it really is: the future of platykind.
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
              <Typography variant="body2" align="justify">
                The platypii are worn out after weeks of learning everything
                there is about crypto and wish to blow off some steam. In order
                to do so, Pat and Ari host a huge party in Platypus Village.
                Everyone is welcome. One rule only: every attendee must bring a
                single red solo cup. The CryptoPongz are born: 3,933 unique NFTs
                are released on the Solana blockchain. Mint Date TBA.
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
              <Typography variant="body2" align="justify">
                As the platypii become smarter and party harder they grow as a
                species—they begin to mutate. Thanks to their timely crypto
                investments and membership in the close- knit CRYPTOPONG
                community, the platypii have more $SOL in the bank to spend on
                additional hats, eyewear, sunglasses, and are even able to
                transform their base color to better reflect their enhanced
                state—electric. An additional 3,933 mutated platypii are
                released on the Solana blockchain. Initial Buyers that are
                current holders of the Genesis CryptoPongz collection will be
                airdropped a mutant CryptoPongz for free. Current holders of the
                Genesis CryptoPongz who were not part of the initial mint have
                an opportunity to get a mutated CryptoPongz before public sale
                through a WL (whitelist) raffle.
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
              <Typography variant="body2" align="justify">
                Formation of the CRYPTOPONG DAO (decentralized autonomous
                organization). Holders of either the CryptoPongz and Mutant
                CryptoPongz collections are each given one token, $PONG, which
                serves as a vote to the CRYPTOPONG DAO. Through the
                implementation of the DAO, members will be able to vote on the
                future of CRYPTOPONG. Whether its subjects for the newsletter,
                deciding on merch, future NFT drops, or any DAO member
                suggestions, the power will be in the hands of the platypii. No
                platypii is greater than another. Together we will rise.
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Hidden>
      <Hidden mdUp>
      <br></br>
      <br></br>
              <Typography color="primary">Phase 1</Typography>
              <br></br>
              <Typography variant="h6" component="h3" className={classes.text}>
                THE CRYPTOPONG NEWSLETTER
              </Typography>
              <Typography variant="body2" align="justify" className={classes.text}>
                As the platypii graze the Australian Alps—hunting for fish at
                night and seeking shelter during the day, they become restless.
                A rumor spreads of the growing web3 sector that is spreading
                like wildfire across their homeland. Two of the platypiis’
                forefront leaders, Pat and Ari, began scanning the interwebs for
                the most straightforward, unbiased information that the world
                has to offer to educate their peers about the booming sector. To
                do so, they form CRYPTOPONG: the newsletter—a weekly write-up
                released every Sunday night to help their peers see crypto for
                what it really is: the future of platykind.
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
                  <Typography variant="subtitle2" className={classes.text}>
                    <div>Click here to read the newsletter on Substack.</div>
                  </Typography>
                </Link>
              </Tooltip>
              <br></br>
              <br></br>
              <Typography color="primary">Phase 2</Typography>
              <br></br>
              <Typography variant="h6" component="h3" className={classes.text}>
                THE CRYPTOPONGZ NFT COLLECTION
              </Typography>
              <Typography variant="body2" align="justify" className={classes.text}>
                The platypii are worn out after weeks of learning everything
                there is about crypto and wish to blow off some steam. In order
                to do so, Pat and Ari host a huge party in Platypus Village.
                Everyone is welcome. One rule only: every attendee must bring a
                single red solo cup. The CryptoPongz are born: 3,933 unique NFTs
                are released on the Solana blockchain. Mint Date TBA.
              </Typography>
              <br></br>
              <br></br>
              <Typography color="primary">Phase 3</Typography>
              <br></br>
              <Typography variant="h6" component="h3" className={classes.text}>
                MUTANT CRYPTOPONGZ NFT AIRDROP
              </Typography>
              <Typography variant="body2" align="justify" className={classes.text}>
                As the platypii become smarter and party harder they grow as a
                species—they begin to mutate. Thanks to their timely crypto
                investments and membership in the close- knit CRYPTOPONG
                community, the platypii have more $SOL in the bank to spend on
                additional hats, eyewear, sunglasses, and are even able to
                transform their base color to better reflect their enhanced
                state—electric. An additional 3,933 mutated platypii are
                released on the Solana blockchain. Initial Buyers that are
                current holders of the Genesis CryptoPongz collection will be
                airdropped a mutant CryptoPongz for free. Current holders of the
                Genesis CryptoPongz who were not part of the initial mint have
                an opportunity to get a mutated CryptoPongz before public sale
                through a WL (whitelist) raffle.
              </Typography>
              <br></br>
              <br></br>
              <Typography color="primary">Phase 4</Typography>
              <br></br>
              <Typography variant="h6" component="h3" className={classes.text}>
                CRYPTOPONG DAO
              </Typography>
              <Typography variant="body2" align="justify" className={classes.text}>
                Formation of the CRYPTOPONG DAO (decentralized autonomous
                organization). Holders of either the CryptoPongz and Mutant
                CryptoPongz collections are each given one token, $PONG, which
                serves as a vote to the CRYPTOPONG DAO. Through the
                implementation of the DAO, members will be able to vote on the
                future of CRYPTOPONG. Whether its subjects for the newsletter,
                deciding on merch, future NFT drops, or any DAO member
                suggestions, the power will be in the hands of the platypii. No
                platypii is greater than another. Together we will rise.
              </Typography>
      </Hidden>
    </Container>
  );
};
