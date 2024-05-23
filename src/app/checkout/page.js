"use client"
import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm/CheckoutForm";


// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe("pk_test_51PJEZvRvdqCDotXI09aONw6ac9lAO9pmMNYHUlOZ7U8tCv2V0y6OkuiVJfU5V8J8vcIKlB3iep35feOOkCAMS9Vk0078rcmY6I");

export default function Checkout({searchParams}) {
  const [clientSecret, setClientSecret] = useState("");


  useEffect(() => {

    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:4242/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: JSON.parse(searchParams?.products)}),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setClientSecret(data.clientSecret)
    });


  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="App">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}