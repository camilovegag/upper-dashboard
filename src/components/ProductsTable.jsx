import React, { useState , useEffect} from "react";
import { Avatar, TableContainer, Paper, Table, TableCell, TableRow, TableHead, TableBody, Typography, TablePagination } from "@material-ui/core";
import ProductsTableButton from "./ProductsTableButton";
import {useFirebaseApp, useUser, useFirestoreDocData, useFirestore} from "reactfire";
import "firebase/firestore";

function useData(){
  const firebase = useFirebaseApp();
  const user = useUser();

  const [rows, setRows] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("Tiendas")
      .doc(user.uid)
      .collection("Productos")
      .onSnapshot((snapshot)=>{
        const newData = snapshot.docs.map((doc) => ({
          id: doc.id,
          img: doc.data().Foto,
          name: doc.data().Nombre,
          category: doc.data().Categoria,
          ref: doc.data().Codigo,
          sku: doc.data().Referencia, 
          price: doc.data().Precio,
        }))
        setRows(newData)
      })
  },[])

  return rows;
}


export default function ProductsTable() {
  const rows = useData();

  const stock = true;  

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
              <Typography variant="h3">Imágen</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h3">Nombre</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h3">Inventario</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h3">Categoría</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h3">Código de producto</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h3">Código de referencia</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h3">Precio</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
            <TableRow key={row.id}>
              <TableCell>
                <Avatar src={row.img} />
              </TableCell>
              <TableCell>
                <Typography variant="h4">{row.name}</Typography>
              </TableCell>
              <TableCell>
                <ProductsTableButton />
              </TableCell>
              <TableCell>
                <Typography variant="h4">{row.category}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h4">{row.ref}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h4">{row.sku}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h4">{row.price}</Typography>
              </TableCell>
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={7} />
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
