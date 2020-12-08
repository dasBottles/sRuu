const express = require('express'),
    request = require('request');
    app = express(),
    PORT = process.env.PORT || 3001

app.get('/api', (req, res) => {
    request('http://api.weatherstack.com/current?access_key=8a747a156255f6d612d773fd4a08b181&query=Fairfield&units=f', (err, response, body) => {
        if (!err && response.statusCode == 200) {
            let parsedBody = JSON.parse(body);
            res.send(parsedBody);
        }
    }
    )
});

app.listen(PORT, () => console.log(`Listen on port ${PORT}!`));