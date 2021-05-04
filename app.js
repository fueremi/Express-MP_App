// Importing depedency
const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const morgan = require('morgan')
const passport = require('passport')
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);


// Load config
dotenv.config({ path: './configs/config.env' })
const connectDB = require('./configs/db');

// Passport config
require('./configs/googleOAuth2')(passport);

// Load Connection to DB
connectDB()

//  Initiate express 
const app = express()

// Logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

// Sessions
app.use(session({
    secret: 'fueremi',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
}))

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

// Routes
app.use('/v1/auth', require('./routes/auth'));

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server up and Running on port ${PORT}`))