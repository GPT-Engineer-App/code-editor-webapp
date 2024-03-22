import React, { useState } from "react";
import mockFiles from "../mockFiles";
import { Box, Flex, Heading, Text, Input, Button, useColorMode, useColorModeValue, VStack, HStack, Divider, Icon, Spacer, Tooltip, CloseButton } from "@chakra-ui/react";
import { FaFile, FaEdit, FaMousePointer, FaEye, FaPlay, FaSearch, FaFolder, FaCode, FaGitAlt, FaBug, FaPuzzlePiece } from "react-icons/fa";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [selectedFile, setSelectedFile] = useState(null);
  const bgColor = useColorModeValue("gray.100", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const iconColor = useColorModeValue("gray.600", "gray.500");

  const mockCode = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>My Web App</title>
      </head>
      <body>
        <h1>Welcome to my web app!</h1>
        <p>This is a simple web app.</p>
        <script src="app.js"></script>
      </body>
    </html>
  `;

  return (
    <Box bg={bgColor} minH="100vh" color="white">
      <Flex as="header" align="center" px={4} py={2} borderBottomWidth={1} borderColor={borderColor}>
        <HStack spacing={2}>
          <Button variant="ghost" color={iconColor}>
            File
          </Button>
          <Button variant="ghost" color={iconColor}>
            Edit
          </Button>
          <Button variant="ghost" color={iconColor}>
            Selection
          </Button>
          <Button variant="ghost" color={iconColor}>
            View
          </Button>
          <Button variant="ghost" color={iconColor}>
            Run
          </Button>
        </HStack>
        <Spacer />
        <Input placeholder="Search" size="sm" width="200px" bg={useColorModeValue("white", "gray.800")} color={useColorModeValue("gray.800", "white")} />
      </Flex>
      <Flex as="main" height="calc(100vh - 60px)">
        <VStack as="aside" width="60px" bg={useColorModeValue("gray.200", "gray.900")} p={2} spacing={4} align="center">
          <Tooltip label="Explorer" placement="right">
            <Icon as={FaFolder} color={iconColor} boxSize={6} />
          </Tooltip>
          <Tooltip label="Search" placement="right">
            <Icon as={FaSearch} color={iconColor} boxSize={6} />
          </Tooltip>
          <Tooltip label="Git" placement="right">
            <Icon as={FaGitAlt} color={iconColor} boxSize={6} />
          </Tooltip>
          <Tooltip label="Debugging" placement="right">
            <Icon as={FaBug} color={iconColor} boxSize={6} />
          </Tooltip>
          <Tooltip label="Extensions" placement="right">
            <Icon as={FaPuzzlePiece} color={iconColor} boxSize={6} />
          </Tooltip>
        </VStack>
        <VStack as="section" width="300px" bg={useColorModeValue("white", "gray.700")} p={4} spacing={2} align="stretch">
          <Heading size="md">Explorer</Heading>
          <Divider />
          <Text>📁 my-app</Text>
          {Object.entries(mockFiles).map(([fileName, fileContent]) => (
            <Text key={fileName} pl={fileName.split("/").length * 4} cursor="pointer" onClick={() => setSelectedFile(fileName)}>
              {fileName.split("/").pop()}
            </Text>
          ))}
        </VStack>
        <Box flex={1} p={4}>
          {selectedFile ? (
            <Box borderWidth={1} borderColor={borderColor} borderRadius="md" p={4}>
              <Heading size="md" mb={4}>
                {selectedFile}
              </Heading>
              <Flex>
                <Box as="pre" bg={useColorModeValue("gray.200", "gray.600")} p={4} borderRadius="md" color={useColorModeValue("gray.800", "white")} width="40px" textAlign="right" mr={2}>
                  {mockFiles[selectedFile].split("\n").map((_, index) => (
                    <Text key={index}>{index + 1}</Text>
                  ))}
                </Box>
                <Box as="pre" bg={useColorModeValue("gray.100", "gray.700")} p={4} borderRadius="md" flex={1}>
                  {mockFiles[selectedFile].split("\n").map((line, index) => {
                    let color = "white";
                    if (line.includes("<!DOCTYPE") || line.includes("<html") || line.includes("<head") || line.includes("<body") || line.includes("<h1") || line.includes("<p")) {
                      color = "blue.500";
                    } else if (line.includes("title") || line.includes("script")) {
                      color = "green.500";
                    } else if (line.includes("My Web App") || line.includes("This is a simple web app.") || line.includes("app.js")) {
                      color = "red.500";
                    } else if (line.includes("<!--")) {
                      color = "gray.500";
                    }
                    return (
                      <Text key={index} color={color}>
                        {line}
                      </Text>
                    );
                  })}
                </Box>
              </Flex>
            </Box>
          ) : (
            <Text>Select a file to view its contents.</Text>
          )}
        </Box>
      </Flex>
    </Box>
  );
};

export default Index;
