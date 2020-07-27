import React from "react";
import { Grid, Divider, Drawer, makeStyles, List, ListSubheader } from "@material-ui/core";
import { DashboardOutlined as DashboardIcon, PeopleOutlined as PeopleIcon, ShoppingCartOutlined as CartIcon, FolderOutlined as FolderIcon, ReceiptOutlined as RecieptIcon } from "@material-ui/icons";
import SidebarAvatar from "./SidebarAvatar";
import SidebarList from "./SidebarList";
import SidebarNestedList from "./SidebarNestedList";

const drawerWidth = 255;
const useStyles = makeStyles((theme) => ({
  colored: {
    color: "#596d79",
  },
  drawer: {
    [theme.breakpoints.up("xl")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
  },
}));

export default function Sidebar(props) {
  const styles = useStyles();

  return (
    <Drawer classes={{ paper: styles.drawerPaper }} className={styles.drawer} onClose={props.onClose ? props.onClose : null} open={props.open} variant={props.variant}>
      <SidebarAvatar />
      <Divider />
      <SidebarList icon={<DashboardIcon />} text="Dashboard" link="/" title="Reportes" variant="h3" onClick={props.onClose ? props.onClose : null} />
      <Grid>
        <List subheader={<ListSubheader className={styles.colored}>Administración</ListSubheader>}>
          <SidebarNestedList icon={<PeopleIcon />} collapseText="Lista de clientes" text="Clientes" link="/clientes" onClick={props.onClose ? props.onClose : null} />
          <SidebarNestedList icon={<CartIcon />} collapseText="Lista de productos" text="Productos" extra={true} extraCollapseText="Crear un producto" link="/productos" extraLink="/productos/crear" onClick={props.onClose ? props.onClose : null} />
          <SidebarNestedList icon={<FolderIcon />} collapseText="Lista de pedidos" text="Pedidos" link="/pedidos" onClick={props.onClose ? props.onClose : null} />
          <SidebarNestedList icon={<RecieptIcon />} collapseText="Lista de facturas" text="Facturas" link="/facturas" onClick={props.onClose ? props.onClose : null} />
        </List>
      </Grid>
    </Drawer>
  );
}
