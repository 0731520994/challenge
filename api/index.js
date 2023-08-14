
const Users = require('./users')
const Orders = require('./Orders')
const Books = require('./Books')
const BookAuthors = require('./BookAuthors')

//Export all objects

const {users} = require('../model')

//======user's router====
routes.get('/users', (req,res)=> {
    users.fetchUsers(req,res)
})


routes.get('/users/:id',(req, res) =>{
    users.fetchUsers(req,res)
})

routes.post('/register', bodyParser.json(),
    (req,res) =>{
        users.register(req, res)
    })
    

routes.put('/user/: id', bodyParser.json(),
    (req,res) =>{
        users.updateUser(req, res)
    })

routes.patch('/user/: id', bodyParser.json(),
    (req,res) =>{
     users.updateUser(req, res)
    })
    

routes.delete('/user/: id', bodyParser.json(),
    (req,res) =>{
        users.deleteUser(req, res)
    })
    


module.exports = {
    express,
    routes
}



