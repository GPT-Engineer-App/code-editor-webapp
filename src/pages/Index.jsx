import React, { useState } from "react";
import { Box, Flex, Heading, Text, Input, IconButton, useColorMode, useColorModeValue, VStack, HStack, Divider, Icon, Spacer, Tooltip, CloseButton } from "@chakra-ui/react";
import { FaFile, FaEdit, FaMousePointer, FaEye, FaPlay, FaSearch, FaFolder, FaCode, FaGitAlt, FaBug, FaPuzzlePiece } from "react-icons/fa";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isFileOpen, setIsFileOpen] = useState(true);
  const bgColor = useColorModeValue("gray.100", "gray.900");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const iconColor = useColorModeValue("gray.600", "gray.400");

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
        <HStack spacing={4}>
          <Tooltip label="New File">
            <IconButton icon={<FaFile />} variant="ghost" color={iconColor} aria-label="New File" />
          </Tooltip>
          <Tooltip label="Edit">
            <IconButton icon={<FaEdit />} variant="ghost" color={iconColor} aria-label="Edit" />
          </Tooltip>
          <Tooltip label="Selection">
            <IconButton icon={<FaMousePointer />} variant="ghost" color={iconColor} aria-label="Selection" />
          </Tooltip>
          <Tooltip label="View">
            <IconButton icon={<FaEye />} variant="ghost" color={iconColor} aria-label="View" />
          </Tooltip>
          <Tooltip label="Run">
            <IconButton icon={<FaPlay />} variant="ghost" color={iconColor} aria-label="Run" />
          </Tooltip>
        </HStack>
        <Spacer />
        <Input placeholder="Search" size="sm" width="200px" bg={useColorModeValue("white", "gray.800")} color={useColorModeValue("gray.800", "white")} />
      </Flex>
      <Flex as="main" height="calc(100vh - 60px)">
        <VStack as="aside" width="60px" bg={useColorModeValue("gray.200", "gray.800")} p={2} spacing={4} align="center">
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
        <VStack as="section" width="300px" bg={useColorModeValue("white", "gray.900")} p={4} spacing={2} align="stretch">
          <Heading size="md">Explorer</Heading>
          <Divider />
          <Text>📁 my-app</Text>
          <Text pl={4}>📄 index.html</Text>
          <Text pl={4}>📄 app.js</Text>
          <Text pl={4}>📁 styles</Text>
          <Text pl={8}>📄 main.css</Text>
        </VStack>
        <Box flex={1} p={4}>
          {isFileOpen && (
            <Box borderWidth={1} borderColor={borderColor} borderRadius="md" p={4}>
              <Flex justify="space-between" align="center" mb={4}>
                <Heading size="md">index.html</Heading>
                <CloseButton onClick={() => setIsFileOpen(false)} />
              </Flex>
              <Box as="pre" bg={useColorModeValue("gray.100", "gray.800")} p={4} borderRadius="md" color={useColorModeValue("gray.800", "white")}>
                {mockCode}
              </Box>
            </Box>
          )}
        </Box>
      </Flex>
    </Box>
  );
};

export default Index;
