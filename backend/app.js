
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const sequelize = require('./database');
//database templates
const Experience=require("./templates/Experience");
const Skill = require("./templates/Skill");
const Education = require("./templates/Education")
const Account =require("./templates/Account")
//initialize database and wipe any previous information out
//remove force:true to keep information on reset
sequelize.sync({force:true}).then(()=>console.log("db ready"));
//sequelize.sync().then(()=>console.log("db ready"));

const app = express();
const port = 3000;
//authentication middleware
const verifyToken = require('./auth')

//lets you read json objects from requests
app.use(express.json());

//test request to make sure the website is running
app.get('/', (req, res) => {
  res.send('Hello World! This will eventually serve the angular site once it is published for the public.');
});
//will eventually be an html page with the database functions listed
app.get('/api', (req, res) => {
  res.send('database under construction...');
});

//------------------security-------------------------------
//register
app.post("/register", async (req, res)=>{
  try{
    const { name, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await Account.create({name:name, password:hashedPassword});

    res.send({ message: 'User registered successfully', status:201});

  }catch(error){
    res.send({message:"Registration failed.", status:500, error:error});
  }

});
//login
app.post("/login", async (req, res)=>{
  try {
    const { name, password } = req.body;
    const user = await Account.findByPk(name)

    if (!user) {
      return res.send({message:"login failed, no user exists.", status:401});
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.send({message:"login failed, wrong password.", status:401});
    }

    const token = jwt.sign({ name: user.dataValues.name }, 'your-secret-key', {
    expiresIn: '1h',
    });

    res.send({token:token, status:201})
  } catch (error) {
    res.send({message:"login failed.", status:500, error:error});
  }

});
//test permissions
app.get("/auth", verifyToken, (req,res)=>{
  res.send({status:201, message:`${req.name} has accesed a secure route.`});
});

//----------------- database ------------------------------
//experience
//create a new job experience based on the body recieved from the call
app.post('/api/experience', (req,res)=>{
    Experience.create(req.body).then(res.send({message: "Successfully Registered", status: 201})).catch(err=>{
      console.log(err);
      res.send({message:"database refused.", status: 400})
    });

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
  Experience.update(req.body, {where:{id:requestedId}}).then(temp => res.send(temp)).catch(err=>{
    console.log(err);
    res.send({message:"database refused.", status: 400})
  });

});
//delete by id
app.delete('/api/experience/:id', async (req,res)=>{
  const requestedId = req.params.id;
  Experience.destroy({where:{id:requestedId}}).then(res.send({message:"deleted.", status:201})).catch(err=>{
    console.log(err);
    res.send({message:"database refused.", status: 400})
  });
});
//skill
//create a new skill based on the body recieved from the call
app.post('/api/skill', (req,res)=>{
  Skill.create(req.body).then(res.send({message: "Successfully Registered", status: 201})).catch(err=>{
    console.log(err);
    res.send({message:"database refused.", status: 400})
  });

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
Skill.update(req.body, {where:{id:requestedId}}).then(temp => res.send(temp)).catch(err=>{
  console.log(err);
  res.send({message:"database refused.", status: 400})
});
//delete by id
app.delete('/api/skill/:id', async (req,res)=>{
  const requestedId = req.params.id;
  Skill.destroy({where:{id:requestedId}}).then(res.send({message:"deleted.", status:201})).catch(err=>{
    console.log(err);
    res.send({message:"database refused.", status: 400})
  });
});


});
//education
//create a new education based on the body recieved from the call
app.post('/api/education', (req,res)=>{
  Education.create(req.body).then(res.send({message: "Successfully Registered", status: 201})).catch(err=>{
    console.log(err);
    res.send({message:"database refused.", status: 400})
  });

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
Education.update(req.body, {where:{id:requestedId}}).then(temp => res.send(temp)).catch(err=>{
  console.log(err);
  res.send({message:"database refused.", status: 400})
});
//delete by id
app.delete('/api/education/:id', async (req,res)=>{
  const requestedId = req.params.id;
  Education.destroy({where:{id:requestedId}}).then(res.send({message:"deleted.", status:201})).catch(err=>{
    console.log(err);
    res.send({message:"database refused.", status: 400})
  });
});



});
//start server
app.listen(port, () => {  
  console.log(`Example app listening on port ${port}, http://localhost:${port}/`);
}); 