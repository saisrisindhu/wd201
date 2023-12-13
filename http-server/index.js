const http = require("http");
const fs = require("fs");
const minimist = require("minimist");
const args = minimist(process.argv.slice(2));
<<<<<<< HEAD
const port = args.port ;
=======
const port = args.port || 8000;
>>>>>>> da36108 (added todo-cli)

let homeContent = "";
let projectContent = "";
let registrationContent = "";

// Read home.html
fs.readFile("home.html", (err, home) => {
    if (err) {
        throw err;
    }
    homeContent = home;
});

// Read project.html
fs.readFile("project.html", (err, project) => {
    if (err) {
        throw err;
    }
    projectContent = project;
});

// Read registration.html
fs.readFile("registration.html", (err, registration) => {
    if (err) {
        throw err;
    }
    registrationContent = registration;
});

const server = http.createServer((request, response) => {
    let url = request.url;
    response.writeHeader(200, { "Content-Type": "text/html" });

    switch (url) {
        case "/project":
            response.write(projectContent);
            response.end();
            break;
        case "/registration":
            response.write(registrationContent);
            response.end();
            break;
        default:
            response.write(homeContent);
            response.end();
            break;
    }
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
<<<<<<< HEAD

=======
>>>>>>> da36108 (added todo-cli)