"use client";

import React, { useState, ChangeEvent } from "react";
import "./styles/style.css";
import CookieBanner from "./components/CookiesBanner/CookiesBanner";
import Link from "next/link";
import { FetchWebsite } from "./components/FetchWebsite/FetchWebsite";
import { Feedback } from "./components/Feedback/Feedback";
import { Header } from "./components/Header/Header";
import { useDebounce } from "./hooks/useDebounce";

const Home = () => {
  const [url, setUrl] = useState<string>("");
  const debouncedValue = useDebounce<string>(url, 2000);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };

  return (
    <div>
      <Header />
      <div>
        <h1 className="title">
          <Link href={"/"} onClick={() => setUrl("")}>
            Webpage Viewer
          </Link>
        </h1>
        <div>
          <input
            className="h1"
            type="text"
            value={url}
            onChange={handleChange}
            placeholder="Enter URL"
          />
        </div>
        <div>
          {url && (
            <FetchWebsite url={debouncedValue !== "" ? debouncedValue : url} />
          )}
        </div>
      </div>
      <CookieBanner />
      <Feedback />
    </div>
  );
};

export default Home;
