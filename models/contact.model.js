import mongoose from 'mongoose'
// import pagination from 'mongoose-paginat-v2'
import Pagination from 'mongoose-paginate-v2'


const contactSchema = mongoose.Schema({
    first_name:{
        type:String
    },
    last_name:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:String
    },
    address:{
        type:String
    },
})

contactSchema.plugin(Pagination)
const contact = mongoose.model("contact", contactSchema);

export default contact