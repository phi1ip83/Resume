
const express = require('express');

const sequelize = require('./database');
//database templates
const Experience=require("./templates/Experience");
const Skill = require("./templates/Skill");
const Education = require("./templates/Education")
sequelize.sync({force:true}).then(()=>console.log("db ready"));


const app = express();
const port = 3000;

app.use(express.json());
//test request to make sure the website is running
app.get('/', (req, res) => {
  res.send('Hello World! This will eventually serve the angular site once it is published for the public.');
});
//will eventually be an html page with the database functions listed
app.get('/api', (req, res) => {
  res.send('database under construction...');
});

//----------------- database ------------------------------
//experience
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
//update experience by id
app.put('/api/experience/:id', async (req,res)=>{
  const requestedId = req.params.id;
  Experience.update(req.body, {where:{id:requestedId}}).then(temp => res.send(temp))


});
//skill
//create a new skill based on the body recieved from the call
app.post('/api/skill', (req,res)=>{
  Skill.create(req.body).then(res.send('skill inserted.'))

});
//get all skills from the database
app.get('/api/skills', async (req, res)=>{
const skills = await Skill.findAll();
res.send(skills)

});
//get a skill by the specific ID
app.get('/api/skill/:id', async (req, res)=>{
const requestedId=req.params.id;
const skill = await Skill.findOne({where:{id:requestedId}});

res.send(skill);
});
//update skill by id
app.put('/api/skill/:id', async (req,res)=>{
const requestedId = req.params.id;
Skill.update(req.body, {where:{id:requestedId}}).then(temp => res.send(temp))


});
//education
//create a new education based on the body recieved from the call
app.post('/api/education', (req,res)=>{
  Education.create(req.body).then(res.send('education inserted.'))

});
//get all education from the database
app.get('/api/educations', async (req, res)=>{
const educations = await Education.findAll();
res.send(educations)

});
//get an education by the specific ID
app.get('/api/education/:id', async (req, res)=>{
const requestedId=req.params.id;
const education = await Education.findOne({where:{id:requestedId}});

res.send(education);
});
//update education by id
app.put('/api/education/:id', async (req,res)=>{
const requestedId = req.params.id;
Education.update(req.body, {where:{id:requestedId}}).then(temp => res.send(temp))


});
//start server
app.listen(port, () => {  
  console.log(`Example app listening on port ${port}, http://localhost:${port}/`);
}); 