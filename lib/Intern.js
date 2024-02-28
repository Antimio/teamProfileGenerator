// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Intern extends Employee {

    constructor(name, id, email, school) {

        if (!name || typeof(name) != "string") {
            throw new Error("A name must be provided in an approriate format!");
        }

        if (!id) {
            throw new Error("An ID must be provided!");
        }
        if (!email || typeof(email) != "string") {
            throw new Error("An email must be provided in an approriate format!");
        }
        if (!school) {
            throw new Error("A school name must be provided!");
        }

        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }
}

module.exports = Intern;