import Link from "next/link";
import { Button, styled } from "@mui/material";
import { dosis } from "@/fonts";

const AppointmentButtonVejaMais = () => {
  const VejaMaisButton = styled(Button)({
    ":hover": {
      backgroundColor: "#a9d9d4",
      color: "#fff",
    },
  });

  return (
    <>
      <Link href="https://www.doctoralia.com.br/ana-beatriz-winter-tavares/endocrinologista/petropolis">
        <VejaMaisButton
          className={dosis.className}
          sx={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fff",
            borderRadius: "28px",
            color: "#333",
            fontWeight: 700,
            margin: "0 auto",
            mt: 3,
            width: "200px",
            height: "48px",
          }}
        >
          Veja Mais
        </VejaMaisButton>
      </Link>
    </>
  );
};

export default AppointmentButtonVejaMais;
