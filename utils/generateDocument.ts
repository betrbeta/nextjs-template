import { Document, Packer, Paragraph, TextRun } from "docx";
import JSZip from "jszip";
import { saveAs } from "file-saver";

// Function to create a docx document
function createDocx() {
  const doc = new Document({
    sections: [
      {
        properties: {},
        children: [
          new Paragraph({
            children: [
              new TextRun({
                text: "1.13.3 - 1.14.4",
                bold: true,
              }),
            ],
          }),
          new Paragraph({
            children: [new TextRun("CHANGES")],
          }),
          new Paragraph({
            children: [new TextRun("1.14.4 - April 27, 2022")],
          }),
          new Paragraph({
            children: [
              new TextRun("• Compatible with PreForm 3.24.1 and later"),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun(
                "• Added hopper light flashes to indicate a need for the operator's attention"
              ),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun(
                "• Improved camera brightness during preprint checks"
              ),
            ],
          }),
          new Paragraph({
            children: [new TextRun("• Improved RFID-related workflows")],
          }),
          new Paragraph({
            children: [new TextRun("• Improved the Empty Hopper routine")],
          }),
          new Paragraph({
            children: [new TextRun("• Various bug fixes")],
          }),
          new Paragraph({
            children: [new TextRun("1.16.12 - June 8, 2023")],
          }),
          new Paragraph({
            children: [
              new TextRun("• Compatible with PreForm 3.26.0 and later"),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun(
                "• Updated IR Sensor Cone cleaning maintenance routine"
              ),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun(
                "• Improved temperature sensor error and warning handling to differentiate print failing and non-print failing sensor errors, which show up as warnings at the end of a print"
              ),
            ],
          }),
          new Paragraph({
            children: [new TextRun("1.16.11 - April 19, 2023")],
          }),
          new Paragraph({
            children: [
              new TextRun("• Compatible with PreForm 3.26.0 and later"),
            ],
          }),
          new Paragraph({
            children: [new TextRun("• Added support for TPU 90A Powder")],
          }),
          new Paragraph({
            children: [
              new TextRun(
                "• Added notification for IR sensor insertion and removal"
              ),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun(
                "• Fixed bug where the build chamber notifications do not automatically disappear"
              ),
            ],
          }),
          new Paragraph({
            children: [new TextRun("1.13.3 - November 2, 2021")],
          }),
          new Paragraph({
            children: [
              new TextRun("• Compatible with PreForm 3.20.0 and later"),
            ],
          }),
          new Paragraph({
            children: [new TextRun("• Various bug fixes")],
          }),
        ],
      },
    ],
  });

  return doc;
}

// Function to create a PDF from a docx document
async function createPdfFromDocx(docx: Document) {
  const pdfBuffer = await Packer.toBuffer(docx);
  return pdfBuffer;
}

// Function to create a zip file with docx and pdf files
async function createZip(): Promise<void> {
  const docx = createDocx();
  const pdfBuffer = await createPdfFromDocx(docx);

  const zip = new JSZip();
  zip.file("My_Document.docx", Packer.toBuffer(docx));
  zip.file("My_Document.pdf", pdfBuffer);

  // Convert the zip to a Blob
  const zipBlob = await zip.generateAsync({ type: "blob" });

  // Trigger the download using file-saver
  saveAs(zipBlob, "generated_files.zip");
}

export default createZip;
