import React from "react";
import { NewsCards } from "../components/newsletter/NewsCards";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(() => ({
    root: {
        display: "flex",
        flexDirection: "row",
        minHeight: "100vh",
    },
}));

export const Newsletter = () => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <NewsCards/>
            </div>
        </>
    );
};

