import React from "react";
import { Box } from "@material-ui/core";
import Text from "./Text";

export default function Orders() {
  return (
    <Box mt={12} mb={4} mx={3}>
      <Text fatherLink="Administración" childLink="Pedidos" subTitle="Todos los pedidos" />
    </Box>
  );
}
