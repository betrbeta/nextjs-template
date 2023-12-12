"use client";

import React, { useEffect, useState } from "react";

import "./styles/style.css";

import mixpanel from "../config/mixpanel";

import { logger } from "../utils/logger"

import CookieBanner from "./components/CookiesBanner";
import Link from "next/link";

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
        logger.error(err);
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
