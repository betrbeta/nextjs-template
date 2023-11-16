import { useState } from "react";
import LikeIconSvg from "../SVGs/LikeIconSvg";
import DislikeIconSvg from "../SVGs/DislikeIconSvg";
import Script from "next/script";
let feedbackComponent = require("@ramseyinhouse/feedback-component");

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ["feedback-component"]: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

export const Feedback = () => {
  const [sadFeedback, setSadFeedback] = useState(false);
  const [changeColor, setChangeColor] = useState(false);

  const handleFeedback = () => {
    setChangeColor(!changeColor);
  };

  const handleBadFeedback = () => {
    setSadFeedback(true);
  };

  return (
    <>
      {sadFeedback ? (
        <div
          className={`fixed w-fit bottom-[5%] right-[5%] h-fit rounded-md p-[5px] bg-[#fbe9e7]`}
        >
          <iframe
            data-tally-src="https://tally.so/embed/mBprE7?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            height="446"
            title="Feedback"
          ></iframe>
          <Script
            id="tally-js"
            src="https://tally.so/widgets/embed.js"
            onLoad={() => {
              // @ts-ignore
              Tally.loadEmbeds();
            }}
          />
        </div>
      ) : (
        <div
          className={`fixed w-fit bottom-[5%] h-fit rounded-md p-[5px] right-[5%] ${
            changeColor === true ? "bg-[#e8fcd7]" : "bg-[#e6fafb]"
          }`}
        >
          <feedback-component onClick={handleFeedback}>
            <span
              slot="cta"
              className="text-[#003558] m-[3px] whitespace-nowrap"
            >
              Was this page helpful?
            </span>
            <span slot="confirmation" className="text-[#4e7a3e]">
              Thank you for your feedback!
            </span>
            <span slot="option-icon:0">
              <LikeIconSvg />
            </span>
            <span slot="option-icon:1" onClick={handleBadFeedback}>
              <DislikeIconSvg />
            </span>
          </feedback-component>
        </div>
      )}
    </>
  );
};
