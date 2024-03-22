import React, { useState, useRef } from "react";
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

  const [editMode, setEditMode] = useState(false);
  const [editedContent, setEditedContent] = useState("");
  const editorRef = useRef(null);

  const handleEditorClick = () => {
    setEditMode(true);
    setEditedContent(mockFiles[selectedFile]);
  };

  const handleSave = () => {
    const updatedFiles = { ...mockFiles, [selectedFile]: editedContent };

    console.log("Updated files:", updatedFiles);
    setEditMode(false);
  };

  return (
    <Box bg={bgColor} minH="100vh" color="white">
      {}
      <Flex as="main" height="calc(100vh - 60px)">
        {}
        <Box flex={1} p={4}>
          {mockFiles[selectedFile] ? (
            <Box borderWidth={1} borderColor={borderColor} borderRadius="md" p={4}>
              <Flex justify="space-between" align="center" mb={4}>
                <Heading size="md">{selectedFile}</Heading>
                {editMode && (
                  <Button colorScheme="blue" size="sm" onClick={handleSave}>
                    Save
                  </Button>
                )}
              </Flex>
              <Flex>
                <Box as="pre" bg={useColorModeValue("gray.200", "gray.600")} p={4} borderRadius="md" color={useColorModeValue("gray.800", "white")} width="40px" textAlign="right" mr={2}>
                  {mockFiles[selectedFile].split("\n").map((_, index) => (
                    <Text key={index}>{index + 1}</Text>
                  ))}
                </Box>
                {editMode ? (
                  <Box flex={1}>
                    <textarea
                      ref={editorRef}
                      value={editedContent}
                      onChange={(e) => setEditedContent(e.target.value)}
                      style={{
                        width: "100%",
                        height: "100%",
                        border: "none",
                        resize: "none",
                        outline: "none",
                        backgroundColor: useColorModeValue("gray.100", "gray.700"),
                        color: useColorModeValue("gray.800", "white"),
                        padding: "1rem",
                        borderRadius: "0.375rem",
                        fontFamily: "monospace",
                      }}
                    />
                  </Box>
                ) : (
                  <Box as="pre" bg={useColorModeValue("gray.100", "gray.700")} p={4} borderRadius="md" flex={1} onClick={handleEditorClick}>
                    {}
                  </Box>
                )}
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
