const path = require("path");
const { findUsersService } = require("../users/user.service");
const { generateReportService } = require("./report.service");

const generateReport = async (req, res) => {
  // if no type provided pdf is the default
  const { reportType } = req.params || "pdf";
  console.log("reportType", reportType);
  if (reportType !== "pdf" && reportType !== "excel")
    return res
      .status(400)
      .send({ message: "Available report types are pdf and excel" });

  const users = await findUsersService();
  // res.send({ reportType, users });
  const reports = await generateReportService(users);
  const { reportPath, reportName } = reports[reportType];
  const FilePath = path.resolve(reportPath);

  res.setHeader(
    "Content-Type",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  );
  res.setHeader("Content-disposition", `attachment; filename=${reportName}`);
  res.sendFile(FilePath);
};

module.exports = {
  generateReport,
};
