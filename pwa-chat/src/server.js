const Pusher = require('pusher');
    const express = require('express');
    const bodyParser = require('body-parser');
    const cors = require('cors');

    const app = express();

    // var mysql = require('mysql');

    // Set up connection to database.
    // var connection = mysql.createConnection({
    //   host: 'localhost',
    //   port: '3306',
    //   user: 'root',
    //   password: '',
    //   database: 'chat',
    // });
    // connection.connect();
    // connection.query('SELECT COUNT(*) FROM messages', function(err, rows) {
    //   if (err) throw err;
    //   console.log('Solution: ', rows.solution);
    // });

    // app.post('/messages', function(req, res) {
    //
    // });

    app.use(cors());
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());
    const pusher = new Pusher({
      appId: '484022',
      key: '279efa6b9df7260189b5',
      secret: '740f16a15c5f3c06f17f',
      cluster: 'eu',
      encrypted: true
    });
    app.set('PORT', process.env.PORT || 5000);

    app.post('/message', (req, res) => {
      const payload = req.body;
      pusher.trigger('chat', 'message', payload);
      res.send(payload)
    });

    app.listen(app.get('PORT'), () =>
      console.log('Listening at ' + app.get('PORT')))
