import { useMainContext } from "@/lib/mainContext";
import Autocomplete from "@mui/joy/Autocomplete";
import Box from "@mui/joy/Box";
import Chip from "@mui/joy/Chip";
import IconButton from "@mui/joy/IconButton";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import ListItemContent from "@mui/joy/ListItemContent";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import { useColorScheme } from "@mui/joy/styles";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";

function Toggler({
  defaultExpanded = false,
  renderToggle,
  children,
}: {
  defaultExpanded?: boolean;
  children: React.ReactNode;
  renderToggle: (params: {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }) => React.ReactNode;
}) {
  const [open, setOpen] = useState(defaultExpanded);
  return (
    <Fragment>
      {renderToggle({ open, setOpen })}
      <Box
        sx={{
          display: "grid",
          gridTemplateRows: open ? "1fr" : "0fr",
          transition: "0.2s ease",
          "& > *": {
            overflow: "hidden",
          },
        }}
      >
        {children}
      </Box>
    </Fragment>
  );
}

const Sidebar = () => {
  const { data: session, status } = useSession();
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [notificationOpened, setNotificationOpened] = useState(false);
  const { setChoosenPanel } = useMainContext();

  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  const logout = () => {
    signOut();
  };

  const notificationOpen = () => {
    setNotificationOpened(!notificationOpened);
  };

  return (
    <Sheet
      sx={{
        width: "15vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "start",
        p: 2,
        gap: "1rem",
        borderRight: "1px solid lightgrey",
        minWidth: "fit-content",
        maxWidth: "100%",
        overflowY: "auto",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography>BTPhoto</Typography>
        <IconButton
          onClick={() => setMode(mode === "dark" ? "light" : "dark")}
          variant="outlined"
        >
          {mode === "dark" ? "Light mode" : "Dark mode"}
        </IconButton>
      </Box>

      <Autocomplete
        options={["Option1", "Option2", "Option3", "Option4", "Option5"]}
        sx={{ maxWidth: "100%" }}
      />
      <List
        sx={{
          gap: 1,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "start",
        }}
      >
        <ListItem
          sx={{
            width: "100%",
          }}
          onClick={() => setChoosenPanel("Új album")}
        >
          <ListItemButton>
            <ListItemContent>
              <Typography level="title-sm">Új album</Typography>
            </ListItemContent>
          </ListItemButton>
        </ListItem>

        <ListItem
          sx={{
            width: "100%",
          }}
          onClick={() => setChoosenPanel("Album beállítások")}
        >
        <ListItemButton>
            <ListItemContent>
              <Typography level="title-sm">Album beállítások</Typography>
            </ListItemContent>
          </ListItemButton>
        </ListItem>

        <ListItem
          sx={{
            width: "100%",
          }}
          onClick={() => router.push("/albums")}
        >
        <ListItemButton>
            <ListItemContent>
              <Typography level="title-sm">Új album</Typography>
            </ListItemContent>
          </ListItemButton>
        </ListItem>

        <ListItem
          sx={{
            width: "100%",
          }}
          onClick={() => setChoosenPanel("Naptár")}
        >
        <ListItemButton>
            <ListItemContent>
              <Typography level="title-sm">Naptár</Typography>
            </ListItemContent>
          </ListItemButton>
        </ListItem>

      </List>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography level="title-sm">Bornemisza Tímea</Typography>
      </Box>
    </Sheet>
  );
};

export default Sidebar;
