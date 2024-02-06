import Albumsettings from "@/components/Albumsettings/Albumsettings";
import Calendar from "@/components/Calendar/Calendar";
import Newalbum from "@/components/Newalbum/Newalbum";
import { ContextProvider, useMainContext } from "@/lib/mainContext";
import { CssVarsProvider } from "@mui/joy/styles";
import { SessionProvider } from "next-auth/react";
import Layout from "../../components/Layout/Layout";
import Dashboard from "@/components/Dashboard/Dashboard";

const Index = () => {

  return (
    <ContextProvider>
      <SessionProvider>
        <CssVarsProvider>
          <Layout>
            <Dashboard />  
          </Layout>
        </CssVarsProvider>
      </SessionProvider>
    </ContextProvider>
  );
};

export default Index;
