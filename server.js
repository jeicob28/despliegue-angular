const express = require('express');
const path = require('path');
const app = express();
const app_path = '/dist/despliegue1';
app.use(express.static(__dirname + app_path));
app.get('/*', function(_, res) {
  res.sendFile(path.join(__dirname, app_path, 'index.html'));
});
app.listen(process.env.PORT || 8080);
