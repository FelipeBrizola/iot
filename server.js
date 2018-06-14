let express = require('express'),
    app = express();

app.get('/', (req, res) => {
    res.send('xala 2');
  console.log('c');
});

app.listen(3000);
