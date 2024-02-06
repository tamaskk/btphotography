import Dashboard from "@/components/Dashboard/Dashboard";
import { CssVarsProvider } from "@mui/joy/styles";
import { SessionProvider } from "next-auth/react";

const index = () => {
  return (
    <div>
      <SessionProvider>
        <CssVarsProvider>
          <Dashboard />
        </CssVarsProvider>
      </SessionProvider>
    </div>
  );
};

export default index;
