const express = require('express');
const app = express();
const stripe = require('stripe')('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')

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'T-shirt',
          },
          unit_amount: 5,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: 'https://example.com/success',
    cancel_url: 'https://example.com/cancel',
  });

  res.json({ id: session.id });
});

app.listen(4242, () => console.log(`Listening on port ${4242}!`));