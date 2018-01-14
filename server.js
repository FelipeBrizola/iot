let express = require('express'),
    app = express(),
    server;

app.get('/', (req, res) => {
    res.send('Heeey');
});

server = app.listen(3000);