import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import styles from "./layout.module.css";
import Navbar from "./navbar/navbar";
import Sidebar from "./sidebar/sidebar";

const drawerWidth = 240;

const AdminLayout = ({ children, title }: any) => {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            ml: `${drawerWidth}px`,
            backgroundColor: "#fff",
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          }}
        >
          <Toolbar>
            <Navbar />
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              backgroundColor: "#343A40",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Sidebar />
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, bgcolor: "#F4F6F9", p: 3 }}>
          <Toolbar />
          <div className={styles.container}>{children}</div>
        </Box>
      </Box>
    </div>
  );
};

export default AdminLayout;
