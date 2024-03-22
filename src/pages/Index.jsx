import React from "react";

const getLanguageClass = (fileName) => {
  const extension = fileName.split(".").pop();
  const languageMap = {
    js: "javascript",
    jsx: "javascript",
    ts: "typescript",
    tsx: "typescript",
    html: "xml",
    css: "css",
    md: "markdown",
    json: "json",
    txt: "plaintext",
  };
  return languageMap[extension] || "plaintext";
};

const Index = () => {
  return <div>{}</div>;
};

export default Index;
