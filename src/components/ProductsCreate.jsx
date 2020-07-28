import React, { useState } from "react";
import { Box, Button, Grid, Card, CardContent, TextField, Typography, MenuItem, Divider, Input } from "@material-ui/core";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Text from "./Text";

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
  const [value, setValue] = useState("");
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
                    <TextField label="Nombre del producto" variant="outlined" size="normal" required fullWidth />
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Typography variant="h3">Descripción</Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Box style={{ height: "200px" }}>
                          <ReactQuill theme="snow" value={value} onChange={setValue} style={{ height: "130px" }} />
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
                    <TextField label="Categoría" variant="outlined" size="normal" required fullWidth select>
                      {categories.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField label="Código del producto" variant="outlined" size="normal" fullWidth />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField label="Código de referencia" variant="outlined" size="normal" fullWidth />
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
                        <Input multiple="" type="file" autocomplete="off" tabindex="-1" style={{ display: "none" }} />
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
                    <TextField label="Precio" variant="outlined" size="normal" fullWidth required type="number" helperText="Si tienes un precio de descuento, éste será mostrado como el precio antiguo." />
                    <Typography variant="h4" style={{ paddingTop: "16px", paddingLeft: "8px" }}></Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField label="Precio de descuento" variant="outlined" size="normal" fullWidth type="number" />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={5} md={3} lg={2}>
            <Button variant="contained" color="secondary" style={{ fontWeight: 400 }} fullWidth size="medium">
              Crear producto
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
