// const { User, conn } = require('./db');
const express = require('express');
const app = express();
const path = require('path');
app.use(express.json());

app.use('/dist', express.static(path.join(__dirname, '../dist')));
app.use('/static', express.static(path.join(__dirname, '../static')));

app.get('/', (req, res)=> res.sendFile(path.join(__dirname, '../static/index.html')));

app.use('/api/users', require('./api/users'));

module.exports = app;

// app.get('/api/users', async(req, res, next)=> {
//     try {
//         res.send(await User.findAll());
//     } 
//     catch(err) {
//         next(err);
//     }
// });

// const setup = async()=> {
//     try {
//         console.log('starting');
//         await conn.sync({force: true});
//         await Promise.all([
//             User.create({firstName: 'Kendal', lastName: 'Enz'})
//         ]);
//         const port = process.env.PORT || 3000;
//         app.listen(port, ()=> console.log(`listening on port ${port}`))
//     }
//     catch(err){
//         console.log(err)
//     }
// }

// setup();