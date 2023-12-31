const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Database connection
if (process.env.NODE_ENV === 'test') {
    mongoose.connect('mongodb://127.0.0.1:27017/users-test', { useNewUrlParser: true, useUnifiedTopology: true });
} else {
    mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/users-test', { useNewUrlParser: true, useUnifiedTopology: true });
}

const userSchema = new Schema({
    name: String,
    email: String,
    phone: String
})

const User = mongoose.model('User', userSchema)

module.exports = User


