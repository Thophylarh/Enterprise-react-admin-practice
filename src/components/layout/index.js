import React, { useState } from "react";
import { Box } from "@mui/material";
import TopBar from "../../scenes/global/Topbar";
import { Outlet } from "react-router-dom";
import Sidebar from "../../scenes/global/Sidebar";

const Layout = () => {
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <Box display="flex">
      <Sidebar isSidebar={isSidebar} />

      <Box flex="1">
        <TopBar setIsSidebar={setIsSidebar} />
        <Box p={2}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
