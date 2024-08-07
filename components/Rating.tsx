import { Rating, Stack, Typography } from "@mui/material";

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
