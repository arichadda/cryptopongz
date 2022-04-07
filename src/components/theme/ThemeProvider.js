import React, { createContext } from "react";
import { DarkTheme } from "./Themes";
import { MuiThemeProvider } from "@material-ui/core/styles";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

    return (
        <ThemeContext.Provider
        >
            <MuiThemeProvider
                theme={DarkTheme}
            >
                {children}
            </MuiThemeProvider>
        </ThemeContext.Provider>
    );
};
