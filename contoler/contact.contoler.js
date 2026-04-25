import mongoose from 'mongoose'
import contact from '../models/contact.model.js'


export const contactPage = async(req,res) => {
     const contacts =await contact.find();
    res.render('home',{contacts})
}


export const singlePage = async(req,res)=>{
    const contact1 = await contact.findOne({_id: req.params.id}) //findById(req.params.id) can use for make simple code
    res.render('single-contact',{contact1})
    }

export const addcontact = (req,res)=>{res.render('add-contact')}

export const addcontactsubmit =async(req,res)=>{
    const contact2 = await contact.insertOne({
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        email:req.body.email,
        phone:req.body.phone,
        address:req.body.address
    })
    res.redirect("/")
}

export const updatecontact = async(req,res)=>{
    const contact1 = await contact.findOne({_id: req.params.id}) 
    res.render('update-contact',{contact1})
}
export const updatecontactsubmit = async(req,res)=>{
    await contact.findByIdAndUpdate(req.params.id,req.body)
    res.redirect("/")
}

export const deletecontact = async(req,res)=>{
    await contact.findByIdAndDelete(req.params.id,req.body)
     res.redirect("/")
}