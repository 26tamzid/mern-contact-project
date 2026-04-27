import mongoose from 'mongoose'
import contact from '../models/contact.model.js'


// var paramId = mongoose.Types.ObjectId.isValid(req.params.id)

export const contactPage = async(req,res) => {
     const contacts =await contact.find();
    res.render('home',{contacts})
}


export const singlePage = async(req,res)=>{
    var paramId = mongoose.Types.ObjectId.isValid(req.params.id)
    if(!paramId){
        res.render('404',{messege: "invalid id"})
    }
    try{
        const contact1 = await contact.findOne({_id: req.params.id}) //findById(req.params.id) can use for make simple code
        if(!contact1)return res.render('404',{messege:'contact not found'})
        res.render('single-contact',{contact1})
    }catch(error){
        res.render('500',{messege:'problem in code'})
    }

    }

export const addcontact = (req,res)=>{res.render('add-contact')}

export const addcontactsubmit =async(req,res)=>{
    try{
            const contact2 = await contact.insertOne({
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        email:req.body.email,
        phone:req.body.phone,
        address:req.body.address
    })
    res.redirect("/")
    }catch(error){
        res.render('500',{messege:'error'})
    }

}

export const updatecontact = async(req,res)=>{
    var paramId = mongoose.Types.ObjectId.isValid(req.params.id)
    if(!paramId){
        res.render('404',{messege: "invalid id"})
    }
    try{
        const contact1 = await contact.findOne({_id: req.params.id}) 
        if(!contact1)return res.render('404',{messege:'contact not found'})
        res.render('update-contact',{contact1})
    }catch(error){
        res.render('500',{messege:'problem in code'})
    }   
}

export const updatecontactsubmit = async(req,res)=>{
    var paramId = mongoose.Types.ObjectId.isValid(req.params.id)
    if(!paramId){
        res.render('404',{messege: "invalid id"})
    }
    try{
       const contact1 = await contact.findByIdAndUpdate(req.params.id,req.body)
        if(!contact1)return res.render('404',{messege:'contact not found'})
        res.redirect("/")
    }catch(error){
        res.render('500',{messege:'problem in code'})
    }
    
}

export const deletecontact = async(req,res)=>{
    var paramId = mongoose.Types.ObjectId.isValid(req.params.id)
    if(!paramId){
        res.render('404',{messege: "invalid id"})
    }
    try{
        const contact1 = await contact.findByIdAndDelete(req.params.id,req.body)
        if(!contact1)return res.render('404',{messege:'contact not found'})
        res.redirect("/")
    }catch(error){
        res.render('500',{messege:'problem in code'})
    }
    
}