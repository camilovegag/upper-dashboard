import React from "react";
import { Box } from "@material-ui/core";
import Text from "./Text";

export default function Clients() {
  return (
    <Box mt={12} mb={4} mx={3}>
      <Text fatherLink="Administración" childLink="Clientes" subTitle="Todos los clientes" />
    </Box>
  );
}
