import React from "react";
import { Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "./TextDecrypt";

const useStyles = makeStyles((theme) => ({
    main: {
        marginTop: "auto",
        marginBottom: "auto",
        width: '100%',
        "@media (max-width: 768px)": {
            marginLeft: theme.spacing(4),
        },
    },
    text: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
    }
}));

export const Content = () => {
    const classes = useStyles();

    return (
        <Container component="main" className={classes.main}>
            <Typography variant="h3" component="h1" gutterBottom className={classes.text}>
                <TextDecrypt text={'The CryptoPongz NFT'} />
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom className={classes.text}>
                <TextDecrypt text={'3,933 Playtpii Partying on the Solana Blockchain'} />
            </Typography>
        </Container>
    );
};
