import * as fs from "fs";
import { Document, Packer, Paragraph, TextRun } from "docx";

const doc = new Document({
  sections: [
    {
      properties: {},
      children: [
        new Paragraph({
          alignment: "center",
          children: [new TextRun("Release Notes").bold().fontSize(24)],
        }),
        new Paragraph(), // Add an empty line

        new Paragraph({
          children: [new TextRun("1.14.4 - April 27, 2022").bold()],
        }),
        new Paragraph("• Compatible with PreForm 3.24.1 and later"),
        new Paragraph(
          "• Added hopper light flashes to indicate a need for the operator's attention"
        ),
        new Paragraph("• Improved camera brightness during preprint checks"),
        new Paragraph("• Improved RFID-related workflows"),
        new Paragraph("• Improved the Empty Hopper routine"),
        new Paragraph("• Various bug fixes"),

        new Paragraph({
          children: [new TextRun("1.16.12 - June 8, 2023").bold()],
        }),
        new Paragraph("• Compatible with PreForm 3.26.0 and later"),
        new Paragraph("• Updated IR Sensor Cone cleaning maintenance routine"),
        new Paragraph(
          "• Improved temperature sensor error and warning handling to differentiate print failing and non-print failing sensor errors, which show up as warnings at the end of a print"
        ),

        new Paragraph({
          children: [new TextRun("1.16.11 - April 19, 2023").bold()],
        }),
        new Paragraph("• Compatible with PreForm 3.26.0 and later"),
        new Paragraph("• Added support for TPU 90A Powder"),
        new Paragraph(
          "• Added notification for IR sensor insertion and removal"
        ),
        new Paragraph(
          "• Fixed bug where the build chamber notifications do not automatically disappear"
        ),

        new Paragraph({
          children: [new TextRun("1.13.3 - November 2, 2021").bold()],
        }),
        new Paragraph("• Compatible with PreForm 3.20.0 and later"),
        new Paragraph("• Various bug fixes"),
      ],
    },
  ],
});

Packer.toBuffer(doc).then((buffer) => {
  fs.writeFileSync("release_notes.docx", buffer);
});
