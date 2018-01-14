let express = require('express'),
    app = express();

app.get('/', function(req, res){
    res.send('Heeey');
});

let server = app.listen(3000);
console.log('Server is running on port %s', server.address().port);