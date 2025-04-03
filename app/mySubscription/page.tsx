"use client";
import React, { useState, useEffect } from "react";
import SubscriptionsTable from "../components/SubscriptionTable/SubscriptionTable";
import { getFirestore, collection, query, getDocs } from "firebase/firestore";
import app from "@/lib/filebase/firebaseConfig";
import Subscription from "../interfaces/Subscription";
import  populateFirestoreWithDummyData  from '../../lib/filebase/populateFirestore'

const MySubscription = () => {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      // await populateFirestoreWithDummyData;
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
    <div className='subscription-page'>
      <h1 className='mb-10 text-2xl font-bold text-center'>My Subscriptions</h1>
      <SubscriptionsTable subscriptions={subscriptions} />
    </div>
  )
};

export default MySubscription;
