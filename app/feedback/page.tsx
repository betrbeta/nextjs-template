"use client";

import React, { useState, ChangeEvent, useEffect } from "react";
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

  useEffect(() => {
    (() => {
      //   let code;
      (document.getElementById("captcha") as HTMLDivElement).innerHTML = "";
      const charsArray = "0123456789abcdefghijklmnopqrstuvwxyz"; //ABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%^&*
      const lengthOtp = 6;
      let captcha = [];
      for (let i = 0; i < lengthOtp; i++) {
        const index = Math.floor(Math.random() * charsArray.length + 1);
        // if (captcha.indexOf(charsArray[index]) === -1)
        captcha.push(charsArray[index]);
        // else i--;
      }
      setSecret(captcha.join(""));
      const canvas = document.createElement("canvas");
      canvas.id = "captcha";
      canvas.width = 200;
      canvas.height = 70;
      const x = canvas.width / 2;
      const context: any = canvas.getContext("2d");
      const gradient = context.createLinearGradient(100, 20, 200, 70);
      gradient.addColorStop(0, "#fff");
      gradient.addColorStop(1, "#767676");
      context.fillStyle = gradient;
      context.fillRect(0, 0, 200, 70);

      let startFirst = {
        x: Math.floor(Math.random() * 200),
        y: Math.floor(Math.random() * 70),
      };
      let cp1First = {
        x: Math.floor(Math.random() * 200),
        y: Math.floor(Math.random() * 70),
      };
      let cp2First = {
        x: Math.floor(Math.random() * 200),
        y: Math.floor(Math.random() * 70),
      };
      let endFirst = {
        x: Math.floor(Math.random() * 200),
        y: Math.floor(Math.random() * 70),
      };
      context.lineWidth = 2;
      context.beginPath();
      context.moveTo(startFirst.x, startFirst.y);
      context.bezierCurveTo(
        cp1First.x,
        cp1First.y,
        cp2First.x,
        cp2First.y,
        endFirst.x,
        endFirst.y
      );
      context.stroke();

      let startSecond = {
        x: Math.floor(Math.random() * 200),
        y: Math.floor(Math.random() * 70),
      };
      let cp1Second = {
        x: Math.floor(Math.random() * 200),
        y: Math.floor(Math.random() * 70),
      };
      let cp2Second = {
        x: Math.floor(Math.random() * 200),
        y: Math.floor(Math.random() * 70),
      };
      let endSecond = {
        x: Math.floor(Math.random() * 200),
        y: Math.floor(Math.random() * 70),
      };
      context.lineWidth = 4;
      context.beginPath();
      context.moveTo(startSecond.x, startSecond.y);
      context.bezierCurveTo(
        cp1Second.x,
        cp1Second.y,
        cp2Second.x,
        cp2Second.y,
        endSecond.x,
        endSecond.y
      );
      context.stroke();

      context.font = "bold 48px sans-serif";
      context.fillStyle = "#000";
      context.textAlign = "center";
      context.shadowColor = "#000";
      context.shadowBlur = 5;
      context.shadowOffsetX =
        Math.random() > 0.5
          ? Math.floor(Math.random() * 10) * -1
          : Math.floor(Math.random() * 10);
      context.shadowOffsetY =
        Math.random() > 0.5
          ? Math.floor(Math.random() * 10) * -1
          : Math.floor(Math.random() * 10);
      //   context.moveTo(x, 0);
      context.fillText(captcha.join(""), x, 45);
      //   context.strokeText(captcha.join(""));
      //   code = captcha.join("");
      (document.getElementById("captcha") as HTMLCanvasElement).appendChild(
        canvas
      ); // adds the canvas to the body element
    })();
  }, []);

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
        <div id="captcha"></div>
        <div id="captchaAudio"></div>
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
