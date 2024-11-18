
const express = require('express');

const sequelize = require('./database');
const Experience=require("./Experience");
sequelize.sync({force:true}).then(()=>console.log("db ready"));


const app = express();
const port = 3000;

app.use(express.json());
//test request to make sure the website is running
app.get('/', (req, res) => {
  res.send('Hello World!');
});
//will eventually be an html page with the database functions listed
app.get('/api', (req, res) => {
  res.send('database under construction...');
});
//create a new job experience based on the body recieved from the call
app.post('/api/experience', (req,res)=>{
    Experience.create(req.body).then(res.send('experience inserted.'))

});
//get all experiences from the database
app.get('/api/experiences', async (req, res)=>{
  const experiences = await Experience.findAll();
  res.send(experiences)

});
//get a job experience by the specific ID
app.get('/api/experience/:id', async (req, res)=>{
  const requestedId=req.params.id;
  const experience = await Experience.findOne({where:{id:requestedId}});
  
  res.send(experience);
});
//start server
app.listen(port, () => {  
  console.log(`Example app listening on port ${port}, http://localhost:${port}/`);
}); 