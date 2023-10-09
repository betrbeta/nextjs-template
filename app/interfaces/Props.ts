import Subscription from "./Subscription";

/**
 * @topic Props interface for the Subscriptions component
 * @interface Subscription interface
 * @param {Subscription[]} subscriptions - The list of subscriptions
 * @exports Props
 * @exports Subscription
 * @returns {void}  - Nothing
 */
export default interface Props {
  subscriptions: Subscription[];
}
