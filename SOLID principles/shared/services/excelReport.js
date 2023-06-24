const ExcelJS = require("exceljs");
const { genRandomName } = require("../utils/genRandom");

// task 2 OCP
const generateReport = async (users) => {
  const reportName = genRandomName("excel.xlsx")
  const reportPath = `files/excel/${reportName}`;
 try {
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet("users");
    sheet.columns = [
      { header: "ID", key: "id", width: 10 },
      { header: "Name", key: "name", width: 20 },
      { header: "Email", key: "email", width: 30 },
      { header: "Username", key: "username", width: 20 },
    ];
  
    sheet.addRows(users);
    await workbook.xlsx.writeFile(reportPath);
    console.log(`report created ${reportPath}`);
 } catch (error) {
    throw new Error("Failed to generate excel report")
 }
  return {reportPath,reportName};
};

module.exports = {
  generateReport,
};
