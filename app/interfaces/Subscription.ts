//Subscription checker

/**
 * @method Subscription Subscription interface
 * @param {number} orderId - The order id
 * @param {string} subscriptionName - The subscription name
 * @param {string} paymentCycle - The payment cycle
 * @param {string} status - The status
 * @param {string} subscriptionStartDate - The subscription start date
 * @param {string} subscriptionEndDate - The subscription end date
 * @param {string} trialSubscriptionEndDate - The trial subscription end date
 * @param {string} nextPaymentDueDate - The next payment due date
 * @param {string} nextPaymentAmount - The next payment amount
 * @param {string} emailAddress - The email address
 * @exports Subscription 
 */
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
