const Users = require('./users')
const Orders = require('./Orders')
const Books = require('./Books')
const BookAuthors = require('./BookAuthor')

module.exports = {
    users: new Users(),
}