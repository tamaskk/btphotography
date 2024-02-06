import Sheet from "@mui/joy/Sheet";
import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { CssVarsProvider } from "@mui/joy/styles";
import { getSession } from "next-auth/react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [userData, setUserData] = useState<any>();

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  return (
    <Sheet
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "row",
        alignItems: "start",
        justifyContent: "start",
        maxWidth: "100vw",
        maxHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <CssVarsProvider>
        <Sidebar />
      </CssVarsProvider>
      {children}
    </Sheet>
  );
};

export default Layout;
