import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import dotenv from 'dotenv/config';

import login from './routes/login/login.js';
import loginError from './routes/login/loginError.js';
import signup from './routes/signup/signup.js';
import error from './routes/error/error.js';
import home from './routes/home/home.js';
import logout from './routes/logout/logout.js';
import sessionExpired from './routes/sessionExpired/sessionExpired.js';

const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("views"));
app.use(cookieParser());
app.use(session({
    store: MongoStore.create({
        mongoUrl: process.env.URL,
        mongoOptions: { useNewUrlParser: true, useUnifiedTopology: true },
        ttl: 600
    }),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));

app.use('/api/login', login);
app.use('/api/login-error', loginError);
app.use('/api/signup', signup);
app.use('/api/error', error);
app.use('/api/home', home);
app.use('/api/logout', logout);
app.use('/api/session-expired', sessionExpired);

export default app;