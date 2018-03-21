const Pusher = require('pusher');
    const express = require('express');
    const bodyParser = require('body-parser');
    const cors = require('cors');

    const app = express();
    const webpush = require("web-push");

    webpush.setGCMAPIKey(process.env.GOOGLE_API_KEY)
    webpush.setVapidDetails(
      "mailto:wojtaszek95@gmail.com",
      process.env.PUBLIC_VAPID_KEY,
      process.env.PRIVATE_VAPID_KEY
    )
    const testData = {
      title: "Testing",
      body: "It's a success!",
      icon: "/path/to/an/icon.png"
    }

    let subscription
    let pushIntervalID


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

    app.post("/register", (req, res, next) => {
      subscription = req.body
      console.log(subscription)
      res.sendStatus(201)
      pushIntervalID = setInterval(() => {
        // sendNotification can only take a string as it's second parameter
        webpush.sendNotification(subscription, JSON.stringify(testData))
          .catch(() => clearInterval(pushIntervalID))
      }, 30000)
    })

    app.delete("/unregister", (req, res, next) => {
      subscription = null
      clearInterval(pushIntervalID)
      res.sendStatus(200)
    })

    app.listen(app.get('PORT'), () =>
      console.log('Listening at ' + app.get('PORT')))
