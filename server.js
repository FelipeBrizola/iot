let express = require('express'),
    app = express();

app.get('/', (req, res) => {
    res.send('xala 1');
});

app.listen(3000);
