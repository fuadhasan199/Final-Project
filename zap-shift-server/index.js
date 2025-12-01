const express = require('express') 
 require('dotenv').config()
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors=require('cors')
const app = express()
const port = 3000 

app.use(cors())
app.use(express.json()) 



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.e1kqjp5.mongodb.net/?appName=Cluster0`; 


const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
}); 

 app.get('/', (req, res) => {
  res.send('Hello Porag')
})  




async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect(); 

 const db=client.db('zap_shift')
const parcelsCollection=db.collection('parcels') 




app.get('/parcels',async(req,res)=>{ 

    const query={}
const cursor=parcelsCollection.find(query)
  const result=await cursor.toArray()
  res.send(result)

}) 


app.post('/parcels',async(req,res)=>{
    const parcels=req.body 
    const result=await parcelsCollection.insertOne(parcels) 
    res.send(result)
})





    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
   
  }
}
run().catch(console.dir);






app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
