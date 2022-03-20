import React from "react";
import { Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "./TextDecrypt";

const useStyles = makeStyles((theme) => ({
    main: {
        marginTop: "auto",
        marginBottom: "auto",
        "@media (max-width: 768px)": {
            marginLeft: theme.spacing(4),
        },
    },
}));

export const Content = () => {
    const classes = useStyles();

    return (
        <Container component="main" className={`${classes.main}`} maxWidth="lg">
            <Typography variant="h3" component="h1" gutterBottom>
                <TextDecrypt text={'THE CRYPTOPONGZ NFT'} />
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom>
                <TextDecrypt text={'3,393 Playtpii Partying on the Solana Blockchain'} />
            </Typography>
        </Container>
    );
};
