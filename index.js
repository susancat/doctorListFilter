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

if (process.env.NODE_ENV === 'production') {
    //let express serve up priduction assets like main.css/js
    app.use(express.static('client/build'));
    //if express doesnot recognize the route, serve up index.html
    const path = require('path');
    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname,'client','build', 'index.html'));
    });
}

app.listen(process.env.PORT || 5000, () => {
    console.log("Bowtie Go has started");
});