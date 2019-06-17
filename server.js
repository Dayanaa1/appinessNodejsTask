let express=require('express');
let jwt=require("jsonwebtoken")
require('./config/config')
require('./models/db')

let bodyParser=require('body-parser');
// PORT =3000;


let api=require('./routes/api')
let app=express();

app.use(bodyParser.json())


let registerRouter=require('./routes/registerRouter')
let userDetails=require('./routes/user')

app.use('/api',api);
app.use('/api',registerRouter);
app.use('/api',userDetails)
app.get('/',function(req,res){
res.send("Hello from server")
})

app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));