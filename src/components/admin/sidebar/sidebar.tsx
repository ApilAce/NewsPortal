import DraftsIcon from "@mui/icons-material/Drafts";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InboxIcon from "@mui/icons-material/Inbox";
import SendIcon from "@mui/icons-material/Send";
import StarBorder from "@mui/icons-material/StarBorder";
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText, Toolbar } from "@mui/material";
import Router from "next/router";
import { useState } from "react";
import styles from "./sidebar.module.css";

interface SidebarItem {
  icon: JSX.Element;
  primary: string;
  subItems?: SidebarItem[];
  path?: string;
}

const sidebarItems: SidebarItem[] = [
  {
    icon: <SendIcon />,
    primary: "Category",
    path: "/admin/category/",
  },
  {
    icon: <DraftsIcon />,
    primary: "Drafts",
    path: "/drafts/",
  },
  {
    icon: <InboxIcon />,
    primary: "Inbox",
    subItems: [
      {
        icon: <StarBorder />,
        primary: "Starred",
        path: "/starred/",
      },
    ],
  },
];
const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleNavigation = (path?: string) => {
    if (path) {
      Router.push(path);
    }
  };

  const renderSubItems = (subItems?: SidebarItem[]) => {
    if (!subItems) return null;

    return subItems.map((item, index) => (
      <ListItemButton key={index} sx={{ pl: 4 }} onClick={() => handleNavigation(item.path)}>
        <ListItemIcon className={styles.icon}>{item.icon}</ListItemIcon>
        <ListItemText primary={item.primary} />
      </ListItemButton>
    ));
  };

  return (
    <div className={styles.container}>
      <Toolbar>Logo</Toolbar>
      <List sx={{ width: "100%" }} component="nav">
        {sidebarItems.map((item, index) => (
          <div key={index}>
            <ListItemButton
              onClick={item.subItems ? handleClick : () => handleNavigation(item.path)}
            >
              <ListItemIcon className={styles.icon}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.primary} />
              {item.subItems && (open ? <ExpandLessIcon /> : <ExpandMoreIcon />)}
            </ListItemButton>
            {item.subItems && (
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {renderSubItems(item.subItems)}
                </List>
              </Collapse>
            )}
          </div>
        ))}
      </List>
    </div>
  );
};

export default Sidebar;
