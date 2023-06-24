
const excelReport = require("../shared/services/excelReport")
const pdfReport = require("../shared/services/pdfReport")

const generateReportService = async(users)=>{
 const pdf = await pdfReport.generateReport(users)
 const excel = await excelReport.generateReport(users)
 return {
    pdf,
    excel
 }
}


module.exports = {
    generateReportService
}