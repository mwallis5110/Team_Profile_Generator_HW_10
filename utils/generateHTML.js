const engineerArray = [];
const managerArray = [];
const internArray = [];

function generateEngineerHtml(res) {
  return `
      <div class="card text-white bg-primary mb-3" style="width: 15rem;">
        <div class="card-header">${res.employeeName}</div>
        <div class="card-body">
          <h3 class="card-title">${res.role}</h3>
          <p class="card-text">${res.id}</p>
          <p class="card-text">${res.email}}</p>
          <p class="card-text">${res.githubUserName}</p>
        </div>
      </div>
    `;
}

//Generates html card when a new intern is created
function generateInternHtml(res) {
  return `
      <div class="card text-white bg-success mb-3" style="width: 15rem;">
        <div class="card-header">${res.employeeName}</div>
        <div class="card-body">
          <h3 class="card-title">${res.role}</h3>
          <p class="card-text">${res.id}</p>
          <p class="card-text">${res.email}}</p>
          <p class="card-text">${res.school}</p>
        </div>
      </div>
`;
}

//Generates html card when a new manager is created
function generateManagerHtml(res) {
  return `
      <div class="card text-white bg-danger mb-3" style="width: 15rem;">
        <div class="card-header">${res.employeeName}</div>
        <div class="card-body">
          <h3 class="card-title">${res.role}</h3>
          <p class="card-text">${res.id}</p>
          <p class="card-text">${res.email}}</p>
          <p class="card-text">${res.officeNumber}</p>
        </div>
      </div>
`;
}

function renderCards(employeeArray) {
  for (let i=0; i < employeeArray; i++) {
  switch (role) {
    case "Engineer":
      engineerArray.push(generateEngineerHtml(res));
    case "Intern":
      internArray.push(generateInternHtml(res));
    case "Manager":
      managerArray.push(generateManagerHtml(res));
  }
}
}

function generatePageHtml() {
  return `
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="Assets/style/style.css">
    <title>Team Cards</title>
</head>
<body>
 <div class="container">
    <div class="row">
      ${engineerArray}
      ${internArray}
      ${managerArray}
    </div>
  </div>
</body>
</html>`
;
}

//Exports each created card to index.html
module.exports = {
  generatePageHtml,
  renderCards,
  generateEngineerHtml,
  generateInternHtml,
  generateManagerHtml,
};
