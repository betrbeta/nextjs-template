"use client"

import React, { useEffect, useState } from "react";
import mixpanel from "../../../config/mixpanel";

export const FetchWebsite = ({ url }: { url: string }) => {
  const [hasError, setHasError] = useState(false);

  const href = new URL(`https://${url}`).href;

  useEffect(() => {
    const abortController = new AbortController();
    /**
     * Track website fetch event
     * @param url - URL of the website
     */
    const trackWebsiteFetch = (href: string) => {
      mixpanel.track("Website Fetched", { href });
    };

    const getSiteAvailability = async () => {
      try {
        await fetch(href, {
          mode: "no-cors",
          signal: abortController.signal,
        });
        setHasError(false);

        // Track website fetch event
        trackWebsiteFetch(href);
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
          src={href}
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
