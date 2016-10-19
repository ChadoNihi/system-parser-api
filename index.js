const express = require('express'),
      app = express(),
      useragent = require('express-useragent');

app.set( 'port', ( process.env.PORT || 5000 ));
app.use(useragent.express());

app.get('/', function (req, res) {
    res.send({
        browser: req.useragent.browser,
        browserVersion: req.useragent.version,
        ipAddress: req.ip,
        isBot: req.useragent.isBot,
        isSmartTV: req.useragent.isSmartTV,
        languages: req.headers["accept-language"],
        os: req.useragent.os
    });
});

app.listen(app.get( 'port' ), function () {
  console.log('The timestamp app is listening on port '+app.get( 'port' )+'!');
});