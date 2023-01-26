function writeHTML(responses) {
    console.log(responses);

    let output = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
        <title>Team Profiles</title>
    </head>
    <body>
        <h1>Team Builder</h1>
        <div class="container">`;

    responses.forEach(emp => {
        emp.officeNumber ? output +=`
            <div class="card">
                <h1>${emp.getName()}</h1>
                <h2>Manager</h2><i class="material-icons">content_paste</i>
                <h4>ID: ${emp.getId}<H4>
                <h4>Email: <a href="mailto:${emp.email}">${emp.email}</a></h4>
                <h4>Office Number: ${emp.getOfficeNumber()}</h4>
            </div>` :

        emp.github ? output +=`
            <div class="card">
                <h1>${emp.getName()}</h1>
                <h2>Engineer</h2><i class="material-icons">laptop_mac</i>
                <h4>ID: ${emp.getId}<H4>
                <h4>Email: ${emp.getEmail()}</h4>
                <h4>Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></h4>
            </div>` :
        
        output +=`
            <div class="card">
                <h1>${emp.getName()}</h1>
                <h2>Intern</h2><i class="material-icons">assignment_ind</i>
                <h4>ID: ${emp.getId}<H4>
                <h4>Email: ${emp.getEmail()}</h4>
                <h4>School: ${emp.getSchool()}</h4>
            </div>`;
    });

    output+='</div></body></html>';
    return output;
}

module.exports = writeHTML;