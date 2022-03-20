import React from "react";
import { WorkExperience } from "../components/workexp/WorkExperience";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(() => ({
    root: {
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
    }
}));

export const Work = () => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <WorkExperience/>
            </div>
        </>
    );
};
