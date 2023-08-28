"use client";

import { PDFDocument } from "pdf-lib";
import { useEffect, useState } from "react";

export default function Home() {
  const [pdfFileData, setPdfFileData] = useState();
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);
  const [files, setFiles] = useState(null);
  function readFileAsync(file) {
    return new Promise((resolve, reject) => {
      let reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = reject;
      reader.readAsArrayBuffer(file);
    });
  }

  function renderPdf(uint8array) {
    const tempblob = new Blob([uint8array], {
      type: "application/pdf",
    });
    const docUrl = URL.createObjectURL(tempblob);
    setPdfFileData(docUrl);
  }

  function range(start, end) {
    let length = end - start + 1;
    return Array.from({ length }, (_, i) => start + i - 1);
  }
  async function extractPdfPage(arrayBuff) {
    const pdfSrcDoc = await PDFDocument.load(arrayBuff);
    const pdfNewDoc = await PDFDocument.create();

    const pages = await pdfNewDoc.copyPages(pdfSrcDoc, range(+start, +end));
    pages.forEach((page) => pdfNewDoc.addPage(page));
    const newpdf = await pdfNewDoc.save();
    return newpdf;
  }

  // Execute when user select a file
  const onFileSelected = async (e) => {
    const fileList = e.target.files;
    setFiles(fileList);
    if (fileList?.length > 0) {
      const pdfArrayBuffer = await readFileAsync(fileList[0]);
      // if (start > 1 && end > 1) {
      //   const newPdfDoc = await extractPdfPage(pdfArrayBuffer);
      //   return renderPdf(newPdfDoc);
      // }

      renderPdf(pdfArrayBuffer);
    }
  };
  useEffect(() => {
    if (start && end) {
      const onEffect = async () => {
        const pdfArrayBuffer = await readFileAsync(files[0]);
        const newPdfDoc = await extractPdfPage(pdfArrayBuffer);
        renderPdf(newPdfDoc);
      };
      onEffect();
    }
  }, [start, end]);
  return (
    <div className=" flex flex-col items-center justify-center min-h-screen py-2">
      <input
        type="file"
        id="file-selector"
        accept=".pdf"
        onChange={onFileSelected}
        className="mb-4"
      />
      {pdfFileData && (
        <div>
          <input
            type="number"
            name="start"
            placeholder="start"
            id=""
            onChange={(e) => setStart(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
          />
          <input
            type="number"
            name="end"
            placeholder="end"
            id=""
            onChange={(e) => setEnd(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
          />
        </div>
      )}
      <iframe
        style={{ display: "block", width: "100vw", height: "90vh" }}
        title="PdfFrame"
        src={pdfFileData}
        type="application/pdf"
      ></iframe>
    </div>
  );
}
