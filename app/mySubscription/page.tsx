"use client";
import React, { useState, useEffect } from "react";
import SubscriptionsTable from "../components/SubscriptionTable";
import { getFirestore, collection, query, getDocs } from "firebase/firestore";
import app from "@/lib/filebase/firebaseConfig";
import Subscription from "../interfaces/Subscription";

/**
 * @topic My Subscriptions Page
 * @class MySubscription Page
 * @var {object} subscriptions The subscriptions object
 * @description This component is used to display the subscriptions page
 * @returns My Subscriptions Page
 */
const MySubscription = () => {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore(app);
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
