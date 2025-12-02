const express = require('express'); 
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

// Payment Gateway
const stripe = require('stripe')(process.env.DB_PAYMENT_SK); 

const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json()); 

// MongoDB URI
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.e1kqjp5.mongodb.net/?appName=Cluster0`; 

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
}); 

app.get('/', (req, res) => {
    res.send('Hello Porag');
}); 

async function run() {
    try {
        await client.connect(); 

        const db = client.db('zap_shift');
        const parcelsCollection = db.collection('parcels'); 

        // ------------------ API ENDPOINTS START ------------------

        // GET: All parcels (or filtered, if query is added)
        app.get('/parcels', async(req, res) => { 
            const query = {};
            const cursor = parcelsCollection.find(query);
            const result = await cursor.toArray();
            res.send(result);
        }); 

        // GET: Single parcel by ID
        app.get('/parcels/:id', async(req, res) => {
            const id = req.params.id; 
            const query = { _id: new ObjectId(id) };
            const result = await parcelsCollection.findOne(query);
            res.send(result);
        });

        // POST: Add a new parcel
        app.post('/parcels', async(req, res) => {
            const parcels = req.body; 
            const result = await parcelsCollection.insertOne(parcels); 
            res.send(result);
        }); 

        // POST: Stripe Checkout Session
        app.post('/create-checkout-session', async(req, res) => {
            const PaymentInfo = req.body; 
            const amount=parseInt(PaymentInfo.cost)*100
            const session = await stripe.checkout.sessions.create({
                line_items: [
                    {
                      
                       price_data:{
                          currency:'usd',
                          unit_amount:amount,
                          product_data:{
                            name:PaymentInfo.parcelName,
                          }
                       },

                        quantity: 1,
                    },
                ], 
              customer_email:PaymentInfo.senderEmail,
                mode: 'payment',
                metadata:{
                    parcelId:PaymentInfo.parcelId
                },
                success_url: `${process.env.SITE_DOMAIN}/dashboard/payment-success`, 
                   cancel_url: `${process.env.SITE_DOMAIN}/dashboard/payment-failed`
            }); 
            console.log(session) 
            res.send({url:session.url})

            // res.redirect(303, session.url);
        });

        // ------------------ API ENDPOINTS END --------------------

        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // client.close() সাধারণত ডেপ্লয়মেন্ট এনভায়রনমেন্টে এখানে ব্যবহার করা হয়
    }
}
run().catch(console.dir);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});