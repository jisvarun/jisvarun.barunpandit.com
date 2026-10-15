import express, { response } from "express";

const app = express()



app.get('/', (req, res) => {
  res.send({'message':'hello'})
})

const port = 4000

app.listen(port, () => {
  console.log(`server is running`);
  
})