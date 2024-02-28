// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Engineer extends Employee {

    constructor(name, id, email, gitHubUser) {

        if (!name || typeof(name) != "string") {
            throw new Error("A name must be provided in an approriate format!");
        }

        if (!id) {
            throw new Error("An ID must be provided!");
        }
        if (!email || typeof(email) != "string") {
            throw new Error("An email must be provided in an approriate format!");
        }
        if (!gitHubUser) {
            throw new Error("A github name must be provided!");
        }

        super(name, id, email);
        this.github = gitHubUser;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;