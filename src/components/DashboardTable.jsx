import React, { useState } from "react";
import { Table, TableHead, TableRow, TableCell, TableBody, TableContainer, Paper, Typography, TablePagination } from "@material-ui/core";

function createData(ref, client, payment, product, sku, address) {
  return { ref, client, payment, product, sku, address };
}

const rows = [
  createData("UP011", "Diego Alzate", "Tarjeta de crédito", "Stilettos Amarillos", "ST36-AM", "Dg. 16 #17-1, Villavicencio, Meta"),
  createData("UP010", "John Doe", "Efectivo", "Sandalias Azules", "SA35-AZ", "Cl. 12b #47d-36, Villavicencio, Meta"),
  createData("UP009", "Angélica Pérez", "Tarjeta de crédito", "Plataformas Grises", "PL38-GR", "Cl. 25 #24-52, Villavicencio, Meta"),
  createData("UP008", "Gregorio Sandino", "Efectivo", "Tacones Rojos", "T35-R", "Cl. 15 #44-104, Villavicencio, Meta"),
  createData("UP007", "Juan Camilo Gutierrez", "Efectivo", "Botas Negras", "B39-NE", "Cl. 31 #31-157a, Villavicencio, Meta"),
  createData("UP006", "Juan Alejandro Tarazona", "Efectivo", "Botas Negras", "B39-NE", "Cl. 31 #31-157a, Villavicencio, Meta"),
  createData("UP005", "Juan Esteban Andrade", "Efectivo", "Botas Negras", "B39-NE", "Cl. 31 #31-157a, Villavicencio, Meta"),
  createData("UP004", "Duvan Hernandez", "Efectivo", "Botas Negras", "B39-NE", "Cl. 31 #31-157a, Villavicencio, Meta"),
  createData("UP003", "Nicole Kidman", "Efectivo", "Botas Negras", "B39-NE", "Cl. 31 #31-157a, Villavicencio, Meta"),
  createData("UP002", "Diego Alzate", "Tarjeta de crédito", "Stilettos Rojos", "ST36-R", "Dg. 16 #17-1, Villavicencio, Meta"),
  createData("UP001", "John Doe", "Efectivo", "Sandalias Azules", "SA35-AZ", "Cl. 12b #47d-36, Villavicencio, Meta"),
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
      <TablePagination
        style={{ color: "#596d79" }}
        count={rows.length}
        page={page}
        onChangePage={handleChangePage}
        rowsPerPage={rowsPerPage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        rowsPerPageOptions={[1, 5, 10]}
        labelRowsPerPage="Filas por página"
      />
    </TableContainer>
  );
}
