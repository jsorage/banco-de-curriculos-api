import mongoose from 'mongoose';

const MONGO_URL = process.env.MONGO_URL;
const MONGO_OPTIONS = { useNewUrlParser: true, useUnifiedTopology: true };

class Database {
  
  connect() {
    return mongoose.connect(MONGO_URL, MONGO_OPTIONS)
  }
}

export default Database;
