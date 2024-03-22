import React, { useState } from "react";
import mockFiles from "../mockFiles";
import { Box, Flex, Heading, Text, Input, Button, useColorMode, useColorModeValue, VStack, HStack, Divider, Icon, Spacer, Tooltip, CloseButton } from "@chakra-ui/react";
import { FaFile, FaEdit, FaMousePointer, FaEye, FaPlay, FaSearch, FaFolder, FaCode, FaGitAlt, FaBug, FaPuzzlePiece } from "react-icons/fa";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [selectedFile, setSelectedFile] = useState("index.html");
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
          <Button variant="ghost" bg="#005ce6" color="white" boxShadow="0 0 5px rgba(255, 255, 255, 0.3)" _hover={{ boxShadow: "0 0 8px rgba(255, 255, 255, 0.4)" }}>
            Run
          </Button>
        </HStack>
        <Spacer />
        <Input placeholder="Search" size="sm" width="200px" bg={useColorModeValue("white", "gray.800")} color={useColorModeValue("gray.800", "white")} />
      </Flex>
      <Flex as="main" minHeight="calc(100vh - 60px)" flex={1}>
        <VStack as="aside" width="60px" bg={useColorModeValue("gray.200", "gray.900")} p={2} spacing={6} align="center">
          <Tooltip label="Explorer" placement="right">
            <Icon as={FaFolder} color="white" boxSize={6} filter="drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.3))" />
          </Tooltip>
          <Tooltip label="Search" placement="right">
            <Icon as={FaSearch} color={iconColor} boxSize={6} filter="drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.3))" />
          </Tooltip>
          <Tooltip label="Git" placement="right">
            <Icon as={FaGitAlt} color={iconColor} boxSize={6} filter="drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.3))" />
          </Tooltip>
          <Tooltip label="Debugging" placement="right">
            <Icon as={FaBug} color={iconColor} boxSize={6} filter="drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.3))" />
          </Tooltip>
          <Tooltip label="Extensions" placement="right">
            <Icon as={FaPuzzlePiece} color={iconColor} boxSize={6} filter="drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.3))" />
          </Tooltip>
        </VStack>
        <VStack as="section" width="300px" bg={useColorModeValue("gray.100", "gray.800")} p={4} spacing={2} align="stretch">
          <Heading size="md">Explorer</Heading>
          <Divider />
          <Text>📁 my-app</Text>
          {Object.entries(mockFiles).map(([fileName, fileContent]) => (
            <Text key={fileName} pl={fileName.split("/").length * 4} cursor="pointer" onClick={() => setSelectedFile(fileName)}>
              {fileName.split("/").pop()}
            </Text>
          ))}
        </VStack>
        <Box flex={1} p={4} bg={useColorModeValue("gray.200", "gray.700")}>
          {mockFiles[selectedFile] ? (
            <Box borderWidth={1} borderColor={borderColor} borderRadius="md" bg={useColorModeValue("gray.200", "gray.700")} p={2}>
              <Flex align="center" mb={2}>
                <Text fontSize="lg" fontWeight="bold" mr={2}>
                  {selectedFile}
                </Text>
                <Spacer />
                <CloseButton size="sm" onClick={() => setSelectedFile(null)} />
              </Flex>
              <Box p={2}>
                <Flex>
                  <Box as="pre" p={4} borderRadius="md" color="white" width="40px" textAlign="right" mr={2}>
                    {mockFiles[selectedFile].split("\n").map((_, index) => (
                      <Text key={index}>{index + 1}</Text>
                    ))}
                  </Box>
                  <Box as="pre" p={4} borderRadius="md" flex={1}>
                    {mockFiles[selectedFile].split("\n").map((line, index) => {
                      let color = "white";
                      let fontStyle = "normal";
                      let fontWeight = "normal";
                      let textDecoration = "none";

                      if (selectedFile.endsWith(".css")) {
                        if (line.match(/^[.#]?\w+/)) {
                          color = "blue.500";
                        } else if (line.match(/^\s+\w+:/)) {
                          color = "green.500";
                        } else if (line.match(/:\s*[\w#]+;/)) {
                          color = "red.500";
                        } else if (line.match(/\.[a-zA-Z][\w-]+/)) {
                          color = "orange.500";
                          fontStyle = "bold";
                        } else if (line.match(/#[a-zA-Z][\w-]+/)) {
                          color = "blue.800";
                          fontStyle = "bold";
                        } else if (line.match(/\/\*/)) {
                          color = "gray.500";
                          fontStyle = "italic";
                        } else if (line.match(/@\w+/)) {
                          color = "purple.500";
                        } else if (line.match(/[{}\[\]]/)) {
                          color = "blue.500";
                        } else if (line.match(/\w+:\s*(?![\w#]+;)/)) {
                          color = "pink.200";
                          textDecoration = "underline";
                        }
                      } else if (selectedFile.endsWith(".html")) {
                        if (line.match(/<\/?[a-z][^>]*>/i)) {
                          color = "blue.500";
                        } else if (line.match(/\s[a-z][^=]*=/i)) {
                          color = "red.500";
                        } else if (line.match(/=\s*"[^"]*"/)) {
                          color = "green.500";
                        } else if (line.match(/<!--.*?-->/)) {
                          color = "gray.500";
                          fontStyle = "italic";
                        } else {
                          color = "black";
                        }
                      }

                      return (
                        <Text key={index} color={color} fontStyle={fontStyle} fontWeight={fontWeight} textDecoration={textDecoration}>
                          {line}
                        </Text>
                      );
                    })}
                  </Box>
                </Flex>
              </Box>
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
