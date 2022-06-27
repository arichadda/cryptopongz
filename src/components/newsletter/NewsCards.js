import React from "react";
import {
  Typography,
  Container,
  // FormGroup,
  // TextField,
  // Button,
  Hidden,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "react-material-ui-carousel";
// import emailjs from "emailjs-com";

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
import nlthirteen from "./market_movers/nl13.png";
import nlfourteen from "./market_movers/nl14.png";
import nlfifteen from "./market_movers/nl15.png";
import nlsixteen from "./market_movers/nl16.png";
import nlseventeen from "./market_movers/nl17.png";
import nleighteen from "./market_movers/nl18.png";
import nlnineteen from "./market_movers/nl19.png";
import nltwenty from "./market_movers/nl20.png";
import nltwentyone from "./market_movers/nl21.png";
import nltwentytwo from "./market_movers/nl22.png";
import nltwentythree from "./market_movers/nl23.png";
import nltwentyfour from "./market_movers/nl24.png";


const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex-start",
    marginTop: "60px",
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
  box: {
    height: "600px",
    width: "350px",
  },
  rows: {
    direction: "row",
    height: "600px",
    width: "350px",
    marginRight: "100px",
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
  // const [value, setValue] = useState("");

  function NewsletterCarousel(props) {
    var items = [
      {
        img: nlone,
        name: "Crypto Markets Under Attack...",
        link: "https://cryptopong.substack.com/p/crypto-markets-under-attack-coins?s=r",
      },
      {
        img: nltwo,
        name: "Bitcoin Nears 30K as Wall Street...",
        link: "https://cryptopong.substack.com/p/bitcoin-nears-30k-as-wall-street?s=r",
      },
      {
        img: nlthree,
        name: "Crypto’s Attack on the U.S. Dollar",
        link: "https://cryptopong.substack.com/p/cryptos-attack-on-the-us-dollar?s=r",
      },
      {
        img: nlfour,
        name: "Money Laundering and Fraud...",
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
        name: "A Russian Gas-Embargo, NFT Regulations...",
        link: "https://cryptopong.substack.com/p/a-russian-gas-embargo-nft-regulations?s=r",
      },
      {
        img: nlnine,
        name: "Bullish Executive Order, Massive NFT Acquisition...",
        link: "https://cryptopong.substack.com/p/bullish-executive-order-massive-nft?s=r",
      },
      {
        img: nlten,
        name: "Crypto Markets Unfazed by Fed Rate Hikes...",
        link: "https://cryptopong.substack.com/p/crypto-markets-unfazed-by-fed-rate?s=r",
      },
      {
        img: nleleven,
        name: "Russia Considering Accepting BTC for Oil/Gas...",
        link: "https://cryptopong.substack.com/p/weekly-roundup-russia-considering?s=r",
      },
      {
        img: nltwelve,
        name: "The Weekly Roundup: OpenSea Adds Solana...",
        link: "https://cryptopong.substack.com/p/the-weekly-roundup-opensea-adds-solana?s=r",
      },
      {
        img: nlthirteen,
        name: "North Korean Hackers Linked to $600M Heist...",
        link: "https://cryptopong.substack.com/p/the-weekly-roundup-north-korean-hackers?s=r",
      },
      {
        img: nlfourteen,
        name: "Mining Dominates Bitcoin Conference...",
        link: "https://cryptopong.substack.com/p/the-weekly-roundup-mining-dominates?s=r",
      },
      {
        img: nlfifteen,
        name: "Binance Denies Russia Link...",
        link: "https://cryptopong.substack.com/p/the-weekly-roundup-north-korean-hackers?s=r",
      },
      {
        img: nlsixteen,
        name: 'BAYC "Breaks" Ethereum...',
        link: "https://cryptopong.substack.com/p/the-weekly-roundup-bayc-breaks-ethereum?s=r",
      },
      {
        img: nlseventeen,
        name: "Bitcoin Hits 3-Month Low...",
        link: "https://cryptopong.substack.com/p/the-weekly-roundup-bitcoin-hits-3?s=r",
      },
      {
        img: nleighteen,
        name: "Special Edition: Terra's Collapse",
        link: "https://cryptopong.substack.com/p/the-weekly-roundup-special-edition?s=r",
      },
      {
        img: nlnineteen,
        name: "Crypto Sector \"Re-Stabilize\"...",
        link: "https://cryptopong.substack.com/p/the-weekly-roundup-crypto-sector?s=r",
      },
      {
        img: nltwenty,
        name: "Terra 2.0, the \"Bitcoin Decoupling\"...",
        link: "https://cryptopong.substack.com/p/the-weekly-roundup-terra-20-the-bitcoin?s=r",
      },
      {
        img: nltwentyone,
        name: "Bitcoin ATMs: Technology of the Past?",
        link: "https://cryptopong.substack.com/p/bitcoin-atms-technology-of-the-past?s=r",
      },
      {
        img: nltwentytwo,
        name: "Crypto Suffers as Inflation Reaches 40-Year High",
        link: "https://cryptopong.substack.com/p/crypto-suffers-as-inflation-reaches?s=r",
      },
      {
        img: nltwentythree,
        name: "Celsius Network Freezes Out Investors",
        link: "https://cryptopong.substack.com/p/celsius-network-freezes-out-investors?s=r",
      },
      {
        img: nltwentyfour,
        name: "Solana set to Release Mobile Phone",
        link: "https://cryptopong.substack.com/p/solana-set-to-release-mobile-phone?s=r",
      },
    ];

    return (
      <Carousel swipe={true}>
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
        <Typography variant="h6" component="h2" gutterBottom>
          {props.item.name}
        </Typography>
        <br />
        <div className={classes.large}>
          <img src={props.item.img} alt="news" height="500px" width="350px" />
        </div>
        <p>{props.item.description}</p>
      </div>
    );
  }

  // const SERVICE_ID = "service_yk3y7bs";
  // const TEMPLATE_ID = "template_e69vy2s";

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
      <Hidden smDown>
        <div>
          <div className={classes.right}>
            <div className={classes.rows}>
              <NewsletterCarousel />
            </div>
            {/* <div>
              <Typography variant="h6" component="h2" gutterBottom>
                SUBSCRIBE NOW:
              </Typography>
              <br></br>
              <FormGroup row>
                <TextField
                  variant="outlined"
                  placeholder="example@gmail.com"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
                <Button variant="contained" disableElevation>
                  Subscribe
                </Button>
              </FormGroup>
            </div> */}
          </div>
        </div>
      </Hidden>
      <Hidden mdUp>
        <NewsletterCarousel />
        <br></br>
        <br></br>
        {/* <div>
          <Typography variant="h6" component="h2" gutterBottom>
            SUBSCRIBE NOW:
          </Typography>
          <br></br>
          <FormGroup row>
            <TextField
              variant="outlined"
              placeholder="example@gmail.com"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <Button
              variant="contained"
              disableElevation
              onClick={() => {
                console.log("JERE");
                console.log(value);
                emailjs.send(SERVICE_ID, TEMPLATE_ID, value).then(
                  function (response) {
                    console.log("SUCCESS!", response.status, response.text);
                  },
                  function (error) {
                    console.log("FAILED...", error);
                  }
                );
              }}
            >
              Subscribe
            </Button>
          </FormGroup>
        </div> */}
      </Hidden>
    </Container>
  );
};
