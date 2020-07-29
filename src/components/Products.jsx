import React from "react";
import { Box } from "@material-ui/core";
import Text from "./Text";
import ProductsTable from "./ProductsTable";

export default function Products() {
  return (
    <Box mt={12} mb={4} mx={3} height="100vh">
      <Text fatherLink="Administración" childLink="Productos" subTitle="Todos los productos" />
      <Box mt={2}>
        <ProductsTable />
      </Box>
      <Box mt={4}></Box>
    </Box>
  );
}
