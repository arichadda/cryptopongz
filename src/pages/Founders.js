import React from "react";
import { Headshots } from "../components/founders/Headshots";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(() => ({
    root: {
        display: "flex",
        flexDirection: "row",
        minHeight: "100vh",
    },
}));

export const Founders = () => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <Headshots/>
            </div>
        </>
    );
};

