import React from "react";
import { ProjectCards } from "../components/projects/ProjectCards";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(() => ({
    root: {
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
    },
}));

export const Projects = () => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <ProjectCards/>
            </div>
        </>
    );
};
