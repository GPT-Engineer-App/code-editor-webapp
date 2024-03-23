import React, { useEffect } from 'react';

const CodeHighlighter = ({ children, fileType }) => {
    useEffect(() => {
    // Function to load the Highlight.js library and apply highlighting
    const loadAndHighlight = () => {
      if (window.hljs) {
        // If hljs is already available, just highlight
        window.hljs.highlightAll();
      } else {
        // If hljs is not available, load it and then highlight
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js';
        script.onload = () => {
          window.hljs.highlightAll();
        };
        document.head.appendChild(script);
      }
    };

    // Load the Highlight.js CSS only if it hasn't been loaded yet
    if (!document.querySelector('link[href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-dark.min.css"]')) {
      const styleLink = document.createElement('link');
      styleLink.rel = 'stylesheet';
      styleLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-dark.min.css';
      document.head.appendChild(styleLink);
    }

    // Apply highlighting
    loadAndHighlight();

  }, [fileType, children]); // Dependency array includes fileType and children to re-run effect on change


  // Add the language class to the code element
  const languageClass = fileType ? `language-${fileType}` : '';

  return (
    <pre>
      <code className={languageClass}>{children}</code>
    </pre>
  );
};

export default CodeHighlighter;
