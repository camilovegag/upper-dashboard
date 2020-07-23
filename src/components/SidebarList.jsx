import React from "react";
import { List, ListItem, ListItemIcon, ListItemText, ListSubheader, makeStyles, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  colored: {
    color: "#596d79",
  },
  margin: {
    marginBottom: -theme.spacing(1),
  },
  link: {
    textDecoration: "none",
  },
}));

export default function SidebarList(props) {
  const styles = useStyles();
  return (
    <Link className={styles.link} to={props.link}>
      <List className={styles.margin} subheader={<ListSubheader className={styles.colored}>{props.title}</ListSubheader>}>
        <ListItem button>
          <ListItemIcon className={styles.colored}>{props.icon}</ListItemIcon>
          <ListItemText primary={<Typography variant={props.variant}>{props.text}</Typography>} />
        </ListItem>
      </List>
    </Link>
  );
}
