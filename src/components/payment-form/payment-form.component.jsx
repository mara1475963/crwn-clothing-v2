import React from 'react'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { PaymentFormContainer, FormContainer } from './payment-form.styles'

import Button from '../button/button.component'
import { BUTTON_TYPE_CLASSES } from '../button/button.component'

const PaymentForm = () => {
    const stripe = useStripe()
    const elements = useElements();

    const paymetnHandler = async (e)=>{
      e.preventDefault();
      if(!stripe || !elements)return
      
        const response = await fetch('/.netlify/functions/create-payment-intent',{
          method:'post',
          headers:{
            'Content-Type':'application/json',

          },
          body: JSON.stringify({amount:100})
        }).then((res)=>res.json())

        console.log(response)

          const {
            paymentIntent:{client_secret}
          } = response


          console.log(client_secret)

          const paymentResult = await stripe.confirmCardPayment(client_secret,{
            payment_method:{
              card:elements.getElement(CardElement),
              billing_details:{
                name:'Marek'
              }
            }
          })

          if(paymentResult.error){
            alert(paymentResult.error)
          }else{
            if(paymentResult.paymentIntent.status='succeeded'){
              alert('Payment done')
                }
          }
    }


  return (
    <PaymentFormContainer>
        <FormContainer onSubmit={paymetnHandler}>
            <h2>Credit card payment:</h2>
            <CardElement />
            <Button type={BUTTON_TYPE_CLASSES.inverted}>Pay now</Button>
        </FormContainer>
    </PaymentFormContainer>
  )
}
export default PaymentForm