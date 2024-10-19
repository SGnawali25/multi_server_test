const express = require('express');

const app = express();
const PORT = 3001;

// Simple route for demonstration
app.get('/', (req, res) => {
    res.send(`Hello from Express server running on port ${PORT}`);
  });


app.get("/test", (req, res) => {
    res.send("Different route test from server1")
})
  
// Start the server
app.listen(PORT, () => {
    console.log(`Express server is running on port ${PORT}`);
});
