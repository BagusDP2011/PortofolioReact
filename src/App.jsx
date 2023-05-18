import "./App.css";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import Intro from "./components/Intro.jsx";
import ProfessionalSumm from "./components/ProfessionalSumm.jsx";
import Education from "./components/Education.jsx";
import WorkExp from "./components/WorkExp.jsx";
import BottomPage from "./components/BottomPage.jsx";

function App() {
  return (
    <Box>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="author" content="BagusDP" />
      <title>BagusDP Portofolio</title>
      <meta
        name="description"
        content="Mini portofolio of Bagus Dwi Putra or also known as GusbaXD. 
        I hope this is enough to show that I am understand how to create basic 
        front-end related knowledge. Please help me improve my skills."
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <Grid
        gridTemplateColumns={"1fr 1fr 1fr 1fr 1fr"}
        height={{sm:"50px", base:"30px"}}
        textAlign={"center"}
        marginTop={"10px"}
        fontSize={{ lg: "20px", md: "16px", sm: "12px", base:'8px' }}
      >
        <GridItem borderBottom={"1px solid black"}>
          <Box id="navbar">
            <Box>
              <a href="#mainpage">Mainpage</a>
            </Box>
          </Box>
        </GridItem>
        <GridItem borderBottom={"1px solid black"}>
          <Box>
            <a href="#proSumm">Professional Summary</a>
          </Box>
        </GridItem>
        <GridItem borderBottom={"1px solid black"}>
          <Box>
            <a href="#education">Education</a>
          </Box>
        </GridItem>
        <GridItem borderBottom={"1px solid black"}>
          <Box>
            <a href="#workExp">Work Experience</a>
          </Box>
        </GridItem>
        <GridItem borderBottom={"1px solid black"} >
          <a
            href="https://api.whatsapp.com/send?phone=6281278732817&text=Saya tertarik dan ingin bertanya"
            class="float"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa fa-whatsapp my-float">WhatsApp me here</i>
          </a>
        </GridItem>
      </Grid>

      <body>
        <Intro />
        <ProfessionalSumm />
        <Education />
        <WorkExp />
        <BottomPage />
      </body>
    </Box>
  );
}

export default App;
