import * as React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";

export default function HalfRating() {
  return (
    <Stack
      sx={{
        width: "100%",
        textAlign: "left",
        mt: 3,
      }}
    >
      <Typography>Paciente</Typography>
      <Rating
        name="size-small"
        size="small"
        defaultValue={2.5}
        precision={5}
        readOnly
      />
    </Stack>
  );
}
