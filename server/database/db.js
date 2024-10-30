import mongoose from 'mongoose';


const Connection = async() => {
    const DB_URI = process.env.MONGODB_URI;
    try {
        await mongoose.connect(DB_URI);
        console.log("MongoDB Database connected Successfully");
        
    } catch(error) {
        console.log("Error while connecting to MongoDB Database", error.message);
        
    }
}

export default Connection;