import {
  getFirestore,
  collection,
  addDoc,
  query,
  getDocs,
} from "firebase/firestore";
import Subscription from "@/app/interfaces/Subscription";
import logger from "@/logger";
import initializeFirebase from "./firebaseConfig";

async function populateFirestoreWithDummyData() {
  const app = initializeFirebase();
  const db = getFirestore(app);
  const subscriptionsCollection = collection(db, "subscriptions");
  const subscriptionsQuery = query(subscriptionsCollection);

  const snapshot = await getDocs(subscriptionsQuery);
  const subscriptionData = snapshot.docs.map(
    (doc) => doc.data() as Subscription
  );

  const dummySubscriptions: Subscription[] = [
    {
      orderId: 1,
      subscriptionName: "Example Subscription 1",
      paymentCycle: "Monthly",
      status: "Active",
      subscriptionStartDate: "2023-09-01",
      subscriptionEndDate: "2023-10-01",
      trialSubscriptionEndDate: "2023-09-15",
      nextPaymentDueDate: "2023-10-01",
      nextPaymentAmount: "$19.99",
      emailAddress: "jkpordje@gmail.com",
    },
    {
      orderId: 2,
      subscriptionName: "Example Subscription 2",
      paymentCycle: "Monthly",
      status: "Active",
      subscriptionStartDate: "2023-09-01",
      subscriptionEndDate: "2023-10-01",
      trialSubscriptionEndDate: "2023-09-15",
      nextPaymentDueDate: "2023-10-01",
      nextPaymentAmount: "$19.99",
      emailAddress: "2jkpordje@gmail.com",
    },
    {
      orderId: 3,
      subscriptionName: "Example Subscription 3",
      paymentCycle: "Monthly",
      status: "Active",
      subscriptionStartDate: "2023-09-01",
      subscriptionEndDate: "2023-10-01",
      trialSubscriptionEndDate: "2023-09-15",
      nextPaymentDueDate: "2023-10-01",
      nextPaymentAmount: "$19.99",
      emailAddress: "3jkpordje@gmail.com",
    },
    {
      orderId: 4,
      subscriptionName: "Example Subscription 4",
      paymentCycle: "Monthly",
      status: "Active",
      subscriptionStartDate: "2023-09-01",
      subscriptionEndDate: "2023-10-01",
      trialSubscriptionEndDate: "2023-09-15",
      nextPaymentDueDate: "2023-10-01",
      nextPaymentAmount: "$19.99",
      emailAddress: "4jkpordje@gmail.com",
    },
    {
      orderId: 5,
      subscriptionName: "Example Subscription 5",
      paymentCycle: "Monthly",
      status: "Active",
      subscriptionStartDate: "2023-09-01",
      subscriptionEndDate: "2023-10-01",
      trialSubscriptionEndDate: "2023-09-15",
      nextPaymentDueDate: "2023-10-01",
      nextPaymentAmount: "$19.99",
      emailAddress: "5jkpordje@gmail.com",
    },
    {
      orderId: 6,
      subscriptionName: "Example Subscription 6",
      paymentCycle: "Monthly",
      status: "Active",
      subscriptionStartDate: "2023-09-01",
      subscriptionEndDate: "2023-10-01",
      trialSubscriptionEndDate: "2023-09-15",
      nextPaymentDueDate: "2023-10-01",
      nextPaymentAmount: "$19.99",
      emailAddress: "6jkpordje@gmail.com",
    },
    {
      orderId: 7,
      subscriptionName: "Example Subscription 7",
      paymentCycle: "Monthly",
      status: "Active",
      subscriptionStartDate: "2023-09-01",
      subscriptionEndDate: "2023-10-01",
      trialSubscriptionEndDate: "2023-09-15",
      nextPaymentDueDate: "2023-10-01",
      nextPaymentAmount: "$19.99",
      emailAddress: "7jkpordje@gmail.com",
    },
  ];

  const filteredSubscription =
    subscriptionData.length !== 0
      ? dummySubscriptions.filter((a) =>
          subscriptionData.find(
            (b) => Object.values(b)[0].orderId === a.orderId
          )
        )
      : dummySubscriptions;
  for (const subscription of filteredSubscription) {
    await addDoc(collection(db, "subscriptions"), subscription);
  }

  logger.info("Dummy data added to firebase");
}

export default populateFirestoreWithDummyData;
