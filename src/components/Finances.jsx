import React from "react";
import { Box, Grid } from "@material-ui/core";
import { AttachMoney as MoneyIcon } from "@material-ui/icons";
import Text from "./Text";
import MoneyCard from "./InfoCard";

export default function Finances() {
  return (
    <Box mt={12} mb={4} mx={3}>
      <Text fatherLink="Reportes" childLink="Finanzas" subTitle="Reporte financiero" />
      <Box mt={2}>
        <Grid container spacing={4}>
          <MoneyCard xs={12} sm={6} md={6} lg={3} title="Ingresos totales" number="$657.000" icon={<MoneyIcon style={{ color: "#ffb800" }} />} dot="whiteDot" colored="colored" contrastText="contrastText" />
        </Grid>
      </Box>
    </Box>
  );
}
