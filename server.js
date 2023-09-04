const express = require('express');
const app = express();
const port = process.env.PORT || 3000; 

app.use(express.static('public'));

// Start the server and make sure it's running
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
