import { useEffect, useState } from 'react'

export function useScreenshot() {
  const [screenshot, setScreenshot] = useState('')
  
    useEffect(() => {

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
      setScreenshot(a.href);
    });

    vid.srcObject = stream;
    vid.play();
  }
      capture();
  },[])

  return screenshot;
}