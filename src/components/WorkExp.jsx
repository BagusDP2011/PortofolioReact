import { Box, Grid, GridItem, HStack, Image, Text } from "@chakra-ui/react";

const WorkExp = () => {
  return (
    <Box
      marginTop={{ lg: "50px", md: "36px", sm: "25px" }}
      paddingX={{ lg: "24px", md: "16px" }}
    >
      <div id="workExp">
        <br />
        <Text
          fontSize={{ sm: "24px", base: "16px" }}
          marginLeft={{ sm: "20px", base: "15px" }}
        >
          <b>Working Experience </b>
        </Text>
        <br />
        <Text
          fontSize={{ sm: "20px", base: "12px" }}
          marginLeft={{ sm: "20px", base: "15px" }}
        >
          <b>IT Environment </b>
        </Text>
        <br />
        <Grid
          gridTemplateColumns={"1fr 20fr 20fr 1fr"}
          gap={{ lg: "50px", md: "40px", sm: "30px", base: "20px" }}
          fontSize={{ sm: "18px", base: "10px" }}
        >
          <GridItem></GridItem>
          <GridItem>
            <div id="manufacture">
              <Image
                className="manufactureImg"
                src={require("../assets/it.jpg")}
                alt="IT Departments"
                width={"450px"}
                height={"300px"}
                borderRadius={"10px"}
              />
              <br />
              <div className="manufactureImgTitle">
                <b>IT Skills</b>
              </div>
              <div className="manufactureAbility">Programmer Knowledge :</div>
              <HStack>
                <Grid gridTemplateColumns={"1fr 1fr 1fr 1fr 1fr"} gap={"10px"}>
                  <GridItem>
                    <Image
                      src={require("../assets/language/html5.jpg")}
                      title="HTML5"
                      alt="HTML"
                      width="40px"
                      height="40px"
                    />
                  </GridItem>
                  <GridItem>
                    <Image
                      src={require("../assets/language/css3.jpg")}
                      title="CSS3"
                      alt="CSS"
                      width="40px"
                      height="40px"
                    />
                  </GridItem>
                  <GridItem>
                    <Image
                      src={require("../assets/language/react.jpg")}
                      title="React"
                      alt="React"
                      width="40px"
                      height="40px"
                    />
                  </GridItem>
                  <GridItem>
                    <Image
                      src={require("../assets/language/javascript.jpg")}
                      title="JavaScript"
                      alt="JavaScript"
                      width="40px"
                      height="40px"
                    />
                  </GridItem>
                  <GridItem>
                    <Image
                      src={require("../assets/language/mysql.jpg")}
                      title="MySQL"
                      alt="MySQL"
                      width="40px"
                      height="40px"
                    />
                  </GridItem>
                  <GridItem>
                    <Image
                      src={require("../assets/language/nodejs.jpg")}
                      title="NodeJS"
                      alt="NodeJS"
                      width="40px"
                      height="40px"
                    />
                  </GridItem>
                  <GridItem>
                    <Image
                      src={require("../assets/language/git.jpg")}
                      title="Git"
                      alt="Git"
                      width="40px"
                      height="40px"
                    />
                  </GridItem>
                  <GridItem>
                    <Image
                      src={require("../assets/language/express.jpg")}
                      title="Express"
                      alt="Express"
                      width="40px"
                      height="40px"
                    />
                  </GridItem>
                  <GridItem>
                    <Image
                      src={require("../assets/language/mongodb.jpg")}
                      title="MongoDB"
                      alt="MongoDB"
                      width="40px"
                      height="40px"
                    />
                  </GridItem>
                  <GridItem>
                    <Image
                      src={require("../assets/language/sequelize.jpg")}
                      title="Sequelize"
                      alt="Sequelize"
                      width="40px"
                      height="40px"
                    />
                  </GridItem>
                </Grid>
              </HStack>
              <br />
              <Box>
                <Text>Software Skills:</Text>
                <HStack>
                  <Grid
                    gridTemplateColumns={"1fr 1fr 1fr 1fr 1fr"}
                    gap={"10px"}
                  >
                    <GridItem>
                      <Image
                        src={require("../assets/software/AutoCAD.jpg")}
                        title="AutoCAD"
                        alt="AutoCAD"
                        width="40px"
                        height="40px"
                      />
                    </GridItem>
                    <GridItem>
                      <Image
                        src={require("../assets/software/revit.jpg")}
                        title="Revit"
                        alt="Revit"
                        width="40px"
                        height="40px"
                      />
                    </GridItem>
                    <GridItem>
                      <Image
                        src={require("../assets/software/office.jpg")}
                        title="Ms. Office"
                        alt="Ms. Office"
                        width="40px"
                        height="40px"
                      />
                    </GridItem>
                    <GridItem>
                      <Image
                        src={require("../assets/software/windows_11.jpg")}
                        title="Windows Operating System"
                        alt="Windows Operating System"
                        width="40px"
                        height="40px"
                      />
                    </GridItem>
                    <GridItem>
                      <Image
                        src={require("../assets/software/network.jpg")}
                        title="Physical Network Connection"
                        alt="Physical Network Connection"
                        width="40px"
                        height="40px"
                      />
                    </GridItem>
                    <GridItem>
                      <Image
                        src={require("../assets/software/browser.jpg")}
                        title="Internet connection troubleshoot"
                        alt="Internet connection troubleshoot"
                        width="40px"
                        height="40px"
                      />
                    </GridItem>
                    <GridItem>
                      <Image
                        src={require("../assets/software/photoshop.jpg")}
                        title="Photoshop 2022"
                        alt="Photoshop 2022"
                        width="40px"
                        height="40px"
                      />
                    </GridItem>
                    <GridItem>
                      <Image
                        src={require("../assets/software/filmora.jpg")}
                        title="Wondershare Filmora 12"
                        alt="Wondershare Filmora 12"
                        width="40px"
                        height="40px"
                      />
                    </GridItem>
                    <GridItem>
                      <Image
                        src={require("../assets/software/vscode.jpg")}
                        title="Visual Studio Code"
                        alt="Visual Studio Code"
                        width="40px"
                        height="40px"
                      />
                    </GridItem>
                  </Grid>
                </HStack>
              </Box>
            </div>
          </GridItem>
          <GridItem textAlign={"justify"}>
            <div className="kosong" />
            <div className="workDetails">
              <b> GRIP PRINCIPLE PTE. LTD. – Batam, Indonesia </b>
              <br />
              Junior Backend Developer (January 2023 – April 2023)
              <br />
              <ul>
                <li>
                  Understanding Figma design: Design from our UI/UX designer, I
                  change it to logical pseudocode and write it on IDE (Visual
                  Code Studio)
                </li>
                <li>
                  Writing and testing code: Responsible for writing code that
                  runs on the server-side of a web application or service.
                  Proficient in programming language such as Javascript and
                  familiar with web development frameworks and libraries such as
                  NodeJs and ExpressJs. Also be comfortable writing automated
                  tests using Jest to ensure the quality of their code.
                </li>
                <li>
                  Designing and maintaining databases: Responsible for designing
                  and maintaining databases that store the data used by web
                  applications. Familiar with relational databases such as MySQL
                  as well as NoSQL databases such as MongoDB.
                </li>
                <li>
                  Collaborating with other developers: Backend developers often
                  work closely with front-end developers, designers, and project
                  managers to deliver web applications that meet business
                  requirements. Good communication and collaboration skills are
                  essential.
                </li>
              </ul>
            </div>
          </GridItem>
          <GridItem></GridItem>
        </Grid>
        <br />
        <br />
        <Text
          fontSize={{ sm: "20px", base: "12px" }}
          marginLeft={{ sm: "20px", base: "15px" }}
        >
          <b>Manufacturing Environment </b>
        </Text>
        <br />
        <Grid
          gridTemplateColumns={"1fr 20fr 20fr 1fr"}
          gap={{ lg: "50px", md: "40px", sm: "30px", base: "20px" }}
          fontSize={{ sm: "18px", base: "10px" }}
        >
          <GridItem></GridItem>
          <GridItem textAlign={"justify"}>
            <div className="kosong" />
            <div className="workDetails">
              <b> PT TREMCO TRYSPECTRA – Batam, Indonesia </b>
              <br />
              Sales &amp; Service Engineer (October 2021 – July 2022)
              <br />
              <ul>
                <li>
                  Study customer need and requirements for item that is in
                  query, do researches on the specs and then send to Procurement
                  Team. After that send the quotation to customer and do follow
                  up until purchase order is created by customer.
                </li>
                <li>
                  Learn spare part or machines by manual, catalog, and websites
                  before having the machine on-site. When machine is ready, do
                  overall check and followed by training customer on every
                  detail of the machine until customer issued a buy off report.
                </li>
                <li>
                  Visit customer and local companies that sell 2nd hand machine
                  to do check, troubleshoot, and contribute idea on how to
                  improve the machines and analyze the machine worth to invest.
                </li>
                <li>
                  Create a complete report with the issue and what have been
                  tried during troubleshoot of the machine for customer included
                  during buy off report.
                </li>
              </ul>
              <br />
              <b> PREMTRONIC SDN BHD – Batam, Indonesia </b> <br />
              Junior Service Engineer (February 2020 - September 2021)
              <br />
              <ul>
                <li>Responds based to customer request or complaints.</li>
                <li>
                  Do checking after machine arrives and assists to place the
                  machine in line and do installation of the equipment.
                </li>
                <li>
                  Analyzes, inspects and reviews findings to determine the
                  problem the customer demands. Evaluates and resolves solution
                  to the customer.
                </li>
                <li>
                  Coordinate work with technical sales and document control
                  team.
                </li>
              </ul>
            </div>
          </GridItem>
          <GridItem>
            <div id="manufacture">
              <div>
                <Image
                  className="manufactureImg"
                  src={require("../assets/PCBA.jpg")}
                  alt="PBCA Electronics"
                  width={"450px"}
                  height={"300px"}
                  borderRadius={"10px"}
                />
              </div>
              <br />
              <div className="manufactureImgTitle">
                PCBA Electronics Manufacturing
              </div>
              <div className="manufactureAbility"> Machine Knowledge :</div>
              <div id="machineList">
                <div className="kosong" />
                <div>
                  <ul>
                    <li>Pemtron Korea: Inline 3D SPI &amp; Inline 3D AOI</li>
                    <li>Foresite USA: Critical Cleanliness Control</li>
                    <li>Sunmenta China: Stencil Inspection System</li>
                    <li>Sinik-tek China: Offline 3D AOI</li>
                  </ul>
                </div>
                <div className="kosong" />
              </div>
            </div>
            <div className="kosong" />
          </GridItem>
        </Grid>
      </div>
    </Box>
  );
};

export default WorkExp;
