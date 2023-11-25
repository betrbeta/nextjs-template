"use client";

import React, { useState, useEffect } from "react";
import image from "../../assets/images/aws_logo_dark.png";
import Image from "next/image";
import Link from "next/link";
import PlayIconSvg from "../components/SVGs/PlayIconSvg";
import PouseIconSvg from "../components/SVGs/PouseIconSvg";
import VolumeIconSvg from "../components/SVGs/VolumeIconSvg";
import VolumeOffIconSvg from "../components/SVGs/VolumeOffIconSvg";
import tts from "../api/tts/tts";

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
  const [confirmed, setConfirmed] = useState<string>("");
  const [errorIssue, setErrorIssue] = useState<Boolean>(false);
  const [errorBetter, setErrorBetter] = useState<Boolean>(false);
  const [errorConfirm, setErrorConfirm] = useState<Boolean>(false);
  const [audio, setAudio] = useState<any>(null);
  const [playState, setPlayState] = useState<string>("play");
  const [volumeOff, setVolumeOff] = useState<Boolean>(false);
  const [volume, setVolume] = useState<number>(1);
  const [range, setRange] = useState<number>(0);
  const [duration, setDuration] = useState<string>("");
  const [currentTime, setCurrentTime] = useState<string>("0:00");
  const [max, setMax] = useState<number>(0);

  function handleSubmit(event: React.FormEvent) {
    console.log("confirmSecret ", confirmSecret);
    console.log("secret ", secret);
    console.log("issue ", message);

    event.preventDefault();
    if (message.issue === "") {
      setErrorIssue(true);
      window.scrollTo({ top: 0 });
      return;
    } else setErrorIssue(false);
    if (message.better === "") {
      setErrorBetter(true);
      window.scrollTo({ top: 0 });
      return;
    } else setErrorIssue(false);
    if (confirmSecret === secret) {
      window.scrollTo({ top: 0 });
      console.log(message);
      setConfirmed("sent");
      setMessage(initialState);
      (event.target as HTMLFormElement)?.reset();
    } else {
      setErrorConfirm(true);
      setConfirmed("wrong");
    }
  }

  useEffect(() => {
    const audio = document.querySelector("audio") as HTMLMediaElement;
    if (audio.readyState > 0) {
      displayDuration(audio);
      setSliderMax(audio);
    } else {
      audio.addEventListener("loadedmetadata", () => {
        displayDuration(audio);
        setSliderMax(audio);
      });
    }

    audio.addEventListener("timeupdate", () => {
      setRange(Math.floor(audio.currentTime));
      setCurrentTime(calculateTime(audio.currentTime));
      showRangeProgress(audio);
    });
    audio.addEventListener("ended", () => {
      setPlayState("play");
    });
  }, []);

  const calculateTime = (secs: number) => {
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${minutes}:${returnedSeconds}`;
  };

  const setSliderMax = (audio: HTMLMediaElement) => {
    const volumeSlider = document.querySelector(".volume") as HTMLInputElement;
    const rangeSlider = document.querySelector(".range") as HTMLInputElement;
    setMax(Math.floor(audio.duration));
    volumeSlider?.style.setProperty(
      "--volume-before-width",
      `${volume * 100}%`
    );
    rangeSlider?.style.setProperty("--seek-before-width", "0%");
  };

  const displayDuration = (audio: HTMLMediaElement) => {
    setDuration(calculateTime(audio.duration));
  };

  const showRangeProgress = (audio: HTMLMediaElement) => {
    const rangeSlider = document.querySelector(".range") as HTMLInputElement;

    if (audio.readyState > 0) {
      rangeSlider?.style.setProperty(
        "--seek-before-width",
        (audio.currentTime / audio.duration) * 100 + "%"
      );
    }
  };

  useEffect(() => {
    (async () => {
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

      context.font = "bold 44px sans-serif";
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
      context.fillText(captcha.join(""), x, 48);
      //   context.strokeText(captcha.join(""));
      //   code = captcha.join("");
      (document.getElementById("captcha") as HTMLCanvasElement).appendChild(
        canvas
      ); // adds the canvas to the body element

      const b64 = await tts(captcha.join(","));
      setAudio(b64);
    })();
  }, []);

  const handleClickVolume = () => {
    setVolumeOff(!volumeOff);
    const audio = document.querySelector("audio") as HTMLMediaElement;
    audio.volume = audio.volume !== 0 ? 0 : volume;
  };

  const handleClickPlay = () => {
    const audio = document.querySelector("audio") as HTMLMediaElement;
    if (playState === "play") {
      audio.play();
      setPlayState("pause");
    } else {
      audio.pause();
      setPlayState("play");
    }
  };

  return (
    <div className="bg-white h-full min-h-screen text-[14px] font-normal">
      <header className="feedback__header bg-[#16191F] py-[20px] px-[30px] fixed top-0 left-0 w-screen">
        <Link className="w-fit block" href={"./feedback"}>
          <Image src={image} alt={"logo AWS"} width={"58"} height={"35"} />
        </Link>
      </header>
      {confirmed === "sent" ? (
        <div className={`flex bg-white text-black p-[30px] mt-[75px]`}>
          <h2>Your feedback was sent!</h2>
        </div>
      ) : (
        <div className="flex bg-white text-black p-[30px] mt-[75px]">
          <form className="w-5/6 mr-[20px]" onSubmit={handleSubmit}>
            {confirmed !== "wrong" && (
              <>
                <h2 className="feedback__title py-[5px] text-[28px] font-normal">
                  AWS Command Line Interface Documentation Feedback
                </h2>
                <h3 className="py-[5px] text-[18px] font-bold">Topic</h3>
                <p className="py-[5px] text-[14px] font-normal">
                  http://docs.aws.amazon.com/en_us/cli/latest/userguide/getting-started-install.html
                </p>
                <br />
                <h3>Feedback</h3>
                <label htmlFor="issues" className="block">
                  Type of issue:
                  <span
                    className={`${
                      errorIssue ? "inline" : "hidden"
                    } text-[#d13212] italic font-bold ml-[10px]`}
                  >
                    Error: Please select a type of issue.
                  </span>
                </label>
                <select
                  className={`block leading-[20px] ${
                    errorIssue
                      ? "border-2 border-[#d13212]"
                      : "border border-[#767676]"
                  } border-solid`}
                  id="issues"
                  defaultValue="--select an option--"
                  onChange={(event) => {
                    setMessage((prev) => ({
                      ...prev,
                      issue: event.target.value,
                    }));
                  }}
                >
                  <option className="pt-0 pb-px px-[2px]" disabled>
                    --select an option--
                  </option>
                  {issues.map((issue, index) => (
                    <option
                      className="pt-0 pb-px px-[2px]"
                      key={index}
                      value={issue}
                    >
                      {issue}
                    </option>
                  ))}
                </select>
                <br />
                <div>
                  <label htmlFor="better" className="block">
                    How can we make the documentation better?
                    <span
                      className={`${
                        errorBetter ? "inline" : "hidden"
                      } text-[#d13212] italic font-bold ml-[10px]`}
                    >
                      Error: Please provide a response.
                    </span>
                  </label>
                  <textarea
                    aria-labelledby="better"
                    className={`block w-full p-[5px] mb-[5px] resize-y ${
                      errorBetter
                        ? "border-2 border-[#d13212]"
                        : "border border-[#767676]"
                    } border-solid`}
                    rows={5}
                    cols={100}
                    id="better"
                    maxLength={8192}
                    onChange={(event) => {
                      setMessage((prev) => ({
                        ...prev,
                        better: event.target.value,
                      }));
                    }}
                    defaultValue={message.better}
                  />

                  <p className="block italic">{`${
                    8192 - message.better.length
                  } characters remaining.`}</p>
                </div>
                <br />
                <div>
                  <label htmlFor="doing" className="block">
                    What are you trying to do?
                  </label>
                  <textarea
                    aria-labelledby="doing"
                    className="block w-full p-[5px] mb-[5px] resize-y border border-[#767676] border-solid"
                    rows={5}
                    cols={100}
                    id="doing"
                    maxLength={8192}
                    onChange={(event) => {
                      setMessage((prev) => ({
                        ...prev,
                        doing: event.target.value,
                      }));
                    }}
                    defaultValue={message.doing}
                  />
                  <p className="block italic">{`${
                    8192 - message.doing.length
                  } characters remaining.`}</p>
                </div>
                <br />
                <h3 className="py-[5px] text-[18px] font-bold">
                  Contact Information (optional)
                </h3>
                <div className="block">
                  <label>
                    Enter your email address and we can let you know when we
                    have fixed your issue, or ask you for more details to help
                    solve it. We don't share your information with anyone else.
                  </label>
                  <input
                    className="block pt-0 pb-px px-[2px] border border-[#767676] border-solid"
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
                <br />
              </>
            )}
            <h3 className="py-[5px] text-[18px] font-bold">Security Check</h3>
            <span
              className={`${
                errorConfirm ? "inline" : "hidden"
              } text-[#d13212] italic font-bold`}
            >
              Error: The security check failed. Please try again.
              <br />
              <br />
            </span>
            <div>
              <label htmlFor="confirm">
                Type the characters in the image or the characters spoken in the
                audio. This enables us to prevent automated or scripted feedback
                submissions.
              </label>
              <div className="flex mb-[10px] items-center justify-start">
                <div id="captcha" className="my-[10px]"></div>
                <div
                  id="captchaAudio"
                  className="relative flex items-center justify-start my-[10px] ml-[10px] w-[300px] h-[54px] px-[5px] rounded-[100px] bg-[#f1f3f4]"
                >
                  <audio src={audio} preload="metadata" />

                  <button
                    className="rounded-full hover:bg-[#e7e7e7] w-[32px] h-[32px] p-[4px]"
                    type="button"
                    onClick={handleClickPlay}
                  >
                    {playState !== "play" ? <PouseIconSvg /> : <PlayIconSvg />}
                  </button>
                  <div className="whitespace-nowrap ml-[5px]">
                    {currentTime}
                  </div>
                  <div className="whitespace-nowrap ml-[5px]">{duration}</div>
                  <input
                    className="range"
                    type="range"
                    value={range}
                    min={0}
                    step={0.01}
                    max={max}
                    aria-label="audio time scrubber"
                    aria-valuetext="elapsed time: 0:00"
                    onInput={(event) => {
                      event.currentTarget.style.setProperty(
                        "--seek-before-width",
                        (Number(event.currentTarget.value) /
                          Number(event.currentTarget.max)) *
                          100 +
                          "%"
                      );
                      setCurrentTime(
                        calculateTime(Number(event.currentTarget.value))
                      );
                      if (!audio.paused) {
                      }
                    }}
                    onChange={(event) => {
                      (
                        document.querySelector("audio") as HTMLMediaElement
                      ).currentTime = Number(event.currentTarget.value);
                      if (!audio.paused) {
                      }
                    }}
                  />
                  <div
                    className="flex justify-end rounded-full overflow-hidden w-[32px] h-[32px] transition-all duration-300 
                ease-out hover:bg-[#e7e7e7] hover:w-[300px]"
                  >
                    <input
                      type="range"
                      className="volume"
                      value={volume}
                      min={0}
                      step={0.01}
                      max={1}
                      aria-label="audio volume scrubber"
                      aria-valuetext="elapsed volume: 50%"
                      onChange={(event) => {
                        setVolume(Number(event.currentTarget.value));
                        (
                          document.querySelector("audio") as HTMLMediaElement
                        ).volume = Number(event.currentTarget.value);
                      }}
                      onInput={(event) => {
                        event.currentTarget.style.setProperty(
                          "--volume-before-width",
                          (Number(event.currentTarget.value) /
                            Number(event.currentTarget.max)) *
                            100 +
                            "%"
                        );
                      }}
                    />
                    <button
                      onClick={handleClickVolume}
                      type="button"
                      className="rounded-full w-[32px] h-[32px] p-[4px]"
                    >
                      {volumeOff ? <VolumeOffIconSvg /> : <VolumeIconSvg />}
                    </button>
                  </div>
                </div>
              </div>
              <input
                className="block pt-0 pb-px px-[2px] border border-[#767676] border-solid"
                id="confirm"
                type="text"
                size={25}
                autoComplete="off"
                value={confirmSecret}
                onChange={(event) => {
                  setConfirmSecret(event.target.value);
                }}
              />
            </div>
            <br />
            <input
              className="block px-[5px] border border-[#767676] border-solid bg-[#f0f0f0] cursor-pointerr"
              type="submit"
              defaultValue={"Submit Feedback"}
            />
          </form>
          <div className="w-1/6">
            <h3 className="py-[5px] text-[18px] font-bold">
              Additional Information:
            </h3>
            <ul className="list-disc list-inside">
              <li className="my-[5px]">
                <Link
                  className="text-[#0073bb] hover:underline hover:decoration-auto hover:decoration-solid hover:underline-offset-1"
                  href={"./"}
                >
                  AWS re:Post
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
      {confirmed === "" && (
        <footer className="py-[16px] px-[30px] w-screen border-t-[1px] text-xs text-[#545b64] border-t-[#EAEDED] border-t-solid">
          <div className="flex justify-start align-center h-[20px] ">
            <ul className="flex justify-center align-center">
              <li className="after:content-['|'] after:text-[#879596] after:px-[5px] after:h-auto hover:underline hover:after:underline">
                <Link className="" href={"./feedback"}>
                  Privacy
                </Link>
              </li>
              <li className="after:content-['|'] after:text-[#879596] after:px-[5px] after:h-auto hover:underline hover:after:underline">
                <Link className="" href={"./feedback"}>
                  Site terms
                </Link>
              </li>
              <li className="after:content-['|'] after:text-[#879596] after:px-[5px] after:h-auto hover:underline hover:after:underline">
                <Link className="" href={"./feedback"}>
                  Cookie preferences
                </Link>
              </li>
            </ul>
            <p>
              © 2023, Amazon Web Services, Inc. or its affiliates. All rights
              reserved.
            </p>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Feedback;
