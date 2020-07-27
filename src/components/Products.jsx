import React from "react";
import { Box } from "@material-ui/core";
// Grid, Card, CardContent
// import { AttachMoney as MoneyIcon, LocalShipping as ShipIcon } from "@material-ui/icons";
import Text from "./Text";

export default function Products() {
  return (
    <Box mt={12} mb={4} mx={3} height="100vh">
      <Text fatherLink="Administración" childLink="Productos" subTitle="Todos los productos" />
      <Box mt={2}></Box>
      <Box mt={4}></Box>
    </Box>
  );
}
