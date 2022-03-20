import React, { useRef } from "react";

import { HelmetMeta } from "./HelmetMeta";
import { ThemeProvider } from "../components/theme/ThemeProvider";
import { CssBaseline, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { Home } from "../pages/Home";
import { AboutMe } from "../pages/AboutMe"; 
import { Projects } from "../pages/Projects"; 
import { Work } from "../pages/Work";
import { Banner } from "../components/banner/Banner";
import { Newsletter } from "../pages/Newsletter";
import { Founders } from "../pages/Founders";
import { Footer } from "../components/footer/FooterText";

const useStyles = makeStyles((theme) => ({
    footerIcons: {
        position: "fixed",
        top: theme.spacing(2),
        right: theme.spacing(6),
    },
    iconButton: {
        height: "12",
        width: "12",
        marginBottom: theme.spacing(2),
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(2),
    },
}));

// const PageNotFound = lazy(() => import("../pages/PageNotFound"));

export const App = () => {
    const classes = useStyles();
    const  homeRef = useRef(null);
    const  aboutMeRef = useRef(null);
    const  projectRef = useRef(null);
    const  workExpRef = useRef(null);
    const  newsletterRef = useRef(null);
    const foundersRef = useRef(null);

    return (
        <ThemeProvider>
            <CssBaseline/>
            <HelmetMeta/>
            <div ref={homeRef}>
                <Home/>
            </div>
            <div ref={aboutMeRef}>
                <AboutMe/>
            </div>
             <div ref={workExpRef}>
                <Work/>
            </div>
            <div>
                <Banner/>
            </div>
            <div ref={newsletterRef}>
                <Newsletter/>
            </div>
            <div ref={projectRef}>
                <Projects/>
            </div>
            <div ref={foundersRef}>
                <Founders/>
            </div>
            <div>
                <Footer/>
            </div>
            <div className={classes.footerIcons}>
                <Button
                    color="inherit"
                    className={classes.iconButton}
                    onClick={() => { 
                        if (aboutMeRef && aboutMeRef.current) {
                          window.scrollTo({ top: aboutMeRef.current.offsetTop, behavior: "smooth"})
                        } 
                      }
                  }
                >
                    {"ABOUT US"}
                </Button>
                <Button
                    color="inherit"
                    className={classes.iconButton}
                    onClick={() => { 
                        if (workExpRef && workExpRef.current) {
                            window.scrollTo({ top: workExpRef.current.offsetTop, behavior: "smooth"})
                        } 
                      }
                  }
                >
                    {"ROADMAP"}
                </Button>
                <Button
                    color="inherit"
                    className={classes.iconButton}
                    onClick={() => { 
                        if (newsletterRef && newsletterRef.current) {
                            window.scrollTo({ top: newsletterRef.current.offsetTop, behavior: "smooth"})
                        } 
                      }
                  }
                >
                    {"NEWSLETTER"}
                </Button>
                <Button
                    color="inherit"
                    className={classes.iconButton}
                    onClick={() => { 
                        if (projectRef && projectRef.current) {
                            window.scrollTo({ top: projectRef.current.offsetTop, behavior: "smooth"})
                        } 
                      }
                  }
                >
                    {"RARITY"}
                </Button>
                <Button
                    color="inherit"
                    className={classes.iconButton}
                    onClick={() => { 
                        if (foundersRef && foundersRef.current) {
                            window.scrollTo({ top: foundersRef.current.offsetTop, behavior: "smooth"})
                        } 
                      }
                  }
                >
                    {"FOUNDERS"}
                </Button>
                <Button
                    disabled
                    variant="outlined"
                    className={classes.iconButton}
                >
                    {"MINT: TBA"}
                </Button>
            </div>
        </ThemeProvider>
    );
};
