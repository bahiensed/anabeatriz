import NavBar from '@/components/NavBar/PageNavBar'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { Box, Typography } from '@mui/material'

export default function Page(){
  return (
    <>
      <NavBar />

      <Box
        sx={{
          mt: { xs: 2, sm: 4, md:16 },
          mx: { xs: 2, sm: 4, md:8 },
          pb: 6
        }}
      >
        <Typography
          sx={{ pb:"1em" }}
          variant="h4"
        >
          Endocrinologia e Metabologia
        </Typography>

        <Typography
          sx={{ mb:"2em" }}
          variant="body1"
        >
          As glândulas endócrinas, como se sabe, são as responsáveis pela produção e secreção dos hormônios no corpo humano.
          Com efeito, a especialidade médica que se dedica ao estudo, diagnóstico e tratamento das doenças relacionadas às glândulas endócrinas chama-se Endocrinologia e Metabologia.
          O especialista em Endocrinologia e Metabologia, portanto, estuda e cuida das disfunções no metabolismo que, por sua vez, é o conjunto de processos bioquímicos que transforma os alimentos em energia, além de regular a utilização e o armazenamento dessa mesma energia no corpo.
        </Typography>

        <Typography
          sx={{ mb:"2em" }}
          variant="body1"
        >
          Os hormônios têm um papel fundamental no funcionamento de diversos processos biológicos como crescimento, defesa do organismo, densidade óssea, desenvolvimento das características sexuais primárias e secundárias, regulação do ciclo reprodutivo, entre muitos outros.
          Endocrinologia e Metabologia abrange, sem embargo, uma ampla gama de condições, incluindo diabetes, síndrome metabólica, dislipidemia, problemas da tireoide, alterações menstruais, infertilidade, obesidade, osteroporose, doenças do metabolismo ósseo, doenças das adrenais e da hipófise.
          Nas crianças e jovens, doenças associadas a distúrbios do crescimento e do desesenvolvimento da puberdade também podem ser causadas por problemas endócrinos.
        </Typography>


        <Typography
          sx={{ mb:"2em" }}
          variant="body1"
        >
          Endocrinologia e Metabologia oferece um cuidado integral e especializado, visando o equilíbrio hormonal e metabólico do paciente.
          Com uma abordagem personalizada, o tratamento e a prevenção de doenças relacionadas a essa área podem melhorar a saúde de forma significativa, ajudando a manter um estilo de vida saudável e equilibrado, incluindo redução do risco cardiovascular e controle de peso.
        </Typography>
      </Box>

      <Contact />
      <Footer />

    </>
  )
}
