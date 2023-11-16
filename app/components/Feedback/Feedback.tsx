import { useState, useRef } from "react";
import LikeIconSvg from "../SVGs/LikeIconSvg";
import DislikeIconSvg from "../SVGs/DislikeIconSvg";
import {
  Button,
  Label,
  Modal,
  TextInput,
  Textarea,
  Radio,
  FileInput,
} from "flowbite-react";

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
  // const [sadFeedback, setSadFeedback] = useState(false);
  const [changeColor, setChangeColor] = useState(false);

  const handleFeedback = () => {
    setChangeColor(!changeColor);
  };

  const handleBadFeedback = () => {
    setOpenModal(true);
  };

  const [openModal, setOpenModal] = useState(false);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const [blob, setBlob] = useState("");

  async function capture() {
    const mediaDevices = navigator.mediaDevices as any;
    const stream = await mediaDevices.getDisplayMedia({
      preferCurrentTab: true,
    });

    const vid = document.createElement("video");

    vid.addEventListener("loadedmetadata", function () {
      const canvas = document.createElement("canvas"),
        ctx: any = canvas.getContext("2d");
      ctx.canvas.width = vid.videoWidth;
      ctx.canvas.height = vid.videoHeight;
      ctx.drawImage(vid, 0, 0, vid.videoWidth, vid.videoHeight);

      stream.getVideoTracks()[0].stop();

      let a = document.createElement("a");
      a.href = canvas.toDataURL("image/png");
      setBlob(a.href);
    });

    vid.srcObject = stream;
    vid.play();
  }

  return (
    <>
      {openModal ? (
        <Modal
          show={openModal}
          size="md"
          popup
          onClose={() => setOpenModal(false)}
          initialFocus={emailInputRef}
        >
          <Modal.Header />
          <Modal.Body>
            <img src={blob} width="200px" />
            <div className="flex max-w-md flex-col gap-4">
              <fieldset className="flex max-w-md flex-col gap-4">
                <legend className="mb-4 text-xl font-medium text-gray-900">
                  We're sorry to hear that. How could we improve it?
                </legend>
                <div className="flex items-center gap-2">
                  <Radio
                    id="missing"
                    name="radio"
                    value="missing"
                    defaultChecked
                  />
                  <Label htmlFor="missing">It has missing information</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Radio id="hard" name="radio" value="hard" />
                  <Label htmlFor="hard">It's hard to follow or confusing</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Radio id="innacurate" name="radio" value="innacurate" />
                  <Label htmlFor="innacurate">
                    It's innacurate, out of day or doesn't work
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Radio id="else" name="radio" value="else" />
                  <Label htmlFor="uk">Something else</Label>
                </div>
                <div className="max-w-md">
                  <div className="mb-2 block">
                    <Label htmlFor="comment" value="Your message" />
                  </div>
                  <Textarea
                    id="comment"
                    placeholder="Leave a comment..."
                    required
                    rows={4}
                  />
                </div>
              </fieldset>
              <div id="fileUpload" className="max-w-md">
                <div className="mb-2 block">
                  <Label htmlFor="file" value="Upload file" />
                </div>
                <FileInput
                  id="file"
                  helperText="A file providing is useful to understand problem within"
                />
              </div>
              <div id="screenshootUpload" className="max-w-md">
                <div className="mb-2 block">
                  <Label htmlFor="screenshoot" value="Upload screenshoot" />
                </div>
                <FileInput
                  id="screenshot"
                  helperText="Screenshoot is useful to understand realview problem"
                />
                <Button onClick={() => capture()}></Button>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="email" value="Your email" />
                  </div>
                  <TextInput
                    id="email"
                    ref={emailInputRef}
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <Button type="submit">Send feedback to BetrBeta</Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
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
