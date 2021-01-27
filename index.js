const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/TravelManagement'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/TravelManagement/index.html'));
});

const PORT = process.env.PORT || 3000;
// Start the app by listening on the default Heroku port
app.listen(PORT, () => console.log(`listening to port : ${PORT}`));