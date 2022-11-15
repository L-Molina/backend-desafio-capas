import express from 'express';
import session from 'express-session';
import passport from 'passport';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
dotenv.config();

import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()
import MongoStore from 'connect-mongo';
const MongoStore = require("connect-mongo");
const advanceOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

app.use(cookieParser());
let mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/test';

//middleware para sesiones
app.use(
  session({
    store: new MongoStore({ 
      mongoUrl: mongoUrl,
      mongoOptions: advanceOptions   
    }),
    secret: "coderhouse",
    resave: true,
    saveUninitialized: true,
    rolling: true, 
    cookie: { maxAge: 60000000 }, 
  })
);

//middleware para passport
app.use(passport.initialize());
app.use(passport.session());

//router
import { router } from './routes/index.js';

//plantilla
app.set('views', './views');
app.set('view engine', 'ejs');

//middleware
app.use(methodOverride('_method'))
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/', router)


//conectado
const port = process.env.PORT || 8080;

const server = app.listen(port, () => {
  console.log(`Servidor corriendo en port: ${server.address().port}`);
});

//error
server.on("error", (err) => {
  console.log(`Error del servidor: ${err}`)
});