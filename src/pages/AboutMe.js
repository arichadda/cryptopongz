import React from "react";
import { Bio } from "../components/aboutme/Bio";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(() => ({
    root: {
        display: "flex",
        flexDirection: "row",
        minHeight: "100vh",
    },
}));

export const AboutMe = () => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <Bio/>
            </div>
        </>
    );
};

