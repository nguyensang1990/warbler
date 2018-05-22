require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const db = require('./models');

const errorHandler = require('./handlers/error');
const authRoute = require('./routes/auth');
const messageRouter = require('./routes/message');
const { loginRequired, ensureCorrectUser } = require('./middleware/auth');

const PORT = 8081;

app.use(cors());
app.use(bodyParser.json()); // use json due to we want return json

app.use('/api/auth', authRoute);
app.use('/api/user/:id/messages', loginRequired, ensureCorrectUser, messageRouter);
app.get('/api/messages', loginRequired, async function (req, res, next) {
  try {
    let messages = await db.Message.find()
      .sort({createdAt: 'desc'})
      .populate('user', {
        username: true,
        userImage: true
      });
    return res.status(200).json(messages);
  } catch (err) {
    return next(err);
  }
});

app.use((req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(errorHandler); // this middleware will run after the one above

app.listen(PORT, () => {
  console.log(`Server is starting on port ${PORT}`);
});
