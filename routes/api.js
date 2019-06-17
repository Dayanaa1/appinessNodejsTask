let express=require('express');
const router=express.Router();

let bodyParser=require('body-parser')


router.get('/', (req,res)=>{
    res.send('From API route')
})

module.exports=router