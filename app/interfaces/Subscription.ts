//Subscription checker
export default interface Subscription {
  orderId: number;
  subscriptionName: string;
  paymentCycle: string;
  status: string;
  subscriptionStartDate: string;
  subscriptionEndDate: string;
  trialSubscriptionEndDate: string;
  nextPaymentDueDate: string;
  nextPaymentAmount: string;
  emailAddress: string;
}

// types/Data.ts

export interface DataItem {
  column1: string;
  column2: string;
  column3: string;
  column4: string;
  column5: string;
  column6: string;
  column7: string;
  column8: string;
  column9: string;
  column10: string;
  column11: string;
}

