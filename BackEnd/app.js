const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

const dbConfig = require('./Configurations/database.config.js');


mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.get('/', (req, res) => {
    res.json({
        "message": "Welcome to backend of Infinity DTH services"
    });
});

require('./Routes/operator.routes.js')(app);
require('./Routes/retailer.routes.js')(app);
require('./Routes/customer.routes.js')(app);
require('./Routes/distributor.routes.js')(app);
require('./Routes/stb.routes.js')(app);
require('./Routes/stbinventorylist.routes.js')(app);
require('./Routes/channel.routes.js')(app);
require('./Routes/channelpackage.routes.js')(app);
require('./Routes/vod.routes.js')(app);


app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});