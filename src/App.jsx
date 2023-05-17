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
      <Grid
        gridTemplateColumns={"1fr 1fr 1fr 1fr"}
        height={"50px"}
        textAlign={"center"}
        marginTop={"10px"}
      >
        <GridItem borderBottom={"1px solid black"}>
          <Box id="navbar">
            <Box fontSize={"20px"}>
              <a href="#mainpage"> Mainpage </a>
            </Box>
          </Box>
        </GridItem>
        <GridItem borderBottom={"1px solid black"}>
          <Box fontSize={"20px"}>
            <a href="#education"> Education </a>
          </Box>
        </GridItem>
        <GridItem borderBottom={"1px solid black"}>
          <Box fontSize={"20px"}>
            <a href="#workExp"> Work Experience </a>
          </Box>
        </GridItem>
        <GridItem borderBottom={"1px solid black"}>
          <Box fontSize={"20px"}>
            <a href="#contactMeBox"> Contact Me </a>
          </Box>
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
