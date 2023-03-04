const express = require('express');
const path = require('path');
const port = 4000;
const app = express();

// serve static assets normally
app.use(express.static(__dirname + '/01.Furniture'));

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname + "/01.Furniture", 'index.html'));
});

app.listen(port);
console.log("server started on port " + port);
