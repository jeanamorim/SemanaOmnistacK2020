const express = require ('express');
const mongoose = require ('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://jeanamorim:jeanamorim@cluster0-dxa6t.mongodb.net/omnisteck10?retryWrites=true&w=majority',{
    useUnifiedTopology: true,
    useNewUrlParser: true 
});


app.use(express.json());
app.use(routes);



app.listen(3333);