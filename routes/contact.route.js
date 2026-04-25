import express from 'express'
const routes = express.Router()
import contact from '../models/contact.model.js'
import {
    contactPage,
    singlePage,
    addcontact,
    addcontactsubmit,
    updatecontact,
    updatecontactsubmit,
    deletecontact 

} from '../contoler/contact.contoler.js'


routes.get('/',contactPage)

routes.get('/show-contact/:id',singlePage)

routes.get('/add-contact',addcontact,)

routes.post('/add-contact',addcontactsubmit)

routes.get('/update-contact/:id',updatecontact)

routes.post('/update-contact/:id',updatecontactsubmit)

routes.get('/delete-contact/:id',deletecontact )

export default routes