
const express = require('express');

const sequelize = require('./database');
const Experience=require("./Experience");
sequelize.sync({force:true}).then(()=>console.log("db ready"));


const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api', (req, res) => {
  res.send('database under construction...');
});

app.post('/api/experience', (req,res)=>{
    Experience.create(req.body).then(res.send('experience inserted.'))

});
app.get('/api/experiences', async (req, res)=>{
  const experiences = await Experience.findAll();
  res.send(experiences)

});
app.get('/api/experience/:id', async (req, res)=>{
  const requestedId=req.params.id;
  const experience = await Experience.findOne({where:{id:requestedId}});
  
  res.send(experience);
});

app.listen(port, () => {  
  console.log(`Example app listening on port ${port}, http://localhost:${port}/`);
}); 