import React from 'react'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { PaymentFormContainer, FormContainer,PaymentButton  } from './payment-form.styles'

import { BUTTON_TYPE_CLASSES } from '../button/button.component'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../../store/user/user.selector'
import { selectCartTotal } from '../../store/cart/cart.selector'
import { useState } from 'react'


const PaymentForm = () => {
    const stripe = useStripe()
    const elements = useElements();
    const currentUser = useSelector(selectCurrentUser)
    const cartTotal = useSelector(selectCartTotal);
    const [paymentIsLoading, setPaymentIsLoading] = useState(false)

    const paymetnHandler = async (e)=>{
      e.preventDefault();
      if(!stripe || !elements)return
      
      setPaymentIsLoading(true)
        const response = await fetch('/.netlify/functions/create-payment-intent',{
          method:'post',
          headers:{
            'Content-Type':'application/json',
          },
          body: JSON.stringify({amount:cartTotal*100})
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
                name:currentUser ? currentUser.displayName : 'Guest'
              }
            }
          })

          
          setPaymentIsLoading(false)
          if(paymentResult.error){
            alert(paymentResult.error.message)
          }else{
            if(paymentResult.paymentIntent.status==='succeeded'){
              alert('Payment done')
              }
          }
         

    }


  return (
    <PaymentFormContainer>
        <FormContainer onSubmit={paymetnHandler}>
            <h2>Credit card payment:</h2>
            <CardElement />
            <PaymentButton isLoading={paymentIsLoading} type={BUTTON_TYPE_CLASSES.inverted}>Pay now</PaymentButton>
        </FormContainer>
    </PaymentFormContainer>
  )
}
export default PaymentForm