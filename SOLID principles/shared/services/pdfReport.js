const fs = require("fs");
const PDFDocument = require("pdfkit-table");
const { genRandomName } = require("../utils/genRandom");

// task 2 OCP
const generateReport = async (users) => {
  const reportName = genRandomName("pdf.pdf");
  const reportPath = `files/pdf/${reportName}`;
  try {
    let doc = new PDFDocument({ margin: 30, size: "A4" });
    // save document
    doc.pipe(fs.createWriteStream(reportPath));

    (async function createTable() {
      const table = {
        title: "",
        headers: [
          { label: "ID", property: "id", width: 60 },
          { label: "Name", property: "name", width: 80 },
          { label: "Email", property: "email", width: 150 },
          { label: "Username", property: "username", width: 80 },
        ],
        datas: users,
      };

      await doc.table(table, {
        columnsSize: [50, 100, 200, 100],
      });

      doc.end();
    })();
  } catch (error) {
    throw new Error("Failed to generate pdf report");
  }
  return { reportPath, reportName };
};

module.exports = {
  generateReport,
};
