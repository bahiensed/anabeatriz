import * as React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { dosis } from "@/fonts/Dosis";
import { openSans } from "@/fonts/OpenSans";

function createData(name: string, price: string) {
  return { name, price };
}

const rows = [
  createData("Consulta", " Desde 700 BRL "),
  createData("Consulta", " Desde 700 BRL "),
  createData("Consulta", " Desde 700 BRL "),
  createData("Consulta", " Desde 700 BRL "),
  createData("Consulta", " Desde 700 BRL "),
  createData("Consulta", " Desde 700 BRL "),
];

export default function Price() {
  return (
    <>
      <Typography
        className={dosis.className}
        sx={{
          color: "#333",
          fontSize: "36px",
          fontWeight: 500,
          mt: 10,
          lineHeight: 1.1,
          textAlign: "center",
        }}
      >
        PREÇO
      </Typography>
      <TableContainer
        component={Paper}
        sx={{
          alignItems: "center",
          justifyContent: "center",
          m: "0 auto",
          mb: 10,
          mt: 5,
          width: "700px",
        }}
      >
        <Table aria-label="simple table">
          <TableBody>
            {rows.map((row) => (
              <TableRow
                //key={row.price}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  className={openSans.className}
                  sx={{
                    color: "#333",
                    fontSize: "16px",
                    fontWeight: 600,
                    lineHeight: 1.5,
                  }}
                >
                  {row.name}
                </TableCell>
                <TableCell
                  align="right"
                  className={openSans.className}
                  sx={{
                    color: "#43aae6",
                    fontSize: "16px",
                    fontWeight: 600,
                    lineHeight: 1.5,
                  }}
                >
                  {row.price}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
