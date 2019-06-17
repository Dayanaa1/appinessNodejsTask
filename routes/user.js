const express=require("express");
const router=express.Router();
let jwt=require("jsonwebtoken")
let User=require('../models/user');




function verifyTocken(req,res,next){
    if(!req.headers.authorization){
        return res.status(401).send('Unauthorized request')
    }
    let token=req.headers.authorization.split(' ')[1]
    if(token === 'nul'){
        return res.status(401).send('Unauthorized request')
    }
    let payload =jwt.verify(token, 'secretKey')
    if(!payload){
        return res.status(401).send('Unauthorized request')
    }
    req.userId=payload.subject
    next()
}
router.post('/user',(req,res)=>{
    let userData=req.body;
    let user=User(userData);
    user.save((err,data)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log(data);
            res.json(data);
        }
    })
})


router.get('/user', verifyTocken, (req,res)=>{
  
  
    User.find({})
    
   
    .exec((err,data)=>{
        if(err){
            console.log(err)
        }else{
            console.log(data);
            res.json(data)
        }
    })
res.json(events)
})

router.get('/user/:id',(req,res)=>{
    Customer.findById(req.params.id, (err, data) => {
        if (err)
            console.log(err);
        else
            res.json(data);
    });
});

router.delete('/user/:id',(req,res)=>{
    User.findByIdAndRemove(req.params.id,(err,data)=>{
        if(err){console.log(err)
        res.status(404).send("Cannot delete the values")
        }
        else{
            console.log(data)
            res.send(data)
        }
    })
})

router.put('/user/:id',(req,res)=>{
    User.findByIdAndUpdate(req.params.id,
        {$set:req.body},(err,data)=>{
            if(err){
                // console.log(err);
                res.status(404).send("Value Does not exist");
            }
        else{
            console.log(data)
            res.status(200).send(data)
        } 
        })
})


module.exports=router