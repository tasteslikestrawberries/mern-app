//setting up Express boilerplate
const express = require('express')
const app = express()

//so that URI is not out in the open
require('dotenv').config()
const source = process.env.ATLAS_CONNECTION

//setting up serving data locally - check if our process.env object has specified a port to use, and if not, default to using port 4000
const PORT = process.env.PORT || 4000
app.listen(PORT, ()=>{
    console.log(`Sweet sailing at port: ${PORT}.`);
})

//cors - set up header so browser understands that the backend server knows the frontend origin and that the call is not malicious
const cors = require('cors')
app.use(cors())

//tell express app that it should expect to serve and receive data in JSON
app.use(express.json())

//mongoose creates model abstraction so it looks like we are working with objects rather than pure data
const mongoose = require('mongoose')

//opening mongoose connection
mongoose.connect(source, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

//listens the connect function - if successful, throws message
const connection = mongoose.connection
connection.once('open', () => {
    console.log("DB connected.");
})

// respond when a GET request is made to the homepage
app.get('/', function (req, res) {
    res.send('Look, a mermaid!')
  })

//importing user-routes
const userRoutes = require('./routes/user-routes')

/*By specifying that the app should use '/users', we are able to nest 
any routes that are defined in the user-routes under the '/users' resource first. 
So in the case of creating a new user, our frontend should make a post request to 'http://localhost:4000/users/new'.*/
app.use('/users', userRoutes)