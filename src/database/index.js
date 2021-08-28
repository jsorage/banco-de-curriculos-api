import mongoose from 'mongoose';

const MONGO_URL = 'mongodb+srv://cadastrodecurriculo:desafiogama@cluster0.cvxpa.mongodb.net/jobsnet-dev?retryWrites=true&w=majority';
const MONGO_OPTIONS = { useNewUrlParser: true, useUnifiedTopology: true };

class Database {
  
  connect() {
    return mongoose.connect(MONGO_URL, MONGO_OPTIONS)
  }
}

export default Database;
