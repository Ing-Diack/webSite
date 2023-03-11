const User = require('./../models/user');
const Contact = require('./../models/contact');
const  bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.signup=(req,res,next)=>{
    User.findOne({email:req.body.email})
    .then(user=>{
        if(user){
            return res.status(400).json({message:`Please, this account already exists `});
        }else{
            bcrypt.hash(req.body.password,10)
            .then(hash=>{
                const user = new User({
                    username: req.body.username,
                    email: req.body.email,
                    password: hash
                });
                user.save()
                .then(()=>res.status(201).json({message:'your account has been successfully created, now you cant login.'}))
                .catch(error=>res.status(500).json({error}));
                    })
                .catch(error=>res.status(500).json({error}));
        }
    })
    .catch(error =>res.status(500).json({error}));
}


exports.login = (req,res,next)=>{
    User.findOne({email: req.body.email})
    .then(user => {
        if(!user){
            return res.status(400).json({message:'Please your password or email is incorrect'});
        }else{
            bcrypt.compare(req.body.password, user.password)
            .then( valid =>{
                if(!valid){
                    return res.status(400).json({message:'Please your password or email is incorrect'});
                }else{
                    res.status(200).json({
                        user,
                        message:"Your connection has been made successfully",
                        token : jwt.sign({useId : user._id},
                                            'RANDOM_TOKEN_SECRET',
                                            {expiresIn:'24h'})
                    });
                }
            })
            .catch(error => res.status(500).status(error));
        }
    })
    .catch(error => res.status(500).json({error}));
}

exports.contact = (req,res,next) =>{
    User.findOne({email: req.body.email})
    .then(user =>{
        if(!user){
            return res.status(404).json({message:'Veuillez vous contacter pour pouvoir envoyer le message'});
        }else {
            const contact = new Contact({
                ...req.body,
                userId : user._id
            });
            contact.save()
            .then(()=>res.status(200).json({message:'Votre message est bien enregistre'}))
            .catch(error => res.status(500).json({error}));
        }
    })
    .catch(error => res.status(500).json({error}))
}