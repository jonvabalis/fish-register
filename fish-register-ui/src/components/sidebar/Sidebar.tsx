import {
  Drawer,
  IconButton,
  CssBaseline,
  type Theme,
  Divider,
  List,
} from "@mui/material";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { DrawerHeader } from "./SidebarHelper";
import { SIDEBAR_DATA } from "./SidebarData";
import SidebarItemEntry from "./SidebarEntry";
import { NavLink } from "react-router-dom";

interface SidebarProps {
  open: boolean;
  toggleSidebar: () => void;
  theme: Theme;
}

export default function Sidebar({ open, toggleSidebar, theme }: SidebarProps) {
  const sidebarWidth = 240;
  const closedSidebarWidth = 64;

  return (
    <>
      <CssBaseline />
      <Drawer
        variant={"permanent"}
        open={false}
        onClose={toggleSidebar}
        anchor="left"
        ModalProps={{ keepMounted: true }}
        sx={{
          width: open ? sidebarWidth : closedSidebarWidth,
          flexShrink: 0,
          whiteSpace: "nowrap",
          transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.standard,
          }),
          "& .MuiDrawer-paper": {
            width: open ? sidebarWidth : closedSidebarWidth,
            overflowX: "hidden",
            transition: theme.transitions.create("width", {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.standard,
            }),
            backgroundColor: theme.palette.secondary.light,
          },
        }}
      >
        <DrawerHeader>
          <IconButton onClick={toggleSidebar}>
            {open ? (
              <KeyboardDoubleArrowLeftIcon />
            ) : (
              <KeyboardDoubleArrowRightIcon />
            )}
          </IconButton>
        </DrawerHeader>

        <List
          sx={{
            marginBottom: "auto",
            backgroundColor: "secondary.light",
          }}
        >
          <Divider />
          {SIDEBAR_DATA.map((item) => (
            <NavLink key={item.id} to={item.link}>
              <SidebarItemEntry item={item} />
            </NavLink>
          ))}
          <Divider />
        </List>
      </Drawer>
    </>
  );
}
