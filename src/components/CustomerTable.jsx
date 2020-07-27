import React from "react";
import { Table } from "@material-ui/core";

function createData(reference, client, payment, total, state, product, actions) {
  return { reference, client, payment, total, state, product, actions };
}

const rows = [createData("FAD103", "Diego Alzate", "Tarjeta de crédito", 60000, "Pendiente", "Stilletos amarillos", "Aceptar")];

export default function CustomerTable() {
  return <Table></Table>;
}
