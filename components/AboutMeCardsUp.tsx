import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Container, Typography } from "@mui/material";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import ChatIcon from "@mui/icons-material/Chat";
import { dosis } from "@/fonts/Dosis";
import { openSans } from "@/fonts/OpenSans";

export default function AbouMeCardsUp() {
  return (
    <Box
      sx={{
        alignItems: "center",
        justifyContent: "center",
        color: "#333",
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: "350px",
          height: "800px",
        },
        // textAlign: "center",
      }}
    >
      <Paper
        elevation={0}
        sx={{
          maxHeight: "900px",
        }}
      >
        <ChatIcon
          sx={{
            color: "#cab882",
            display: "center",
            fontSize: "42px",
            margin: "0 auto",
            mt: 5,
          }}
        />
        <Typography
          className={dosis.className}
          sx={{
            fontWeight: 600,
            py: 2,
            textAlign: "center",
          }}
        >
          POUCAS PALAVRAS
        </Typography>
        <Container>
          <Typography
            className={openSans.className}
            sx={{
              color: "#434343",
              fontSize: "16px",
              lineHeight: 1.4,
            }}
          >
            Lorem ipsum eget risus tristique odio lacus volutpat, praesent ipsum
            torquent amet condimentum pellentesque aptent, rutrum iaculis nulla
            arcu fames luctus. leo lectus venenatis consectetur dui ad sagittis
            sapien integer nullam, eu habitant leo potenti id interdum dolor
            neque ante, placerat metus bibendum commodo suscipit massa nisl
            posuere. neque class auctor facilisis aenean est lobortis molestie
            posuere, amet lobortis habitant quam leo dictum quam congue,
            vestibulum est dictumst convallis pellentesque felis lacinia.
            laoreet est pharetra varius justo suspendisse lorem sociosqu mi
            euismod, quisque eleifend arcu nisl morbi bibendum facilisis
            curabitur turpis, dolor nulla magna nunc potenti dictum suspendisse
            sed.
          </Typography>
        </Container>
      </Paper>
      <Paper elevation={0}>
        <ContentPasteIcon
          sx={{
            color: "#cab882",
            display: "center",
            fontSize: "42px",
            margin: "0 auto",
            mt: 5,
          }}
        />
        <Typography
          className={dosis.className}
          sx={{
            fontWeight: 600,
            py: 2,
            textAlign: "center",
          }}
        >
          ESPECIALIDADES
        </Typography>
        <Container>
          <Typography
            className={openSans.className}
            sx={{
              color: "#434343",
              fontSize: "16px",
              lineHeight: 1.4,
            }}
          >
            Lorem ipsum eget risus tristique odio lacus volutpat, praesent ipsum
            torquent amet condimentum pellentesque aptent, rutrum iaculis nulla
            arcu fames luctus. leo lectus venenatis consectetur dui ad sagittis
            sapien integer nullam, eu habitant leo potenti id interdum dolor
            neque ante, placerat metus bibendum commodo suscipit massa nisl
            posuere. neque class auctor facilisis aenean est lobortis molestie
            posuere, amet lobortis habitant quam leo dictum quam congue,
            vestibulum est dictumst convallis pellentesque felis lacinia.
            laoreet est pharetra varius justo suspendisse lorem sociosqu mi
            euismod, quisque eleifend arcu nisl morbi bibendum facilisis
            curabitur turpis, dolor nulla magna nunc potenti dictum suspendisse
            sed.
          </Typography>
        </Container>
      </Paper>
      <Paper elevation={0}>
        <HowToRegIcon
          sx={{
            color: "#cab882",
            display: "center",
            fontSize: "42px",
            margin: "0 auto",
            mt: 5,
          }}
        />
        <Typography
          className={dosis.className}
          sx={{
            fontWeight: 600,
            py: 2,
            textAlign: "center",
          }}
        >
          NÚMERO DE REGISTRO
        </Typography>
        <Container>
          <Typography
            className={openSans.className}
            sx={{
              color: "#434343",
              fontSize: "16px",
              lineHeight: 1.4,
            }}
          >
            Lorem ipsum eget risus tristique odio lacus volutpat, praesent ipsum
            torquent amet condimentum pellentesque aptent, rutrum iaculis nulla
            arcu fames luctus. leo lectus venenatis consectetur dui ad sagittis
            sapien integer nullam, eu habitant leo potenti id interdum dolor
            neque ante, placerat metus bibendum commodo suscipit massa nisl
            posuere. neque class auctor facilisis aenean est lobortis molestie
            posuere, amet lobortis habitant quam leo dictum quam congue,
            vestibulum est dictumst convallis pellentesque felis lacinia.
            laoreet est pharetra varius justo suspendisse lorem sociosqu mi
            euismod, quisque eleifend arcu nisl morbi bibendum facilisis
            curabitur turpis, dolor nulla magna nunc potenti dictum suspendisse
            sed.
          </Typography>
        </Container>
      </Paper>
    </Box>
  );
}
