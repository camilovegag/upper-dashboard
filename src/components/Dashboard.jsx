import React from "react";
import { Box, Grid, Card, CardContent } from "@material-ui/core";
import { AttachMoney as MoneyIcon, LocalShipping as ShipIcon } from "@material-ui/icons";
import DashboardCard from "./DashboardCard";
import Text from "./Text";

export default function Dashboard() {
  return (
    <Box mt={12} mb={4} mx={3} height="100vh">
      <Text fatherLink="Reportes" childLink="Dashboard" subTitle="Esto es lo que está pasando" />
      <Box mt={2}>
        <Grid container spacing={4}>
          <DashboardCard xs={12} sm={6} md={6} lg={3} title="Ingresos de hoy" number="$40.000" icon={<MoneyIcon />} dot="yellowDot" />
          <DashboardCard xs={12} sm={6} md={6} lg={3} title="Pedidos en curso" number="3" icon={<ShipIcon />} dot="blueDot" />
          <DashboardCard xs={12} sm={6} md={6} lg={3} title="Pedidos totales" number="27" icon={<ShipIcon />} dot="blueDot" />
          <DashboardCard xs={12} sm={6} md={6} lg={3} title="Ingresos totales" number="$657.000" icon={<MoneyIcon style={{ color: "#ffb800" }} />} dot="whiteDot" colored="colored" contrastText="contrastText" />
        </Grid>
      </Box>
      <Box mt={4}>
        <Grid container>
          <Grid item xs={12}>
            <Card>
              <CardContent>Hola</CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
