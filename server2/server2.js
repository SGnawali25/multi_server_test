const express = require('express');

const app = express();
const PORT = 3002;

// Simple route for demonstration
app.get('/', (req, res) => {
    res.send(`Hello server test from server 2`);
  });

app.get("/test", (req, res) => {
    res.send("Different route test from server 2")
})

app.get("/test1", (req, res) => {
    res.send("route test1 from server 2")
})
  
// Start the server
app.listen(PORT, () => {
    console.log(`Express server is running on port ${PORT}`);
});
