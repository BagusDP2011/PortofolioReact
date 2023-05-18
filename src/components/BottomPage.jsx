import { Box, Text } from "@chakra-ui/react";

const BottomPage = () => {
  return (
    <Box
      marginTop={{ lg: "50px", md: "36px", sm: "25px" }}
      paddingX={{ lg: "24px", md: "16px" }}
      bgColor={"lightgray"}
    >
      <Text fontSize={{ sm: "14px", base:"8px" }} textAlign={"center"} paddingTop={"10px"}>
        Portofolio created by <b>Bagus Dwi Putra a.k.a. GusbaXD</b>
      </Text>
    </Box>
  );
};

export default BottomPage;
