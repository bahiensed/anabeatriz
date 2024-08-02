import Paper from "@mui/material/Paper";
import { Container, Stack, Typography } from "@mui/material";
import {
  Article,
  Chat,
  ContentPaste,
  EmojiEvents,
  Facebook,
  FilterDrama,
  HowToReg,
  Instagram,
  Language,
  LinkedIn,
  MonitorHeart,
  School,
} from "@mui/icons-material";
import { dosis } from "@/fonts/Dosis";
import { openSans } from "@/fonts/OpenSans";

export default function AbouMeCardsUp() {
  return (
    <Container
      sx={{
        alignItems: "center",
        justifyContent: "center",
        color: "#333",
        display: "flex",
        flexWrap: "wrap",
        width: "1500px",
        /* "& > :not(style)": {
          m: 1,
          width: "350px",
          height: "800px",
        },
        // textAlign: "center", */
      }}
    >
      <Stack direction="row" justifyContent="center" spacing={5}>
        <Stack direction="column">
          <Paper
            elevation={0}
            sx={{
              maxHeight: "900px",
              pb: 5,
            }}
          >
            <Chat
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
                Lorem ipsum eget risus tristique odio lacus volutpat, praesent
                ipsum torquent amet condimentum pellentesque aptent, rutrum
                iaculis nulla arcu fames luctus. leo lectus venenatis
                consectetur dui ad sagittis sapien integer nullam, eu habitant
                leo potenti id interdum dolor neque ante, placerat metus
                bibendum commodo suscipit massa nisl posuere. neque class auctor
                facilisis aenean est lobortis molestie posuere, amet lobortis
                habitant quam leo dictum quam congue, vestibulum est dictumst
                convallis pellentesque felis lacinia. laoreet est pharetra
                varius justo suspendisse lorem
              </Typography>
            </Container>
          </Paper>
          <Paper
            elevation={0}
            sx={{
              maxHeight: "200px",
              mt: 5,
              pb: 5,
            }}
          >
            <EmojiEvents
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
              PRÊMIOS
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
                Lorem ipsum eget risus tristique odio lacus volutpat, praesent
              </Typography>
            </Container>
          </Paper>
          <Paper
            elevation={0}
            sx={{
              maxHeight: "200px",
              mt: 5,
              pb: 5,
            }}
          >
            <FilterDrama
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
              REDES SOCIAIS
            </Typography>
            <Container>
              <Facebook
                sx={{
                  color: "#213553",
                  fontSize: "38px",
                }}
              />
              <Instagram
                sx={{
                  color: "#4f86ac",
                  fontSize: "38px",
                }}
              />
              <LinkedIn
                sx={{
                  color: "#008bc2",
                  fontSize: "38px",
                }}
              />
            </Container>
          </Paper>
        </Stack>
        <Stack direction="column">
          <Paper
            elevation={0}
            sx={{
              maxHeight: "400px",
              pb: 5,
            }}
          >
            <ContentPaste
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
                Lorem ipsum eget risus tristique odio lacus volutpat, praesent
                ipsum torquent amet condimentum pellentesque aptent, rutrum
                iaculis nulla arcu fames luctus. leo lectus venenatis
                consectetur dui ad sagittis sapien integer nullam, eu habitant
                leo potenti id
              </Typography>
            </Container>
          </Paper>
          <Paper
            elevation={0}
            sx={{
              maxHeight: "300px",
              mt: 5,
              pb: 5,
            }}
          >
            <Language
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
              IDIOMAS
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
                Lorem ipsum eget risus tristique odio lacus volutpat, praesent
                ipsum torquent amet condimentum pellentesque aptent, rutrum
              </Typography>
            </Container>
          </Paper>
          <Paper
            elevation={0}
            sx={{
              maxHeight: "700px",
              mt: 5,
              pb: 5,
            }}
          >
            <MonitorHeart
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
              DOENÇAS TRATADAS
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
                Lorem ipsum eget risus tristique odio lacus volutpat, praesent
                ipsum torquent amet condimentum pellentesque aptent, rutrum
                iaculis nulla arcu fames luctus. leo lectus venenatis
                consectetur dui ad sagittis sapien integer nullam, eu habitant
                leo potenti id interdum dolor neque ante, placerat metus
                bibendum commodo suscipit massa nisl posuere. neque class auctor
                facilisis aenean est lobortis molestie posuere, amet lobortis
                habitant quam leo dictum quam congue, vestibulum est dictumst
                convallis pellentesque felis lacinia. laoreet est pharetra
                varius justo suspendisse lorem sociosqu mi euismod, quisque
                eleifend arcu nisl morbi bibendum facilisis curabitur turpis,
                dolor nulla magna nunc potenti dictum suspendisse sed.
              </Typography>
            </Container>
          </Paper>
        </Stack>
        <Stack direction="column">
          <Paper
            elevation={0}
            sx={{
              maxHeight: "300px",
              pb: 5,
            }}
          >
            <HowToReg
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
                Lorem ipsum eget risus tristique odio lacus volutpat, praesent
                ipsum torquent amet condimentum pellentesque aptent, rutrum
              </Typography>
            </Container>
          </Paper>
          <Paper
            elevation={0}
            sx={{
              maxHeight: "400px",
              mt: 5,
              pb: 5,
            }}
          >
            <School
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
              FORMAÇÃO
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
                Lorem ipsum eget risus tristique odio lacus volutpat, praesent
                ipsum torquent amet condimentum pellentesque aptent, rutrum
                iaculis nulla arcu fames luctus. leo lectus venenatis
                consectetur dui ad sagittis sapien integer nullam, eu habitant
                leo potenti id
              </Typography>
            </Container>
          </Paper>
          <Paper
            elevation={0}
            sx={{
              maxHeight: "600px",
              mt: 5,
              pb: 5,
            }}
          >
            <Article
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
              PUBLICAÇÕES
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
                Lorem ipsum eget risus tristique odio lacus volutpat, praesent
                ipsum torquent amet condimentum pellentesque aptent, rutrum
                iaculis nulla arcu fames luctus. leo lectus venenatis
                consectetur dui ad sagittis sapien integer nullam, eu habitant
                leo potenti id interdum dolor neque ante, placerat metus
                bibendum commodo suscipit massa nisl posuere. neque class auctor
                facilisis aenean est lobortis molestie posuere, amet lobortis
                habitant quam leo dictum quam congue, vestibulum est dictumst
                convallis pellentesque felis lacinia. laoreet est pharetra
                varius justo suspendisse lorem sociosqu mi euismod, quisque
                eleifend arcu nisl morbi bibendum facilisis curabitur turpis,
                dolor nulla magna nunc potenti dictum suspendisse sed.
              </Typography>
            </Container>
          </Paper>
        </Stack>
      </Stack>
    </Container>
  );
}
