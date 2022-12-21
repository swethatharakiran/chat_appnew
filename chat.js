const express=require('express');
const app=express();

const loginroute=require('./chatmiddleware/loginroute');

const bodyparser=require('body-parser');
app.use(bodyparser.urlencoded({extended:false}));

app.use('/',loginroute);

app.use((req,res,next)=>{
 res.status(404).send('<h1>page not found</h1>');
});

app.listen(4000);
