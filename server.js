const { User, conn } = require('./db');
const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res)=> res.sendFile(path.join(__dirname, 'index.html')));

app.get('/api/users', async(req, res, next)=> {
    try {
        res.send(await User.findAll());
    } 
    catch(err) {
        next(err);
    }
});

const setup = async()=> {
    try {
        console.log('starting');
        await conn.sync({force: true});
        await Promise.all([
            User.create({firstName: 'Kendal', lastName: 'Enz'})
        ]);
        const port = process.env.PORT || 3000;
        app.listen(port, ()=> console.log(`listening on port ${port}`))
    }
    catch(err){
        console.log(err)
    }
}

setup();