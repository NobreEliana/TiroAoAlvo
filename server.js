const express = require('express');
const app = express();

// Run the app by serving the static files in the dist directory
app.use(express.static(__dirname + '/dist'));

// Start the app by listening on the default
app.listen(4202, () => {
  console.log('Tiro ao Alvo APP is running in port' + process.env.PORT + 'or 4202');
  });
