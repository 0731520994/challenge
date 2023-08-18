const { errorHandling } = require("./middleware/ErrorHandling");
const cookieParser = require("cookie-parser");
// Middleware - APplication level
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Request-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Expose-Headers", "Authorization");
  next();
});
// cookieParser & Router
// cookieParser should be set before router
app.use(cookieParser(), cors(), router);
app.use(
  express.json(),
  express.urlencoded({
    extended: true,
  })
);
// Handling all errors
app.use(errorHandling);
// Server
