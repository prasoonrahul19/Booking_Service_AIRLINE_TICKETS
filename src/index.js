const express = require('express');

const app = express();
const {PORT} = require('./config/ServerConfig');

const apiRoutes = require('./routes/index');
const bodyParser = require('body-parser');
const db = require('./models/index');
const SetupAndStart = ()=>{

    app.use(bodyParser.json());

    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api' , apiRoutes);

    app.listen(PORT,()=>{
        console.log(`Server started at port : ${PORT} `);

        if(process.env.DB_SYNC){
            db.sequelize.sync({alert:true});
        }
    
    });
}

SetupAndStart();