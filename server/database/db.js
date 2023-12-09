import mongoose from "mongoose"


const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@dashboard.wkw8kzh.mongodb.net/?retryWrites=true&w=majority`

    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true});
        console.log("Database connected successfully");
    } catch (error) {
        console.log("Error while Connecting with the database", error);
    }
}

export default Connection;