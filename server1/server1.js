const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;

app.use('/static', express.static(path.join(__dirname, 'public')));


// Simple route for demonstration
app.get('/', (req, res) => {
    res.send(`
    <html>
      <body>
        <h1>Hello from the Server 1</h1>
        <img src="/static/images/server1.jpeg" alt="Example Image"/>
      </body>
    </html>
  `);
  });


app.get("/test", (req, res) => {
    res.send("Different route test from server 1")
})

app.get("/test1", (req, res) => {
    res.send("route test1 from server 1")
})
  
// Start the server
app.listen(PORT, () => {
    console.log(`Express server is running on port ${PORT}`);
});
