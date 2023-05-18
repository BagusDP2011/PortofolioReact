import { Box, Text } from "@chakra-ui/react";

const ProfessionalSumm = () => {
  return (
    <Box
      marginTop={{ lg: "50px", md: "36px", sm: "25px" }}
      paddingX={{ lg: "24px", md: "16px" }}
      id="proSumm"
    >
      <Text fontSize="26px">
        <b>Professional Summary </b>
      </Text>
      <br />
      <Box width={"95%"} textAlign={"justify"}>
        <Text marginLeft={{ lg: "75px", md: "56px", sm: "40px" }}>
        As an experienced Field Service Engineer, I have a strong skill set in 
        performing troubleshooting and operational tasks on various types of 
        equipment and machines. My focus is on providing excellent customer 
        service, and I have completed multiple successful projects in this field. I 
        am always looking for new challenges and opportunities to further develop 
        my analytical mindset and improve my skills. Currently, I am interested in 
        shifting my career to IT programming, with a particular focus on full-stack 
        development, front-end development, or back-end development. I am committed 
        to continuous learning and staying up-to-date with the latest trends and 
        best practices in the industry.
        </Text>
      </Box>
    </Box>
  );
};

export default ProfessionalSumm;
