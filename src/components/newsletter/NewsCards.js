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
