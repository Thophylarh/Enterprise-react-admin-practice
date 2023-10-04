import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider, CssBaseline } from "@mui/material"; // Import MUI dependencies
import { RouterProvider } from "react-router-dom";
import router from "./routes";

import { ColorModeContext, useMode } from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Index() {
  const [theme, colorMode] = useMode();

  return (
    <React.StrictMode>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <RouterProvider router={router}>
            <App />
          </RouterProvider>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </React.StrictMode>
  );
}

root.render(<Index />);
