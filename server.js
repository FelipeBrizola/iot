let express = require('express'),
    app = express();

app.get('/', (req, res) => {
    res.send('xala 2');
});

app.listen(3000);
