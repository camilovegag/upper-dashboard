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
  /*const rowss = [

    createData("https://i.pinimg.com/originals/d0/2c/0b/d02c0bfbe0f737e1b67f5f2cda5f9485.jpg", "Stilettos Amarillos", stock, "Stilettos", 10412, "ST-AM", "$60.000"),
    createData(
      "data:image/jpeg;base64,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",
      "Stilettos Rojos",
      stock,
      "Stilettos",
      10411,
      "ST-R",
      "$60.000"
    ),
    createData("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQg8qtgYoGvoX4isJ8rtWgRoEd5nmwXpS7clAtiK6XV92ujo7E8xX9t4LPXQ_XSrkK7JuIXYc_L&usqp=CAc", "Stilettos Azules", stock, "Stilettos", 10410, "ST-AZ", "$60.000"),
    createData("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTAQ6okOS-RwM3NVkQSMd7_1Y3_49TSIr_bd_wjN5vVjCNTVKW61zgMqyugZ9qG3Rc-Qdkl86M&usqp=CAc", "Sandalias Amarillas", stock, "Sandalias", 10409, "SA-AM", "$30.000"),
    createData("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTkIeP_0YtYs4hVwbbpYPULtpvK0R2Vy-xjV3yZ-92iSUZZy0cAk9mpDVBeqRK_dkxP9RY_70cu&usqp=CAc", "Sandalias Negras", stock, "Sandalias", 10408, "ST-NG", "$30.000"),
    createData("https://firebasestorage.googleapis.com/v0/b/uppertest1.appspot.com/o/baila.jpg?alt=media&token=e18d94ec-eb70-45d3-b73b-d47f08ba1f86", "Sandalias Azulgrana", stock, "Sandalias", 10407, "ST-AZG", "$30.000"),
    createData("https://firebasestorage.googleapis.com/v0/b/uppertest1.appspot.com/o/baila.jpg?alt=media&token=e18d94ec-eb70-45d3-b73b-d47f08ba1f86", "Sandalias Café", stock, "Sandalias", 10406, "ST-CF", "$30.000"),
    createData("https://firebasestorage.googleapis.com/v0/b/uppertest1.appspot.com/o/baila.jpg?alt=media&token=e18d94ec-eb70-45d3-b73b-d47f08ba1f86", "Sandalias Café", stock, "Sandalias", 10405, "ST-CF", "$30.000"),
    createData("https://firebasestorage.googleapis.com/v0/b/uppertest1.appspot.com/o/baila.jpg?alt=media&token=e18d94ec-eb70-45d3-b73b-d47f08ba1f86", "Sandalias Café", stock, "Sandalias", 10404, "ST-CF", "$30.000"),
  ];*/

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
