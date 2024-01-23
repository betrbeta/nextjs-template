"use client";

import React, {useState, ChangeEvent, useEffect} from "react";
import "./styles/style.css";
import CookieBanner from "./components/CookiesBanner/CookiesBanner";
import Link from "next/link";
import {FetchWebsite} from "./components/FetchWebsite/FetchWebsite";
import {Feedback} from "./components/Feedback/Feedback";
import {Header} from "./components/Header/Header";
import {useDebounce} from "./hooks/useDebounce";

const Home = () => {
    const [url, setUrl] = useState<string>("");
    const debouncedValue = useDebounce<string>(url, url === "" ? 0 : 2000);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUrl(event.target.value);
    };

    useEffect(() => {
        // console.log(process.env.NODE_ENV.toString()) // development
        const level: string | undefined = process.env.NEXT_PUBLIC_PINO_LOG_LEVEL
        console.log(level?.toString()) // development
    }, []);

    return (
        <div>
            <Header/>
            <div>
                <h1 className="title">
                    <Link
                        data-cy='link'
                        href={"/"}
                        onClick={() => setUrl("")}>
                        Webpage Viewer
                    </Link>
                </h1>
                <div>
                    <input
                        data-cy="url-input"
                        className="h1"
                        type="text"
                        value={url}
                        onChange={handleChange}
                        placeholder="Enter URL"
                    />
                </div>
                <div>
                    {url && (
                        <FetchWebsite
                            data-cy="fetch-website"
                            url={debouncedValue !== "" ? debouncedValue : url}
                        />
                    )}
                </div>
            </div>
            <CookieBanner/>
            <Feedback/>
        </div>
    );
};

export default Home;
