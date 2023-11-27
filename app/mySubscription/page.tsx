"use client";
import React, { useState, useEffect } from "react";
import SubscriptionsTable from "../components/SubscriptionTable";
import {
  getFirestore,
  collection,
  query,
  getDocs,
  connectFirestoreEmulator,
} from "firebase/firestore";
import Subscription from "../interfaces/Subscription";
import initializeFirebase from "@/lib/filebase/firebaseConfig";

const MySubscription = () => {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      console.log("click1");
      const app = initializeFirebase();
      const db = getFirestore(app);

      if (process.env.NODE_ENV === "development") {
        connectFirestoreEmulator(db, "localhost", 8080);
      }
      const subscriptionsCollection = collection(db, "subscriptions");
      const subscriptionsQuery = query(subscriptionsCollection);

      const snapshot = await getDocs(subscriptionsQuery);
      const subscriptionData = snapshot.docs.map(
        (doc) => doc.data() as Subscription
      );

      setSubscriptions(subscriptionData);
    };
    fetchData();
  }, []);

  return (
    <div className="subscription-page">
      <h1>My Subscriptions</h1>
      <SubscriptionsTable subscriptions={subscriptions} />
    </div>
  );
};

export default MySubscription;
