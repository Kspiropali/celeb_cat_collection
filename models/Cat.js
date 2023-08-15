const db = require("../db/db");

class Cat {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    static getAllCats = async () => {
        return await db.query("SELECT * FROM Cats");
    };

    static getById = async (id) => {
        return await db.query("SELECT * FROM Cats WHERE id = $1", [id]);
    };

    static add = async (cat) => {
        await db.query(
            "INSERT INTO Cats(firstName, lastName, age) VALUES ($1, $2, $3)",
            [cat.firstName, cat.lastName, cat.age]
        );

        return await this.getAllCats();
    };

    static delete = async (id) => {
        console.log(id)
        await db.query("DELETE FROM Cats WHERE id = $1", [id]);

        return await this.getAllCats();
    };
}

module.exports = Cat;
