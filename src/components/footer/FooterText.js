import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    footerText: {
        marginTop: 20,
        marginLeft: 20,
        marginBottom: 20,
        bottom: theme.spacing(6),
        left: theme.spacing(6),
    },
}));

export const Footer = () => {
    const classes = useStyles();

    return (
        <div className={classes.footerText}>
            <Typography variant="body1" >
                    Copyright © 2022 CryptoPongz. All rights reserved.
            </Typography>
        </div>
    );
};
