import React from "react";
import { Box } from "@material-ui/core";
import Text from "./Text";

export default function Finances() {
  return (
    <Box mt={12} mb={4} mx={3}>
      <Text fatherLink="Reportes" childLink="Finanzas" subTitle="Reporte financiero" />
    </Box>
  );
}
