import {
  Box,
  Button,
  Stack,
  Text,
  Image,
  HStack,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import BagusDP from "../assets/BagusDP.jpg";
import "../App.css";

const Intro = () => {
  return (
    <div id="mainpage">
      <Box paddingX={{ md: "16px", lg: "20px" }} paddingTop={"20px"}>
        <Grid
          gridTemplateColumns={"1fr 10fr 10fr 1fr"}
          alignSelf={"center"}
          alignItems={"center"}
          alignContent={"center"}
          alignPosition={"center"}
          textAlign={"center"}
          justifyContent={"center"}
          justifyItems={"center"}
        >
          <GridItem></GridItem>
          <GridItem>
            <Image
              src={BagusDP}
              layout="fill"
              alt="BagusDP"
              objectFit="cover"
              width={{ sm: "250px", md: "300px", lg: "500px" }}
              borderRadius={"10%"}
            />
          </GridItem>
          <GridItem>
            <Stack alignSelf="right" spacing={{ sm: 2, md: 3, lg: 4 }}>
              <Box>
                <Text
                  className="titleName"
                  fontSize={{ lg: "30px", md: "24px", sm: "18px", base:"15px" }}
                  fontFamily="Inter"
                  fontWeight="bold"
                >
                  Bagus Dwi Putra
                </Text>
                <Text
                  className="titleSub"
                  fontSize={{ lg: "26px", md: "20px", sm: "15px", base:"12px" }}
                >
                  An IT Enthusiast
                </Text>
                <Text
                  fontWeight="bold"
                  fontSize={{ lg: "20px", md: "18px", sm: "12px", base:"10px" }}
                >
                  Contact Details
                </Text>
                <Text fontSize={{ lg: "20px", md: "18px", sm: "10px", base:"8px" }}>
                  Batam, Kepulauan Riau <br />
                  Phone/WhatsApp: 081278732817 <br />
                  Email: bagusdp2011@email.com <br />
                  <br />
                </Text>

                <Text
                  className="titleDesc"
                  fontSize={{ lg: "20px", md: "18px", sm: "10px", base:"8px"}}
                  textAlign={"left"}
                  marginLeft={{ lg: "30px", md: "20px", sm: "10px" }}
                >
                  <div className="contactMe">
                    <div className="contactMeTitle">
                      <b>Talk to me!</b>
                    </div>
                    <div className="contactMeText"> Contacts Links:</div>
                    <div classname="contactLinksDiv">
                      <HStack>
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                          alt="LinkedIn"
                          width="20px"
                          height="20px"
                        />
                        <a
                          href="https://www.linkedin.com/in/bagus-dwi-putra/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          LinkedIn profile to bagus-dwi-putra
                        </a>
                      </HStack>
                    </div>
                    <div classname="contactLinksDiv">
                      <HStack>
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Gmail_Icon_%282013-2020%29.svg/2560px-Gmail_Icon_%282013-2020%29.svg.png"
                          alt="Gmail"
                          width="20px"
                          height="20px"
                        />
                        <a
                          href="mailto:bagusdp2011@gmail.com"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Email me an offer to bagusdp2011@gmail.com
                        </a>
                      </HStack>
                    </div>
                    <div classname="contactLinksDiv">
                      <HStack>
                        <img
                          src="https://seeklogo.com/images/W/whatsapp-icon-logo-BDC0A8063B-seeklogo.com.png"
                          alt="WhatsApp"
                          width="20px"
                          height="20px"
                        />
                        <a
                          href="http://wa.me/+6281278732817"
                          target="_blank"
                          rel="noreferrer"
                        >
                          WhatsApp me a schedule to +6281278732817
                        </a>
                      </HStack>
                    </div>
                    <div classname="contactLinksDiv">
                      <HStack>
                        <img
                          src="https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png"
                          alt="GitHub"
                          width="30px"
                          height="30px"
                        />
                        <a
                          href="https://github.com/BagusDP2011"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Spy my GitHub
                        </a>
                      </HStack>
                    </div>
                    <div classname="contactLinksDiv">
                      <HStack>
                        <img
                          src="https://dabhobbies.com/wp-content/uploads/2021/01/linktree-logo-350px.jpg"
                          alt="LinkTree"
                          width="20px"
                          height="20px"
                        />
                        <a
                          href="https://linktr.ee/bagusdp2011"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Visit my LinkTree
                        </a>
                      </HStack>
                    </div>
                  </div>
                </Text>
              </Box>
              <Button
                onClick={() =>
                  window.open("https://goo.gl/maps/1p3mzMjZx5t9nJFEA")
                }
                alignSelf="center"
                colorScheme="blackAlpha"
                width={{ sm: "100px", base:"50px" }}
                height={{ sm: "50px", base:"25px" }}
                fontSize={{ sm: "16px", base:"8px" }}
              >
                Visit Me
              </Button>
            </Stack>
          </GridItem>
          <GridItem></GridItem>
        </Grid>
      </Box>
    </div>
  );
};

export default Intro;
