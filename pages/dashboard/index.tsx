import Dashboard from "@/components/Dashboard/Dashboard";
import { ContextProvider } from "@/lib/mainContext";
import { CssVarsProvider } from "@mui/joy/styles";
import { SessionProvider, getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";

const Index = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    getSession().then((session) => {
      if (!session) {
        router.push("/login");
        alert('Jelentkezz be az admin oldal használatához!')
      } else {
        setLoading(false);
      }
    });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

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
