"use client";

import React, { useState, ChangeEvent } from "react";
import "../styles/feedback.css";

interface FeedbackMessage {
  issue: string;
  better: string;
  doing: string;
  email: string;
}

const initialState: FeedbackMessage = {
  issue: "",
  better: "",
  doing: "",
  email: "",
};

const issues = [
  "Broken link",
  "Display and design",
  "Grammar or spelling",
  "Innacurate information",
  "Incomlete information",
  "Kudos",
  "Translation",
];

const Feedback = () => {
  const [message, setMessage] = useState(initialState);
  const [secret, setSecret] = useState<string>("");
  const [confirmSecret, setConfirmSecret] = useState<string>("");
  const [confirmed, setConfirmed] = useState<Boolean>(false);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (confirmSecret === secret) {
      console.log("was sent");
      setConfirmed(true);
      (event.currentTarget.parentNode as HTMLFormElement)?.reset();
    } else {
      setConfirmed(false);
    }
  }
  return (
    <form className="w-[730px]">
      {confirmed === false && (
        <>
          <h2>Feedback</h2>
          <label htmlFor="issues">
            Type of issue:
            <span className="hidden error issue">
              Error: Please select a type of issue.
            </span>
          </label>
          <select id="issues" value={message.issue}>
            <option selected disabled>
              --select an option--
            </option>
            {issues.map((issue, index) => (
              <option key={index} value={issue}>
                {issue}
              </option>
            ))}
          </select>
          <div>
            <label>How can we make the documentation better?</label>
            <span className="hidden error better">
              Error: Please provide a response.
            </span>
            <textarea
              maxLength={8192}
              onChange={(event) => {
                setMessage((prev) => ({
                  ...prev,
                  better: event.target.value,
                }));
              }}
            >
              {message.better}
            </textarea>
            <p>{`${8192 - message.better.length} characters remaining.`}</p>
          </div>
          <div>
            <label>What are you trying to do?</label>
            <textarea
              maxLength={8192}
              onChange={(event) => {
                setMessage((prev) => ({
                  ...prev,
                  better: event.target.value,
                }));
              }}
            >
              {message.better}
            </textarea>
            <p>{`${8192 - message.better.length} characters remaining.`}</p>
          </div>
          <h3>Contact Information (optional)</h3>
          <div className="flex flex-col">
            <label>
              Enter your email address and we can let you know when we have
              fixed your issue, or ask you for more details to help solve it. We
              don't share your information with anyone else.
            </label>
            <input
              type="email"
              name="contact_email"
              autoComplete="email"
              placeholder="email address"
              size={50}
              aria-labelledby="email-label"
              value={message.email}
              onChange={(event) => {
                setMessage((prev) => ({
                  ...prev,
                  email: event.target.value,
                }));
              }}
            />
          </div>
        </>
      )}
      <h3>Security Check</h3>
      <div>
        <label>
          Type the characters in the image or the characters spoken in the
          audio. This enables us to prevent automated or scripted feedback
          submissions.
        </label>
        <input
          type="text"
          value={confirmSecret}
          onChange={(event) => {
            setConfirmSecret(event.target.value);
          }}
        />
      </div>
      <button type="submit" onSubmit={handleSubmit}>
        Submit Feedback
      </button>
    </form>
  );
};

export default Feedback;
