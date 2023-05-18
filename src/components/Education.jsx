import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";

const Education = () => {
  return (
    <Box
      marginTop={{ lg: "50px", md: "36px", sm: "25px" }}
      paddingX={{ lg: "24px", md: "16px" }}
    >
      <div id="education">
        <br />
        <Text fontSize={{ sm: "24px", base: "16px" }}>
          <b> Education </b>
        </Text>
        <br />
        <Grid
          gridTemplateColumns={"1fr 1fr 1fr"}
          width={"90%"}
          gap={{ lg: "25px", md: "25px", sm: "25px", base: "25px" }}
          alignSelf={"center"}
          alignItems={"center"}
          justifyContent={"center"}
          justifyItems={"center"}
          marginLeft={{ lg: "75px", md: "56px", sm: "40px", base: "20px" }}
          fontSize={{ sm: "16px", base: "12px" }}
        >
          <GridItem>
            <Image
              src={require("../assets/01 purwadhika.png")}
              alt="01 Purwadhika"
              width={{ lg: "300px", md: "250px", sm: "200px" }}
              height="20%"
            />
          </GridItem>
          <GridItem>
            <Image
              src={require("../assets/02 bca a.jpg")}
              alt="02 BCAA"
              width={{ lg: "300px", md: "250px", sm: "200px" }}
              height="20%"
            />
          </GridItem>
          <GridItem
            justifyItems={"center"}
            alignContent={"center"}
            alignItems={"center"}
          >
            <Image
              src={require("../assets/03 Smkn1.png")}
              alt="03 SMKN 1"
              width={{ lg: "150px", md: "100px", sm: "50px" }}
              height={{ lg: "150px", md: "100px", sm: "50px" }}
            />
          </GridItem>
          <GridItem>
            <Text textAlign={"center"}>Purwadhika Coding School</Text>
          </GridItem>
          <GridItem>
            <Text textAlign={"center"}>BCA Academy</Text>
          </GridItem>
          <GridItem>
            <Text textAlign={"center"}>SMKN 1 Batam</Text>
          </GridItem>
          <GridItem>
            <Text textAlign={{ sm: "justify", base: "center" }}>
              Currently studying the IT world where we create a website and our
              own program. I hope to get a very big education and career from
              here.
            </Text>
          </GridItem>
          <GridItem>
            <Text textAlign={{ sm: "justify", base: "center" }}>
              Here I studied various building model designs and their supports.
              The essence of this major is to combine all the designs and
              details into one.
            </Text>
          </GridItem>
          <GridItem>
            <Text textAlign={{ sm: "justify", base: "center" }}>
              Favorite Vocational school where I learn everything with IT. Many
              are tempted because IT is the best, but for myself it's because I
              like IT from a young age.
            </Text>
          </GridItem>
          <GridItem textDecoration={"underline"}>
            <a href="https://purwadhika.com/">Link ke Purwadhika</a>
          </GridItem>
          <GridItem textDecoration={"underline"}>
            <a href="https://www.bcaa.edu.sg/">Link ke BCA Academy</a>
          </GridItem>
          <GridItem textDecoration={"underline"}>
            <a href="https://www.smkn1batam.sch.id/home/">
              Link ke SMKN 1 Batam
            </a>
          </GridItem>
        </Grid>
      </div>
    </Box>
  );
};

export default Education;
