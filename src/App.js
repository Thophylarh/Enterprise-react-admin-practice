import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

import { Route, Routes } from "react-router-dom";
import Dashboard from "./scenes/dashboard/index";

import { useState } from "react";
import Bar from "./scenes/bar";
import Calender from "./scenes/calender";
import Contacts from "./scenes/contacts";
import FAQ from "./scenes/faq";
import Form from "./scenes/form";
import Sidebar from "./scenes/global/Sidebar";
import Topbar from "./scenes/global/Topbar";
import Invoices from "./scenes/invoices";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import Team from "./scenes/team";

import Geography from "./scenes/geography";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            {/* <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/calender" element={<Calender />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/bar-chart" element={<Bar />} />
              <Route path="/pie-chart" element={<Pie />} />
              <Route path="/line-chart" element={<Line />} />
              <Route path="/geo-chart" element={<Geography />} />
            </Routes> */}
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
