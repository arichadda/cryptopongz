import React from "react";
import { Tooltip, Zoom, Button, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import avatar from './profile_dark.png'

const useStyles = makeStyles((theme) => ({
    svg: {
        width: "60px",
        height: "60px",
        position: "fixed",
        top: theme.spacing(2),
        left: theme.spacing(6),

    },
}));

function refreshPage() { 
    window.location.reload(); 
}

export const LogoLink = () => {
    const classes = useStyles();

    return (
        <Tooltip
            title="together we will rise"
            placement="right"
            TransitionComponent={Zoom}
        >
             <Button
                color="inherit"
                className={classes.svg}
                onClick={refreshPage}
                startIcon={<Avatar className={classes.svg} alt="CRYPTOPONGZ" src={avatar} variant='square'/>}
            >
            </Button>
        </Tooltip>
    );
};
