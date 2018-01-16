let express = require('express'),
    app = express();

app.get('/', (req, res) => {
    res.send('xalalal')
});

app.listen(3000);