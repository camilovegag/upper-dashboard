import React from "react";
import { AppBar, IconButton, makeStyles, Toolbar, Typography } from "@material-ui/core";
import { Menu as MenuIcon, ExitToApp as ExitIcon, Notifications as NotificationsIcon } from "@material-ui/icons";
import "firebase/auth";
import { useFirebaseApp } from "reactfire";

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  iconButton: {
    color: "#fff",
  },
  menuButton: {
    [theme.breakpoints.up("xl")]: {
      display: "none",
    },
    color: "white",
  },
  title: {
    flex: 1,
    marginLeft: theme.spacing(2),
  },
  toolbar: {
    backgroundColor: theme.palette.primary.main,
    minHeight: "64px",
    width: "100vw",
  },
}));

export default function Nav(props) {
  const styles = useStyles();
  const firebase = useFirebaseApp();
  const logout = async () => {
    await firebase.auth().signOut();
  };
  return (
    <AppBar className={styles.appBar} position="fixed">
      <Toolbar className={styles.toolbar}>
        <IconButton className={styles.menuButton} onClick={() => props.onClick()}>
          <MenuIcon />
        </IconButton>
        <Typography className={styles.title} component="h1" variant="h1">
          Upper
        </Typography>
        <IconButton className={styles.iconButton}>
          <NotificationsIcon />
        </IconButton>
        <IconButton className={styles.iconButton} onClick={logout}>
          <ExitIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
