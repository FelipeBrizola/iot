let express = require('express'),
    app = express();

app.get('/', (req, res) => {
    res.send('xala');
});

app.listen(3000);