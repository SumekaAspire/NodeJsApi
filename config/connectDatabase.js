const mongoose = require('mongoose');


//method
const connectDatabase=()=>{
    mongoose.connect(process.env.DB_URL).then((con)=>{
        console.log('MongoDB connected to host:'+con.connection.host) // here host is a compouter, mongodb is inside the computer, liveserver- server is the host
    })
};

module.exports = connectDatabase;