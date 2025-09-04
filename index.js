// index.js
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello CI!'));

const port = process.env.PORT || 3000;
if (require.main === module) {
  app.listen(port, () => console.log(`Listening on ${port}`));
}
module.exports = app; // exported for tests
