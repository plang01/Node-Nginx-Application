const express = require("express");
const path = require("path");

const app = express();
const app2 = express();

// Serve static files
app.use(express.static(path.join(__dirname, "public")));
app2.use(express.static(path.join(__dirname, "public")));

const PORT = 4000; 
const PORT2= 3000; 

app.listen(PORT);
app2.listen(PORT2);

console.log(`Server running on port ${PORT}`);
console.log(`Server running on port ${PORT2}`);