const express = require('express');
const router = express.Router();
const Stripe = require('stripe');
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

router.post('/create-payment-intent', async (req, res) =>{
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: 500,
            currency: 'usd',
            payment_method: 'pm_card_visa',
          }); 
          res.send({
            clientSecret: paymentIntent.client_secret,
          });
    } catch (error) {
        res.status(500).json({ error: error.message });
        
    }

    





})