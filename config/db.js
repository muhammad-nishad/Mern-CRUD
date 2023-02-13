const { default: mongoose } = require("mongoose");

const connectDb=async()=>{
    try {
        const connect=await mongoose.connect('mongodb://localhost:27017/authdb')
        console.log('db connected');
        
    } catch (error) {
        console.log(error);
        
    }
}

module.exports=connectDb;
