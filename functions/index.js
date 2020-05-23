const functions = require('firebase-functions');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const Pusher = require('pusher');

const pusher = new Pusher({
  appId: functions.config().pusher.appid,
  key: functions.config().pusher.key,
  secret: functions.config().pusher.secret,
  cluster: functions.config().pusher.cluster,
  useTLS: true,
});

const debug = (...args) => {
  console.log('debug::: ', ...args);
};

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// The code below helps to fix any potential CORS issue.
app.use((req, res, next) => {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  // Pass to next layer of middleware
  next();
});

app.get('/', (req, res) => {
  res.send('Hello world');
});

// Index API route for the Express app
app.get('/pusher/welcome', (req, res) => {
  res.send('Welcome');
});

// Index API route for the Express app
app.get('/pusher/hello', (req, res) => {
  res.send('hello');
});

// API route used by Pusher as a way of authenticating users
app.post('/pusher/auth', (req, res) => {
  const socketId = req.body.socket_id;
  const channel = req.body.channel_name;
  const name = req.body.team_name;
  const host = req.body.is_host;
  const userId = req.body.user_id;

  // Generate a random string and use as presence channel user_id
  const presenceData = {
    user_id: userId,
    user_info: {
      host,
      team_name: name,
    },
  };
  const auth = pusher.authenticate(socketId, channel, presenceData);
  res.send(auth);
});

exports.app = functions.https.onRequest(app);
