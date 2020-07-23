import React from "react";
import { Avatar, Container, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  avatar: {
    height: 64,
    marginBottom: theme.spacing(2),
    width: 64,
  },
  container: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    height: 153,
    justifyContent: "center",
    width: 255,
  },
}));

const profilePic = "https://firebasestorage.googleapis.com/v0/b/uppertest1.appspot.com/o/baila.jpg?alt=media&token=e18d94ec-eb70-45d3-b73b-d47f08ba1f86";

export default function SidebarAvatar() {
  const styles = useStyles();
  return (
    <Container className={styles.container}>
      <Avatar className={styles.avatar} src={profilePic} />
      <Typography component="h2" variant="h2">
        Calzado Baila
      </Typography>
    </Container>
  );
}
