const express = require('express');
const app = express();
const cors = require('cors');
// const path = require('path');

app.use(express.json());
app.use(cors());
app.use(express.static('./build'));

/*
app.use('/test', express.static(path.join(__dirname+'/status_codes')));
app.get('/test', (req, res) => {
  res.sendFile(path.join(__dirname+'/status_codes/410.html'));
});
*/

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
