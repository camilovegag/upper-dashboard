import React, { useState } from "react";
import { Avatar, Box, Button, Checkbox, Container, TextField, FormControlLabel, Link, makeStyles, Typography } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Link as RouterLink } from "react-router-dom";
import { useFirebaseApp, useUser } from "reactfire";
import "firebase/auth";
import Upper from "./Upper";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://.com/">
        Upper
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
}
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  link: {
    textDecoration: "none",
  },
}));

export default function SignIn() {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const firebase = useFirebaseApp();
  const user = useUser();
  const login = async () => {
    await firebase.auth().signInWithEmailAndPassword(email, password);
  };
  return (
    <div>
      {!user && (
        <Container component="main" maxWidth="xs">
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Iniciar sesión
            </Typography>
            <form className={classes.form} noValidate>
              <TextField type="email" variant="outlined" margin="normal" required fullWidth id="email" label="Correo electrónico" name="email" autoComplete="email" autoFocus onChange={(e) => setEmail(e.target.value)} />
              <TextField variant="outlined" margin="normal" required fullWidth name="password" label="Contraseña" type="password" id="password" autoComplete="current-password" onChange={(e) => setPassword(e.target.value)} />
              <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Recuerdame" />
              <RouterLink className={classes.link}>
                <Button onClick={login} type="submit" fullWidth variant="contained" color="secondary" className={classes.submit}>
                  Iniciar sesión
                </Button>
              </RouterLink>
            </form>
          </div>
          <Box mt={8}>
            <Copyright />
          </Box>
        </Container>
      )}
      {user && <Upper />}
    </div>
  );
}
