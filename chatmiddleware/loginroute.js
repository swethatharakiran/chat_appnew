
const express=require('express');
//const path=require('path');
const fs=require('fs');
const router=express.Router();
//let dir1=path.join(__dirname,'../','chat.txt');

router.get('/login',(req,res,next)=>{
    res.send(`
    <form  onsubmit="localStorage.setItem('username',document.getElementById('username').value)" 
    action="/" method ="POST">
    <input id="username" type="text"  name="username">
    <button type="submit">Login</button></form>`);
});


router.get('/',(req,res,next)=>{
  const data=fs.readFileSync('chat.txt','utf8');
  //,(err,data)=>{
    //if(err){
      //console.log(err)
      //return res.send("No chat exist");
    //}
    
    //console.log(data);
      res.send(`${data}<form action="/" method="POST" 
      onsubmit="document.getElementById('username').value=localStorage.getItem('username')">
      <input id="message" type="text" name="message">
      <input type="hidden" id="username" name="username">
      <button type="submit">send</button></form>`);
    

    });
    
  

router.post('/',(req,res,next)=>{
  //console.log(req.body.username);
  //console.log(req.body.message);
  
  if(req.body.message){
    fs.appendFileSync('chat.txt',`${req.body.username}:${req.body.message}  `);
    res.redirect("/");
    //fs.writeFile('chat.txt',`${req.body.username}:${req.body.message}`,{flag:'a'},err=>err?console.log(err):res.redirect("/"));
  }
  else{
    fs.appendFileSync('chat.txt','');
    //fs.writeFile('chat.txt','',{flag:'a'},err=>err?console.log(err):res.redirect("/"));
    res.redirect("/");
  }
  
});

module.exports=router;