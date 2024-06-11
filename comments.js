// Create web server
// 1. Load the express module
const express = require('express');
// 2. Create an instance of the express module
const app = express();
// 3. Set the port
const port = 3000;
// 4. Create a route
app.get('/', (req, res) => {
    res.send('Hello World!');
});
// 5. Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
// 6. Test the server
// Open the browser and go to http://localhost:3000/
// The browser should display "Hello World!"
