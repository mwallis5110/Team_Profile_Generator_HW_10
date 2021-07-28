// function generateHtml() {
//     return `

//     <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>

// </body>
// </html>`
// };

//switch case for deciding which card to use

// function employeeCard() {
//   switch (role) {
//     case "Engineer":
//       role = '';
//       break;
//     case "Intern":
//       role = '';
//       break;
//     case "Manager":
//       role = '';
//       break;
//     default:
//       role = '';
//       break;
//   };
//   return role;
// };

//Create cards for each position with html

function generateEngineerHtml(res) {
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>${res.employeeName}</h2>
    <h2>${res.role}</h2>
    <p>${res.id}</p>
    <p>${res.email}</p>
    <p>${res.githubUserName}</p>
</body>
</html>
`;
}

function generateInternHtml(res) {
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>${res.employeeName}</h2>
    <h2>${res.role}</h2>
    <p>${res.id}</p>
    <p>${res.email}</p>
    <p>${res.school}</p>
</body>
</html>
`;
}

function generateManagerHtml(res) {
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>${res.employeeName}</h2>
    <h2>${res.role}</h2>
    <p>${res.id}</p>
    <p>${res.email}</p>
    <p>${res.officeNumber}</p>
</body>
</html>
`;
}

//call cards with individual functions

//Push employee info to prompt as user answers questions

//continue to prompt answers undil "no" is selected

//use readme generator as an example

module.exports = {
  generateEngineerHtml,
  generateInternHtml,
  generateManagerHtml,
};
