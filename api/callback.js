const http = require('http');

module.exports = (req, res) => {
    const timeString = req.query.time;
    if (!timeString) {
        res.send('');
        return;
    }
    const host = 'www.kmoni.bosai.go.jp';
    const path = `/webservice/hypo/eew/${timeString}.json?jsoncallback=callback`;

    http.request({host, path}, (response) => {
        let str = '';
        response.on('data', chunk => str += chunk);
        response.on('end', () => {
            res.setHeader('Cache-Control', 'max-age=0, s-maxage=86400');
            res.send(str.split('callback(').join('').slice(0, -1));
        });
    }).end();
};