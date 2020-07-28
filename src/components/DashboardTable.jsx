import React, { useState } from "react";
import { Table, TableHead, TableRow, TableCell, TableBody, TableContainer, Paper, Typography, TablePagination } from "@material-ui/core";

function createData(ref, client, payment, product, sku, address) {
  return { ref, client, payment, product, sku, address };
}

const rows = [
  createData("FAD103", "Diego Alzate", "Tarjeta de crédito", "Stilettos Amarillos", "ST36-AM", "Dg. 16 #17-1, Villavicencio, Meta"),
  createData("FAD102", "John Doe", "Efectivo", "Sandalias Azules", "SA35-AZ", "Cl. 12b #47d-36, Villavicencio, Meta"),
  createData("FAD101", "Angélica Pérez", "Tarjeta de crédito", "Plataformas Grises", "PL38-GR", "Cl. 25 #24-52, Villavicencio, Meta"),
  createData("FAD100", "Gregorio Sandino", "Efectivo", "Tacones Rojos", "T35-R", "Cl. 15 #44-104, Villavicencio, Meta"),
  createData("FAD99", "Juan Camilo Gutierrez", "Efectivo", "Botas Negras", "B39-NE", "Cl. 31 #31-157a, Villavicencio, Meta"),
  createData("FAD98", "Juan Alejandro Tarazona", "Efectivo", "Botas Negras", "B39-NE", "Cl. 31 #31-157a, Villavicencio, Meta"),
  createData("FAD97", "Juan Esteban Andrade", "Efectivo", "Botas Negras", "B39-NE", "Cl. 31 #31-157a, Villavicencio, Meta"),
  createData("FAD96", "Duvan Hernandez", "Efectivo", "Botas Negras", "B39-NE", "Cl. 31 #31-157a, Villavicencio, Meta"),
  createData("FAD95", "Nicole Kidman", "Efectivo", "Botas Negras", "B39-NE", "Cl. 31 #31-157a, Villavicencio, Meta"),
  createData("FAD94", "Diego Alzate", "Tarjeta de crédito", "Stilettos Amarillos", "ST36-AM", "Dg. 16 #17-1, Villavicencio, Meta"),
  createData("FAD93", "John Doe", "Efectivo", "Sandalias Azules", "SA35-AZ", "Cl. 12b #47d-36, Villavicencio, Meta"),
];

export default function DashboardTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (e, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (e) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setPage(0);
  };
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <TableContainer component={Paper}>
      <Table style={{ minWidth: 1200 }}>
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="h3">Referencia</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h3">Cliente</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h3">Método de pago</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h3">Producto</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h3">Código de referencia</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h3">Dirección</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
            <TableRow key={row.ref}>
              <TableCell>
                <Typography variant="h4">{row.ref}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h4">{row.client}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h4">{row.payment}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h4">{row.product}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h4">{row.sku}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h4">{row.address}</Typography>
              </TableCell>
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 50 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
      </Table>
      <TablePagination count={rows.length} page={page} onChangePage={handleChangePage} rowsPerPage={rowsPerPage} onChangeRowsPerPage={handleChangeRowsPerPage} rowsPerPageOptions={[1, 5, 10]} />
    </TableContainer>
  );
}
