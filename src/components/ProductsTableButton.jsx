import React, { useState } from "react";
import { Button, makeStyles } from "@material-ui/core";
import { green, red } from "@material-ui/core/colors";

const useSyles = makeStyles((theme) => ({
  green: {
    backgroundColor: green[100],
    color: green[600],
    fontSize: "0.625rem",
  },
  red: {
    backgroundColor: red[100],
    color: red[600],
    fontSize: "0.625rem",
  },
}));

export default function TestButton() {
  const styles = useSyles();
  const [stock, setStock] = useState(true);
  const handleStock = () => {
    setStock(!stock);
  };
  return (
    <div>
      {stock ? (
        <Button onClick={handleStock} className={styles.green}>
          En existencia
        </Button>
      ) : (
        <Button onClick={handleStock} className={styles.red}>
          Agotado
        </Button>
      )}
    </div>
  );
}
