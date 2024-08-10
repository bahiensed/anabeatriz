"use client";

import * as React from "react";
import { styled } from "@mui/material/styles";
import Masonry from "@mui/lab/Masonry";
import {
  Accordion,
  Box,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import {
  Article,
  Chat,
  CheckBoxOutlined,
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

const cardsData = [
  {
    id: 0,
    icon: <Chat sx={{ fontSize: "50px" }} />,
    text1:
      "Professora associada de Endocrinologia na faculdade de Ciências Médicas (FCM) da UERJ desde 2016.",
    text2:
      "Secretaria executiva da sociedade brasileira de endocrinooogia -regional RJ (2020/22 e 2023/24).",
    text3:
      "Coordenadora de pesquisa da Faculdade de Ciências Médicas da FCM (2024/28).",
    text5:
      "Professora do programa de pós-graduação em Fisiopatolologia Clínica e Experimental da FCM UERJ.",
    text6: "Ex-professora da Faculdade de Medicina de Petrópolis (2007-2023).",
    text7:
      "Ex-chefe do Departamento de Medicina Interna da FCM UERJ (2021/23).",
    text8:
      "Médica endocrinologista do Hospital Umiversitario Pedro Ernesto da UERJ (2012-2016).",
    title: "Poucas Palavras",
  },
  {
    id: 1,
    icon: <ContentPaste sx={{ fontSize: "50px" }} />,
    text: "eu habitant leo potenti id interdum dolor neque ante, placerat metus bibendum commodo suscipit massa nisl posuere. neque class auctor facilisis aenean est lobortis molestie posuere, amet loborti habitant quam leo dictum quam congue, vestibulum est dictumst convallis pellentesque felis lacinia. laoreet est pharetra varius justo suspendisse lorem",
    title: "Especialidades",
  },
  {
    id: 2,
    icon: <HowToReg sx={{ fontSize: "50px" }} />,
    text1: "CRM RJ 737470",
    text2: "RQE Endocrinologia e Metabologia 14091",
    text3: "RQE Clínica Médica 15964",
    title: "Número de registro",
  },
  {
    id: 3,
    icon: <School sx={{ fontSize: "50px" }} />,
    checkicon: <CheckBoxOutlined />,
    text1: "Graduação em Medicina de Petrópolis, 2002",
    text2: "Residência em Clínica Médica, UFJF, 2005",
    text3: "Residência em Endocrinologia e Metabologia, IEDE, 2007",
    text4: "Especialista em Endocrinologia e Metodologia, SBEM, 2007 ",
    text5: "Mestrado em endocrinologia, UFRJ, 2009",
    text6: "Doutorado em endocrinologia, UFRJ, 2015",
    title: "Formação",
  },
  {
    id: 4,
    icon: <Article sx={{ fontSize: "50px" }} />,
    text: "Lorem ipsum eget risus tristique odio lacus volutpat, praesent ipsum torquent amet condimentum pellentesque aptent, rutrum iaculis nulla arcu fames luctus.leo lectus venenat consectetur dui ad sagittis sapien integer nullam, eu habitant leo potenti id interdum dolor neque ante, placerat metus bibendum commodo suscipit massa nisl posuere. neque class auctor facilisis aenean est lobortis molestie posuere, amet loborti habitant quam leo dictum quam congue, vestibulum est dictumst convallis pellentesque felis lacinia. laoreet est pharetra varius justo suspendisse lorem",
    title: "Publicações",
  },
  {
    id: 5,
    icon: <EmojiEvents sx={{ fontSize: "50px" }} />,
    text: "Lorem ipsum eget risus tristique odio lacus volutpat, praesent ipsum torquent amet condimentum pellentesque aptent, rutrum iaculis nulla arcu fames luctus. ",
    title: "Prêmios",
  },
  {
    id: 6,
    icon: <Language sx={{ fontSize: "50px" }} />,
    text: "Lorem ipsum eget risus tristique odio lacus volutpat, praesent ipsum torquent amet condimentum pellentesque aptent, rutrum iaculis nulla arcu fames luctus. ",
    title: "Idiomas",
  },
  {
    id: 7,
    icon: <FilterDrama sx={{ fontSize: "50px" }} />,
    text: "Lorem ipsum eget risus tristique odio lacus volutpat, praesent ipsum torquent amet condimentum pellentesque aptent, rutrum iaculis nulla arcu fames luctus. ",
    title: "Redes sociais",
  },
  {
    id: 8,
    icon: <MonitorHeart sx={{ fontSize: "50px" }} />,
    text: "Lorem ipsum eget risus tristique odio lacus volutpat, praesent ipsum torquent amet condimentum pellentesque aptent, rutrum iaculis nulla arcu fames luctus. ",
    title: "Doenças Tratadas",
  },
];

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  color: theme.palette.text.secondary,
}));

