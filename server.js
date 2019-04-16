const express = require('express');
const app = express();


app.use(express.static(__dirname + '/dist/swapi'));

app.get('/*', (req, res) => {
	res.sendFile(__dirname + '/dist/swapi/index.html');
});

app.listen(process.env.PORT || 7009);
