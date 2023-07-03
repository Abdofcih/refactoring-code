# Applying SOLID Using Nodejs

this app applys the **SOLID** software system principles using Nodejs +  Express
[DIP Example](https://github.com/Abdofcih/refactoring-code/tree/main/DIP%20principle)


## installation

1- run the following command to install required packages
```shell
npm i
```
2- rename the .env.example file to .env and update it with required environment variables

3- run the following command to seed the database tables with dummy data

```shell
npm run seeder
```
4- run the following command to run the code

```shell
npm start 
```
### available endpoints

  

```rest

GET /users/
GET /users/:id
PATCH /users/:id

GET /reports//users/:reportType

POST /payment/calculate-amount
POST /payment/receive-cash
POST /payment/capture-payment

```
# Software design SOLID principals

  

## 1- The Single Responsibility Principle (SRP):
```ts
 emails/ email.service.js;
```
## 2- The Open/Closed Principle (OCP):
```ts
  shared/ services/ excelReport.js;
  shared/ services/ pdfReport.js;
```

## 3- The Liskov Substitution Principle (LSP):
```ts
  payment/ payment.service.js;
```

## 4- The Interface Segregation Principle (ISP):
```ts
  payment/ services/ cashPayment.service.js;
  payment/ services/ creditPayment.service.js;
```