export default function MasonryWithVariableHeightItems() {
  return (
    <Box
      sx={{
        alignItems: "center",
        justifyContent: "center",
        m: "0 auto",
        width: 1150,
        minHeight: 377,
      }}
    >
      <Masonry columns={3} spacing={4}>
        {cardsData.map((item) => (
          <Paper key={item.id} elevation={0} sx={{ pb: 4 }}>
            <Container>
              <Stack
                sx={{
                  alignItems: "center",
                  color: "#cab882",
                  height: "36px",
                  justifyContent: "center",
                  m: "0 auto",
                  pb: 6,
                  pt: 8,
                }}
              >
                {item.icon}
              </Stack>
              <Typography
                className={dosis.className}
                sx={{
                  color: "#434343",
                  fontSize: "18px",
                  fontWeight: 600,
                  lineHeight: 1.1,
                  letterSpacing: "0.05rem",
                  textAlign: "center",
                  textTransform: "uppercase",
                  pb: 4,
                }}
              >
                {item.title}
              </Typography>
              <Typography
                className={openSans.className}
                sx={{
                  color: "#434343",
                  fontSize: "16px",
                  fontWeight: 300,
                  lineHeight: 1.4,
                }}
              >
                {item.text1}
              </Typography>
              <Typography
                className={openSans.className}
                sx={{
                  color: "#434343",
                  fontSize: "16px",
                  fontWeight: 300,
                  mt: 3,
                  lineHeight: 1.4,
                }}
              >
                {item.text2}
              </Typography>
              <Typography
                className={openSans.className}
                sx={{
                  color: "#434343",
                  fontSize: "16px",
                  fontWeight: 300,
                  mt: 3,
                  lineHeight: 1.4,
                }}
              >
                {item.text3}
              </Typography>
              <Typography
                className={openSans.className}
                sx={{
                  color: "#434343",
                  fontSize: "16px",
                  fontWeight: 300,
                  mt: 3,
                  lineHeight: 1.4,
                }}
              >
                {item.text4}
              </Typography>
              <Typography
                className={openSans.className}
                sx={{
                  color: "#434343",
                  fontSize: "16px",
                  fontWeight: 300,
                  mt: 3,
                  lineHeight: 1.4,
                }}
              >
                {item.text5}
              </Typography>
              <Typography
                className={openSans.className}
                sx={{
                  color: "#434343",
                  fontSize: "16px",
                  fontWeight: 300,
                  mt: 3,
                  lineHeight: 1.4,
                }}
              >
                {item.text6}
              </Typography>
              <Typography
                className={openSans.className}
                sx={{
                  color: "#434343",
                  fontSize: "16px",
                  fontWeight: 300,
                  mt: 3,
                  lineHeight: 1.4,
                }}
              >
                {item.text7}
              </Typography>
              <Typography
                className={openSans.className}
                sx={{
                  color: "#434343",
                  fontSize: "16px",
                  fontWeight: 300,
                  mt: 3,
                  lineHeight: 1.4,
                }}
              >
                {item.text8}
              </Typography>
            </Container>
          </Paper>
        ))}
      </Masonry>
    </Box>
  );
}
