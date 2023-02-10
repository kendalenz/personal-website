const app = require('./app');
const { syncAndSeed } = require('./db');

const setup = async()=> {
        try {
            console.log('starting');
            // await conn.sync({force: true});
            // await Promise.all([
            //     User.create({firstName: 'Kendal', lastName: 'Enz'})
            // ]);
            await syncAndSeed();
            const port = process.env.PORT || 3000;
            app.listen(port, ()=> console.log(`listening on port ${port}`))
        }
        catch(err){
            console.log(err)
        }
    }
    
    setup();