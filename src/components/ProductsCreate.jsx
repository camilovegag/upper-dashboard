import React, { useState } from "react";
import { Box, Button, Grid, Card, CardContent, TextField, Typography, MenuItem, Divider, Input } from "@material-ui/core";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Text from "./Text";
import {useFirebaseApp, useUser } from "reactfire";
import "firebase/firestore";
import "firebase/storage";

const categories = [
  {
    value: "Plaataformas",
    label: "Plataformas",
  },
  {
    value: "Sandalias",
    label: "Sandalias",
  },
  {
    value: "Stilettos",
    label: "Stilettos",
  },
  {
    value: "Tacones",
    label: "Tacones",
  },
];

export default function ProductsCreate() {
  const firebase = useFirebaseApp();
  const db = firebase.firestore();

  const storage = firebase.storage();

  const user = useUser();

  const [nombre, setNombre] = useState("");
  const [descripcion, setDesc] = useState("");
  const [categoria, setCat] = useState("");
  const [codigoDelProducto, setCodProd] = useState("");
  const [codigoReferencia, setCodRef] = useState("");
  const [precio, setPrecio] = useState("");
  const [precioDescuento, setPrecioDesc] = useState("");
  const [imagen, setImagen] = useState("");
  
  const crearProducto = async() =>{
    const uploadTask = await storage.ref(`/pruebas/tiendas/${user.uid}/${imagen.name}`).put(imagen);
    
    uploadTask.task.on('state_changed',
      null,
      null,
      function (complete) {
        uploadTask.task.snapshot.ref.getDownloadURL().then(function (downloadURL){
          db.collection("Tiendas").doc(user.uid).collection("Productos").add({
            Nombre : nombre,
            Descripcion : getText(descripcion),
            Categoria : categoria,
            Codigo: codigoDelProducto,
            Referencia : codigoReferencia,
            Precio: precio,
            Descuento: precioDescuento,
            Foto: downloadURL,
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
        });
      }
    );
  }

  function getText(html) {
    var tmp = document.createElement('div')
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText;
  }


  return (
    <Box mt={12} mb={4} mx={3}>
      <Text fatherLink="Administración" childLink="Productos" secondChild={true} secondChildLink="Crear" subTitle="Crear un nuevo producto" />
      <Box mt={2}>
        <Grid container spacing={4}>
          <Grid item xs={12} lg={9}>
            <Card style={{ height: "100%" }}>
              <CardContent>
                <Grid container spacing={4}>
                  <Grid item xs={12}>
                    <TextField id="nomProd" label="Nombre del producto" variant="outlined" size="normal" onChange={(e) => setNombre(e.target.value)}  required fullWidth />
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Typography variant="h3">Descripción</Typography>
                      </Grid>
                      <Grid item xs={12}> 
                        <Box style={{ height: "200px" }}>
                          <ReactQuill id='desc' theme="snow" value={descripcion}  onChange={setDesc} style={{ height: "130px" }} />
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} lg={3}>
            <Card>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography variant="h3">Organizar</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Divider />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField label="Categoría" onChange={(e) => setCat(e.target.value)} variant="outlined" size="normal" required fullWidth select>
                      {categories.map((option) => (
                        <MenuItem id="category" key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField id="codigoPro" label="Código del producto" onChange={(e) => setCodProd(e.target.value)} variant="outlined" size="normal" fullWidth />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField id="codigoRef" label="Código de referencia" onChange={(e) => setCodRef(e.target.value)} variant="outlined" size="normal" fullWidth />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} lg={9}>
            <Card>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography variant="h3">Subir imágenes</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Divider />
                  </Grid>
                  {/* Espacio para subir archivos */}
                  <Grid item xs={12}>
                    <label>
                      <Grid container spacing={2} style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "50px" }}>
                        <Input id="images" multiple="" type="file" onChange={(e) => setImagen(e.target.files[0])} autocomplete="off" tabindex="-1" style={{ display: "none" }} />
                        <Grid item xs={12} style={{ display: "flex" }}>
                          <img style={{ width: "150px", height: "150px" }} alt="Select file" src="https://firebasestorage.googleapis.com/v0/b/uppertest1.appspot.com/o/add_file.svg?alt=media&token=93d89d7f-2fa1-4d04-8494-5bd0da8c7613" />
                          <Grid item xs={12} style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                            <Typography variant="subtitle1">Seleccionar archivo</Typography>
                            <Box mt={1} />
                            <Typography>
                              Arrastra los archivos o has clic <u>aqui</u> para buscar en tu dispositivo
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </label>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} lg={3}>
            <Card>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography variant="h3">Precios</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Divider />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField id="price" label="Precio" variant="outlined" size="normal" onChange={(e) => setPrecio(e.target.value)} fullWidth required type="number" helperText="Si tienes un precio de descuento, éste será mostrado como el precio antiguo." />
                    <Typography variant="h4" style={{ paddingTop: "16px", paddingLeft: "8px" }}></Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField id="pricedesc" label="Precio de descuento" variant="outlined" onChange={(e) => setPrecioDesc(e.target.value)} size="normal" fullWidth type="number" />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={5} md={3} lg={2}>
            <Button onClick={crearProducto} variant="contained" color="secondary"  style={{ fontWeight: 400 }} fullWidth size="medium">
              Crear producto
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
