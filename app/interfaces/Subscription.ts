//Subscription checker
export default interface SubscriptionModel {
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
