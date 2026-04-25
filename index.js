
import express from 'express'
const app = express();
import contact_routes from "./routes/contact.route.js"
import connect_db from './config/contact_db'

//middlewere
app.set('view engine','ejs')
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))

const PORT = process.env.PORT

//database connecction
connect_db();

//routes
app.use('/',contact_routes)


app.listen(PORT, () =>{
    console.log(`server run on ${PORT}`)
})
