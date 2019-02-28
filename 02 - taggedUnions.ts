import { Email } from './01 - basic types'
import { assertNever } from './common'

interface CreditCard {
  kind: 'credit-card'
  number: number
  cvv: number
}

interface PayPal {
  kind: 'paypal'
  email: Email
}

interface WireTransfer {
  kind: 'wire-transfer'
  IBAN: string
  BIC?: string
}

type PaymentMethod = CreditCard | PayPal | WireTransfer

function evaluateSelectedPaymentMethod(paymentMethod: PaymentMethod): void {
  switch (paymentMethod.kind) {
    case 'credit-card':
      console.log('Customer chose to pay with credit card')
      break
    case 'paypal':
      console.log('Customer chose to pay by paypal')
      break
    case 'wire-transfer':
      console.log('Customer chose to pay by wire transfer')
      break

    default:
      assertNever(paymentMethod)
  }
}
