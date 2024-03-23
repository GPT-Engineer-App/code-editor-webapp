const mockFiles = {
  "index.html": `<!DOCTYPE html>
<html>
  <head>
    <title>My Web App</title>
  </head>
  <body>
    <h1>Welcome to my web app!</h1>
    <p>This is a simple web app.</p>
    <script src="app.js"></script>
  </body>
</html>`,
  "app.js": `console.log("Hello, World!");`,
  "styles/main.css": `body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

h1 {
  color: #333;
}`,
  "README.md": `# My Web App
    
    This is a simple web application.
    
    ## Installation
    
    1. Clone the repository
    2. Open index.html in your browser`,
};

export default mockFiles;
