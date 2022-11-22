const createError = require("http-errors");
const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const headerParser = require("header-parser");

const helmet = require("helmet");
const cors = require("cors");
const passport = require("passport");

const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const path = require("path");

//require all the routes
let CandidateLocationRouter = require("../routes/CandidateLocationRoute");
let UserRouter = require("../routes/UserRouter");
let FcShopRouter = require("../routes/FcShopRoute");
let AdministrasiDesa = require("../routes/AdministrasiDesaRoute")

let server = express();

// configure app to use bodyParser
server.use(bodyParser.json());
server.use(express.json());
server.use(
  express.urlencoded({
    extended: true
  })
);
server.use(cookieParser());
server.use(helmet());
server.use(cors());
server.use(headerParser);
server.use(passport.initialize());

server.use(express.static(path.join(__dirname, '../dist')));

/**
 * enable CORS
 */
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
  next();
});

//prefix all the routes
server.use(CandidateLocationRouter);
server.use(UserRouter);
server.use(FcShopRouter);
server.use(AdministrasiDesa);

// catch 404 and forward to error handler
server.use((req, res, next) => {
  next(createError(404));
});

// error handler
server.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // send the error page
  res.status(err.status || 500);
  return res.status(500).json({
    message: err.message
  });
});

// server.use(express.static("../../TMMIN-frontend-production/dist"))
server.get('/', (req,res) =>{
  res.sendFile(path.join(__dirname, '../dist/index.html'))
})

module.exports = server;
