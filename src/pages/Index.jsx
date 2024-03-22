import React, { useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { FaFile, FaFolder } from "react-icons/fa";
import mockFiles from "../mockFiles";

const Index = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileClick = (fileName) => {
    setSelectedFile(fileName);
  };

  return (
    <Flex h="100vh">
      {}
      <Box bg="gray.800" w="100%" p={4}>
        <Text fontSize="xl" fontWeight="bold" color="white">
          My Web App
        </Text>
      </Box>

      {}
      <Box bg="gray.700" w="300px" p={4}>
        <Text fontSize="lg" fontWeight="bold" mb={4} color="white">
          Files
        </Text>
        {Object.keys(mockFiles).map((fileName) => (
          <Flex key={fileName} alignItems="center" p={2} cursor="pointer" _hover={{ bg: "gray.600" }} onClick={() => handleFileClick(fileName)}>
            {fileName.includes(".") ? <FaFile color="white" /> : <FaFolder color="white" />}
            <Text ml={2} color="white">
              {fileName}
            </Text>
          </Flex>
        ))}
      </Box>

      {}
      <Box flex={1} p={4}>
        {selectedFile && (
          <Box>
            <Text fontSize="lg" fontWeight="bold" mb={4}>
              {selectedFile}
            </Text>
            <Box p={4} bg="gray.100" borderRadius="md" color="black" whiteSpace="pre-wrap">
              {mockFiles[selectedFile]}
            </Box>
          </Box>
        )}
      </Box>
    </Flex>
  );
};

export default Index;
