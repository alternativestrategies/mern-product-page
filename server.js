//requiring node modules
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const apiRoutes = require('./routes/apiRoutes')
const app = express();

const PORT = process.env.PORT || 3001;

// defining middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//morgan(dev) returns colored response status codes but still has a tiny output
app.use(morgan('dev'));
//middleware that helps set HTTP headers
app.use(helmet());
//removes X-Powered-By header and sets it to PHP 7.2.0
app.use(helmet.hidePoweredBy({setTo: 'PHP 7.2.0'}))


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//allows us to keep our routes neat in a separate file 
app.use('/api', apiRoutes);

app.get("*", (req, res)=> {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//app listen
app.listen(PORT, () => console.log(`listening at port ${PORT}`))