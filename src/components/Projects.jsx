import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";

const Projects = () => {
  return (
    <div id="workExp">
    <Box
      marginTop={{ lg: "50px", md: "36px", sm: "25px" }}
      paddingX={{ lg: "24px", md: "16px" }}
    >
      <br/>
      <Text
        fontSize={{ sm: "24px", base:"16px" }}
        paddingTop={"10px"}
        fontWeight={'bold'}
        marginLeft={{ sm: "20px", base:"15px" }}
      >
        Portofolio:
      </Text>
      <br />
      <Grid
        gridTemplateColumns={{
          lg: "1fr 1fr 1fr",
          md: "1fr 1fr 1fr",
          sm: "1fr 1fr",
          base: "1fr",
        }}
        gap="15px"
        marginLeft={{ lg: "20px", md: "20px", sm: "15px", base: "15px" }}
        fontSize={{ sm: "14px", base: "10px" }}
      >
        <GridItem>
          <Text>1. Sewa Baju Batam</Text>
          <Image
            src={require("../assets/projek/projek sewa baju.jpg")}
            alt="Projek sewa baju"
            width={{ lg: "480px", md: "360px", sm: "250px", base: "100px" }}
            height={{ lg: "200px", md: "150px", sm: "250px", base: "70px" }}
          ></Image>
          <br />
          <Text>Last updated: 16 May 2023</Text>
          <a href="https://sewa-baju-batam.vercel.app">
            <u>https://sewa-baju-batam.vercel.app</u>
          </a>
          <Text></Text>
        </GridItem>
        <GridItem>
          <Text>2. Shopedia</Text>
          <Image
            src={require("../assets/projek/projek shopedia.jpg")}
            alt="Shopedia"
            width={{ lg: "480px", md: "360px", sm: "250px", base: "100px" }}
            height={{ lg: "200px", md: "150px", sm: "250px", base: "70px" }}
          ></Image>
          <br />
          <Text>Last updated: 12 May 2023</Text>
          <Text>
            Localhost only. Unable to find free backend and database deployer
          </Text>
        </GridItem>
        <GridItem>
          <Text>3. Krusty Krab Library</Text>
          <Image
            src={require("../assets/projek/projek krustykrab library.jpg")}
            alt="Projek krustrykrab library"
            width={{ lg: "480px", md: "360px", sm: "250px", base: "100px" }}
            height={{ lg: "200px", md: "150px", sm: "250px", base: "70px" }}
          ></Image>
          <br />
          <Text>Last updated: 20 Jan 2023</Text>
          <Text>
            Localhost only. Unable to find free backend and database deployer
          </Text>
        </GridItem>
      </Grid>
    </Box>
    </div>
  );
};

export default Projects;
