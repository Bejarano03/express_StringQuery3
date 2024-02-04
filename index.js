const express = require('express');
const app = express();
const port = 3000;

app.get('/user/:username', (req, res) => {
  res.send('Hello ' + req.params.username);
});

app.get('*', (req, res) => {
    res.send('404 Page Not Found');
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});