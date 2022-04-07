import React from "react";
import {
  Typography,
  Container,
  FormGroup,
  TextField,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "react-material-ui-carousel";

import nlone from "./market_movers/nl1.png";
import nltwo from "./market_movers/nl2.png";
import nlthree from "./market_movers/nl3.png";
import nlfour from "./market_movers/nl4.png";
import nlfive from "./market_movers/nl5.png";
import nlsix from "./market_movers/nl6.png";
import nlseven from "./market_movers/nl7.png";
import nleight from "./market_movers/nl8.png";
import nlnine from "./market_movers/nl9.png";
import nlten from "./market_movers/nl10.png";
import nleleven from "./market_movers/nl11.png";
import nltwelve from "./market_movers/nl12.png";


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
  box: {
    height: "800px",
    width: "400px",
  },
  rows: {
    direction: "row",
    height: "800px",
    width: "400px",
    marginRight: "200px",
  },
  right: {
    display: "flex",
    direction: "row",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export const NewsCards = () => {
  const classes = useStyles();

  function Example(props) {
    var items = [
      {
        img: nlone,
        name: "Crypto Markets Under Attack: Coins Rally but Face Difficult Week Ahead",
        link: "https://cryptopong.substack.com/p/crypto-markets-under-attack-coins?s=r",
      },
      {
        img: nltwo,
        name: "Bitcoin Nears 30K as Wall Street Anticipates Critical Fed Decisions",
        link: "https://cryptopong.substack.com/p/bitcoin-nears-30k-as-wall-street?s=r",
      },
      {
        img: nlthree,
        name: "Crypto’s Attack on the U.S. Dollar",
        link: "https://cryptopong.substack.com/p/cryptos-attack-on-the-us-dollar?s=r",
      },
      {
        img: nlfour,
        name: "Money Laundering and Fraud: The Dark Side of NFTs",
        link: "https://cryptopong.substack.com/p/money-laundering-and-fraud-the-dark?s=r",
      },
      {
        img: nlfive,
        name: "Super Bowl LVI: “The Crypto Bowl”",
        link: "https://cryptopong.substack.com/p/super-bowl-lvi-the-crypto-bowl?s=r",
      },
      {
        img: nlsix,
        name: "The FBI, Crypto Exchanges, and Lambo NFTs",
        link: "https://cryptopong.substack.com/p/the-fbi-crypto-exchanges-and-lambo?s=r",
      },
      {
        img: nlseven,
        name: "Crypto Rallies for War Effort and Public Good",
        link: "https://cryptopong.substack.com/p/crypto-rallies-for-war-effort-and?s=r",
      },
      {
        img: nleight,
        name: "A Russian Gas-Embargo, NFT Regulations, and BTC as Legal Tender: the Weekly Round-Up",
        link: "https://cryptopong.substack.com/p/a-russian-gas-embargo-nft-regulations?s=r",
      },
      {
        img: nlnine,
        name: "Bullish Executive Order, Massive NFT Acquisition, and the Next-Gen of DeFi",
        link: "https://cryptopong.substack.com/p/bullish-executive-order-massive-nft?s=r",
      },
      {
        img: nlten,
        name: "Crypto Markets Unfazed by Fed Rate Hikes and EU Regulatory Vote",
        link: "https://cryptopong.substack.com/p/crypto-markets-unfazed-by-fed-rate?s=r",
      },
      {
        img: nleleven,
        name: "Russia Considering Accepting BTC for Oil/Gas, Yuga Labs Reaches $4B Valuation...",
        link: "https://cryptopong.substack.com/p/weekly-roundup-russia-considering?s=r",
      },
      {
        img: nltwelve,
        name: "The Weekly Roundup: OpenSea Adds Solana, the Will Smith Meme Coin, Miami Bitcoin Conference",
        link: "https://cryptopong.substack.com/p/the-weekly-roundup-opensea-adds-solana?s=r",
      },
    ];

    return (
      <Carousel
        swipe={true}
        indicatorIconButtonProps={{
          style: {
            // padding: "10px", // 1
            // color: "blue", // 3
            boxShadow: 0
          },
        }}
        activeIndicatorIconButtonProps={{
          style: {
            boxShadow: 0
          },
        }}
        indicatorContainerProps={{
          style: {
            // textAlign: "right", // 4
            boxShadow: 0
            
          },
        }}
      >
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    );
  }

  function Item(props) {
    return (
      <div
        className={classes.box}
        onClick={() => {
          window.location.href = props.item.link;
        }}
      >
        <Typography variant="h5" component="h2" gutterBottom>
          {props.item.name}
        </Typography>
        <br />
        <div className={classes.large}>
          <img src={props.item.img} alt="news" height="600px" width="400px" />
        </div>
        <p>{props.item.description}</p>
      </div>
    );
  }

  return (
    <Container component="main" className={classes.main} maxWidth="lg">
      <div>
        <Typography variant="h4" component="h2" gutterBottom>
          THE CRYPTOPONG NEWSLETTER
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          OUT ON SUBSTACK
        </Typography>
        <br></br>
      </div>
      <div>
        <div className={classes.right}>
          <div className={classes.rows}>
            <Example />
          </div>
          <div>
            <Typography variant="h6" component="h2" gutterBottom>
              SUBSCRIBE NOW:
            </Typography>
            <br></br>
            <FormGroup row>
              <TextField variant="outlined" placeholder="example@gmail.com" />
              <Button variant="contained" disableElevation>
                Subscribe
              </Button>
            </FormGroup>
          </div>
        </div>
      </div>
    </Container>
  );
};