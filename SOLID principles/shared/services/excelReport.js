const ExcelJS = require("exceljs");
const { genRandomName } = require("../utils/genRandom");

const generateReport = async (users) => {
  const randomName = `reports/excel/${genRandomName("excel.xlsx")}`;
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
    await workbook.xlsx.writeFile(randomName);
    console.log(`report created ${randomName}`);
 } catch (error) {
    throw new Error("Failed to generate excel report")
 }
  return randomName;
};

module.exports = {
  generateReport,
};
