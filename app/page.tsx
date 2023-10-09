"use client";

import React, { useEffect, useState } from "react";
import "./styles/style.css";
import mixpanel from "../config/mixpanel";
import CookieBanner from "./components/CookiesBanner";
import Link from "next/link";
import Subscription from "./interfaces/Subscription";
import Props from "./interfaces/Props";
import SubscriptionsTable from "./components/SubscriptionTable";
import MySubscription from "./mySubscription/page";

/**
 * @topic Home Page
 * @class Home Page
 * @var {object} url The url object
 * @function trackWebsiteFetch The function to track website fetch event
 * @function getSiteAvailability The function to get the site availability
 * @function FetchWebsite The function to fetch the website
 * @function Home The function to display the home page
 * @description This component is used to display the home page
 * @returns Home Page
 */
const FetchWebsite = ({ url }: { url: string }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();

    /**
     * Track website fetch event
     * @param url - URL of the website
     */
    const trackWebsiteFetch = (url: string) => {
      mixpanel.track("Website Fetched", { url });
    };

    const getSiteAvailability = async () => {
      try {
        await fetch(url, { mode: "no-cors", signal: abortController.signal });
        setHasError(false);

        // Track website fetch event
        trackWebsiteFetch(url);
      } catch (err) {
        setHasError(true);
      }
    };

    getSiteAvailability();

    return () => abortController.abort();
  }, [url]);

  return (
    <div>
      {hasError ? (
        <div className="error">
          An error occurred while loading the website.
        </div>
      ) : (
        <iframe
          src={url}
          style={{
            width: "100%",
            height: "600px",
            border: "none",
          }}
        ></iframe>
      )}
    </div>
  );
};

const Home = () => {
  const [url, setUrl] = useState("");

  return (
    <>
      <div>
        <h1 className="title">Webpage Viewer</h1>
        <div>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter URL"
          />
        </div>
        <div>{url && <FetchWebsite url={url} />}</div>
      </div>
      <CookieBanner />
      <Link href="/mySubscription">Go to subscription page</Link>
    </>
  );
};

export default Home;
