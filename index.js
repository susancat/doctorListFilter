const express = require('express'),
      app = express(),
      mongoose = require('mongoose'),
      keys = require('./config/keys'),
      cors = require('cors');

const doctorRoutes = require('./routes/doctors');

app.use(express.json());

app.use(
    cors({
         origin: "http://localhost:3000", 
         methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
         credentials: true
   })
);

const DATABASEURL = keys.mongoURI;
mongoose.connect(DATABASEURL, {
    // useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
    autoIndex: true
});

app.use('/api/doctors',doctorRoutes);

app.listen(process.env.PORT || 5000, () => {
    console.log("Bowtie Go has started");
});