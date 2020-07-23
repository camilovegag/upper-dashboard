import React, { useState } from "react";
import { Box, Collapse, ListItem, ListItemIcon, ListItemText, makeStyles, Typography } from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import SidebarList from "./SidebarList";

const useStyles = makeStyles((theme) => ({
  colored: {
    color: "#596d79",
  },
  sized: {
    width: 255,
  },
  link: {
    textDecoration: "none",
  },
}));

export default function SidebarNestedList(props) {
  const styles = useStyles();
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Box className={styles.sized}>
      <ListItem button onClick={handleClick}>
        <ListItemIcon className={styles.colored}>{props.icon}</ListItemIcon>
        <ListItemText primary={<Typography variant="h3">{props.text}</Typography>} />
        {open ? <ExpandLess className={styles.colored} /> : <ExpandMore className={styles.colored} />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <SidebarList text={props.collapseText} variant="h4" link={props.link} />
      </Collapse>
      {props.extra ? (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <SidebarList text={props.extraCollapseText} variant="h4" link={props.extraLink} />
        </Collapse>
      ) : null}
    </Box>
  );
}
