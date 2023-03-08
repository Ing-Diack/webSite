const express = require('express');
const { default: mongoose } = require('mongoose');
const userRoutes = require('./routes/user');

const app = express();
app.use(express.json());

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Headers','Origin,X-Requested-With,Content,Accept,Content-Type,Authorization');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,DELETE,PUT,PATCH,OPTIONS');
    next();
});

mongoose.connect('mongodb+srv://diack:fantome000@cluster0.ljpg27n.mongodb.net/?retryWrites=true&w=majority',
{
    useNewUrlParser : true,
    useUnifiedTopology : true
})
.then(()=>console.log('Connexion à MongoBD Réussie .'))
.catch(()=>console.log('Connexion à MongoBD échouée .'));

app.use('/api/auth', userRoutes);

module.exports = app;