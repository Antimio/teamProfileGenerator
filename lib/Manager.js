// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {

    constructor(name, id, email, officeNumber) {

        if (!name || typeof(name) != "string") {
            throw new Error("A name must be provided in an approriate format!");
        }

        if (!id) {
            throw new Error("An ID must be provided!");
        }
        if (!email || typeof(email) != "string") {
            throw new Error("An email must be provided in an approriate format!");
        }
        if (!officeNumber) {
            throw new Error("An office number must be provided!");
        }

        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOffice() {
        return this.officeNumber;
    }

    getRole() {
        return "Manager";
    }

}

module.exports = Manager;