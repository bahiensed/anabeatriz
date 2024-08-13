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
    title: "Experiências Profissionais",
    icon: <Chat sx={{ fontSize: "50px" }} />,
    content: [
        "Professora associada de Endocrinologia na faculdade de Ciências Médicas (FCM) da UERJ desde 2016.",
        "Secretaria executiva da sociedade brasileira de endocrinooogia -regional RJ (2020/22 e 2023/24).",
        "Coordenadora de pesquisa da Faculdade de Ciências Médicas da FCM (2024/28).",
        "Professora do programa de pós-graduação em Fisiopatolologia Clínica e Experimental da FCM UERJ.",
        "Ex-professora da Faculdade de Medicina de Petrópolis (2007-2023).",
        "Ex-chefe do Departamento de Medicina Interna da FCM UERJ (2021/23).",
        "Médica endocrinologista do Hospital Umiversitario Pedro Ernesto da UERJ (2012-2016).",
    ]
  },
  {
    title: "Formação Acadêmica",
    icon: <School sx={{ fontSize: "50px" }} />,
    content: [
      "Doutorado em Endocrinologia, UFRJ, Rio de Janeiro, 2015",      
      "Mestrado em endocrinologia, UFRJ, Rio de Janeiro, 2009",
      "Especialista em Endocrinologia e Metodologia, SBEM, Rio de Janeiro, 2007 ",
      "Residência em Endocrinologia e Metabologia, IEDE, Rio de Janeiro, 2007",
      "Residência em Clínica Médica, UFJF, Juiz de Fora, 2005",
      "Graduação em Medicina, FASE, Petrópolis, 2002",
    ]
  },
  {
    title: "Registros Profissionais",
    icon: <HowToReg sx={{ fontSize: "50px" }} />,
    content: [
      "CRM RJ 737470",
      "RQE Endocrinologia e Metabologia 14091",
      "RQE Clínica Médica 15964",      
    ]
  },
  {
    title: "Tratamentos",
    icon: <MonitorHeart sx={{ fontSize: "50px" }} />,
    content: [
      "Lorem ipsum eget risus tristique odio lacus volutpat, praesent ipsum torquent amet condimentum pellentesque aptent, rutrum iaculis nulla arcu fames luctus.",
    ]
  },
  {
    title: "Prêmios",
    icon: <EmojiEvents sx={{ fontSize: "50px" }} />,
    content: [
      "Lorem ipsum eget risus tristique odio lacus volutpat, praesent ipsum torquent amet condimentum pellentesque aptent, rutrum iaculis nulla arcu fames luctus. ",
    ]
  },
  {
    title: "Publicações",
    icon: <Article sx={{ fontSize: "50px" }} />,
    content: [
      "Lorem ipsum eget risus tristique odio lacus volutpat, praesent ipsum torquent amet condimentum pellentesque aptent, rutrum iaculis nulla arcu fames luctus.leo lectus venenat consectetur dui ad sagittis sapien integer nullam, eu habitant leo potenti id interdum dolor neque ante, placerat metus bibendum commodo suscipit massa nisl posuere. neque class auctor facilisis aenean est lobortis molestie posuere, amet loborti habitant quam leo dictum quam congue, vestibulum est dictumst convallis pellentesque felis lacinia. laoreet est pharetra varius justo suspendisse lorem",
    ]
  },
  {
    title: "Redes Sociais",
    icon: <FilterDrama sx={{ fontSize: "50px" }} />,
    content: [
      "Lorem ipsum eget risus tristique odio lacus volutpat, praesent ipsum torquent amet condimentum pellentesque aptent, rutrum iaculis nulla arcu fames luctus."
    ]
  },
]

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
        {cardsData.map((item, i) => (
          <Paper  key={i} elevation={0} sx={{ pb: 4 }}>
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

              {item.content.map((text, j) => (
                <Typography
                  key={j}
                  className={openSans.className}
                  sx={{
                    color: "#434343",
                    fontSize: "16px",
                    fontWeight: 300,
                    lineHeight: 1.4,
                    mb: 1.5, // Add margin between each text block
                  }}
                >
                  {text}
                </Typography>
              ))}
    
            </Container>
          </Paper>
        ))}
      </Masonry>
    </Box>
  );
}
