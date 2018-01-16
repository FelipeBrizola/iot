let express = require('express'),
    app = express();

app.get('/', (req, res) => {
    res.send('Hey!!!!!');
});

app.listen(3000);