import Docxtemplater from "docxtemplater";
import PizZip from "pizzip";
import { saveAs } from "file-saver";
let PizZipUtils = null;
if (typeof window !== "undefined") {
  import("pizzip/utils/index.js").then(function (r) {
    PizZipUtils = r;
  });
}

function loadFile(url, callback) {
  PizZipUtils.getBinaryContent(url, callback);
}
const generateDocument = () => {
  loadFile("/assets/example.docx", function (error, content) {
    if (error) {
      throw error;
    }
    var zip = new PizZip(content);
    var doc = new Docxtemplater().loadZip(zip);
    doc.setData({
      info1: `1.13.3 - 1.14.4`,
      info2: `CHANGES`,
      info3: `1.14.4 - April 27, 2022`,
      info4: `• Compatible with PreForm 3.24.1 and later`,
      info5: `• Added hopper light flashes to indicate a need for the operator's attention`,
      info6: `• Improved camera brightness during preprint checks`,
      info7: `• Improved RFID-related workflows`,
      info8: `• Improved the Empty Hopper routine`,
      info9: `• Various bug fixes`,
      info10: `1.16.12 - June 8, 2023`,
      info11: `• Compatible with PreForm 3.26.0 and later`,
      info12: `• Updated IR Sensor Cone cleaning maintenance routine`,
      info13: `• Improved temperature sensor error and warning handling to differentiate print failing and non-print`,
      info14: `failing sensor errors, which show up as warnings at the end of a print`,
      info15: `1.16.11 - April 19, 2023`,
      info16: `• Compatible with PreForm 3.26.0 and later`,
      info17: `• Added support for TPU 90A Powder`,
      info18: `• Added notification for IR sensor insertion and removal`,
      info19: `• Fixed bug where the build chamber notifications do not automatically disappear`,
      info20: `1.13.3 - November 2, 2021`,
      info21: `• Compatible with PreForm 3.20.0 and later`,
      info22: `• Various bug fixes`,
    });
    try {
      // render the document (replace all occurences of {first_name} by John, {last_name} by Doe, ...)
      doc.render();
    } catch (error) {
      // The error thrown here contains additional information when logged with JSON.stringify (it contains a properties object containing all suberrors).
      function replaceErrors(key, value) {
        if (value instanceof Error) {
          return Object.getOwnPropertyNames(value).reduce(function (
            error,
            key
          ) {
            error[key] = value[key];
            return error;
          },
          {});
        }
        return value;
      }
      console.log(JSON.stringify({ error: error }, replaceErrors));

      if (error.properties && error.properties.errors instanceof Array) {
        const errorMessages = error.properties.errors
          .map(function (error) {
            return error.properties.explanation;
          })
          .join("\n");
        console.log("errorMessages", errorMessages);
        // errorMessages is a humanly readable message looking like this :
        // 'The tag beginning with "foobar" is unopened'
      }
      throw error;
    }
    console.log("aaa");
    var out = doc.getZip().generate({
      type: "blob",
      mimeType:
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    });
    // Output the document using Data-URI
    saveAs(out, "Example.docx");
    console.log("aaa2");
  });
};
export default generateDocument;
