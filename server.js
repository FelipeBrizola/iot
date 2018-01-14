let express = require('express'),
    app = express();

app.get('/', (req, res) => {
    res.send('Heeey');
});

app.listen(3000);