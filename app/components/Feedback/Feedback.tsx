import { useState } from "react";
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
import FeedbackComponent from "@ramseyinhouse/feedback-component";

declare global {
  namespace React.JSX {
    interface IntrinsicElements {
      ["feedback-component"]: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

interface FeedbackMessage {
  email: string;
  radio: string;
  text: string;
  file: File | null;
  screenshot: Blob | null;
}

const initialState: FeedbackMessage = {
  email: "",
  radio: "",
  text: "",
  file: null,
  screenshot: null,
};

export const Feedback = () => {
  const [changeColor, setChangeColor] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [blob, setBlob] = useState("");
  const [message, setMessage] = useState(initialState);

  const handleFeedback = () => {
    setChangeColor(!changeColor);
  };

  const handleBadFeedback = () => {
    setOpenModal(true);
  };
  const feedbackComponent = new FeedbackComponent();
  console.log(feedbackComponent);

  async function capture() {
    const mediaDevices = navigator.mediaDevices as any;
    const stream = await mediaDevices.getDisplayMedia({
      preferCurrentTab: true,
    });

    const vid = document.createElement("video");

    vid.addEventListener("loadedmetadata", async function () {
      const canvas = document.createElement("canvas"),
        ctx: any = canvas.getContext("2d");
      ctx.canvas.width = vid.videoWidth;
      ctx.canvas.height = vid.videoHeight;
      ctx.drawImage(vid, 0, 0, vid.videoWidth, vid.videoHeight);

      stream.getVideoTracks()[0].stop();

      let a = document.createElement("a");
      a.href = canvas.toDataURL("image/png");
      setBlob(a.href);
      const blobForMessage: Blob = await new Promise((resolve: any) =>
        canvas.toBlob(resolve, "image/png")
      );
      setMessage((prev) => ({
        ...prev,
        screenshot: blobForMessage,
      }));
      (document.getElementById("modal") as HTMLDivElement).style.visibility =
        "visible";
    });

    vid.srcObject = stream;
    vid.play();
  }

  function handleSubmit() {
    console.log(message);
    setMessage(initialState);
    setBlob("");
    setOpenModal(false);
  }

  return (
    <>
      {openModal ? (
        <Modal
          id="modal"
          className="transition-all"
          dismissible
          show={openModal}
          size="md"
          popup
          onClose={() => {
            setOpenModal(false);
            setBlob("");
          }}
        >
          <Modal.Header />
          <Modal.Body>
            <div className="flex max-w-md flex-col gap-4">
              <fieldset
                className="flex max-w-md flex-col gap-4"
                onChange={(event) => {
                  const target = event.target as HTMLInputElement;
                  setMessage((prev) => ({
                    ...prev,
                    radio: target.value,
                  }));
                }}
              >
                <legend className="mb-4 text-xl font-medium text-gray-900">
                  We're sorry to hear that. How could we improve it?
                </legend>
                <div className="flex items-center gap-2">
                  <Radio
                    id="missing"
                    name="radio"
                    value="missing"
                    // defaultChecked
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
                  <Label htmlFor="else">Something else</Label>
                </div>
              </fieldset>
              <div className="max-w-md">
                <div className="mb-2 block">
                  <Label htmlFor="comment" value="Your message" />
                </div>
                <Textarea
                  className="p-[10px] !outline-none"
                  id="comment"
                  placeholder="Leave a comment..."
                  required
                  rows={4}
                  onChange={(event) =>
                    setMessage((prev) => ({
                      ...prev,
                      text: event.target.value,
                    }))
                  }
                />
              </div>
              <div id="fileUpload" className="max-w-md">
                <div className="mb-2 block">
                  <Label htmlFor="file" value="Upload file" />
                </div>
                <FileInput
                  className="file:mr-5 file:py-1 file:px-3 file:border-[1px] file:text-xs file:font-medium file:bg-stone-50 file:text-stone-700 hover:file:cursor-pointer hover:file:bg-blue-50 hover:file:text-blue-700"
                  id="file"
                  helperText="File providing is useful to understand problem within"
                  onChange={(event) =>
                    setMessage((prev) => ({
                      ...prev,
                      file: event.target.files ? event.target.files[0] : null,
                    }))
                  }
                />
              </div>
              <div id="screenshootUpload" className="max-w-md">
                <div className="mb-2 block">
                  <Label htmlFor="screenshoot" value="Upload screenshoot" />
                </div>
                <div>
                  <Button
                    color="purple"
                    className="w-full"
                    onClick={(e: React.MouseEvent) => {
                      if (blob === "") {
                        (
                          document.getElementById("modal") as HTMLDivElement
                        ).style.visibility = "hidden";
                        capture();
                      } else {
                        setBlob("");
                      }
                    }}
                  >
                    {blob === "" ? "Upload screenshoot" : "Reset screenshot"}
                  </Button>
                  <p>Screenshoot is useful to understand problem</p>
                  {blob !== "" && (
                    <img id="screenshot" src={blob} className="w-full" />
                  )}
                </div>
                <hr className="h-px my-8 bg-[#330033] opacity-50 border-0"></hr>
                <div className="mb-4 block w-full">
                  <div className="mb-2 block">
                    <Label htmlFor="email" value="Your email" />
                  </div>
                  <TextInput
                    id="email"
                    placeholder="name@company.com"
                    required
                    onChange={(event) =>
                      setMessage((prev) => ({
                        ...prev,
                        email: event.target.value,
                      }))
                    }
                  />
                </div>
                <Button
                  color="purple"
                  className="w-full"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Send feedback to BetrBeta
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      ) : (
        <div
          className={`fixed w-fit bottom-[5%] h-fit rounded-md p-[5px] right-[5%] transition-all ${
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
