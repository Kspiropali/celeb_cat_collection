const db = require("../db/db");

class Cat {
  constructor(name, age, owner, breed, instagram) {
    this.name = name;
    this.age = age;
    this.owner = owner;
    this.breed = breed;
    this.instagram = instagram;
  }

  static getAllCats = async () => {
    return await db.query("SELECT * FROM cat");
  };

  static getById = async (id) => {
    return await db.query("SELECT * FROM cat WHERE id = $1", [id]);
  };

  static add = async (cat) => {
    await db.query(
      "INSERT INTO cat (name, age, owner, breed, instagram) VALUES ($1, $2, $3, $4, $5);",
      [cat.name, cat.age, cat.owner, cat.breed, cat.instagram]
    );

    return await this.getAllCats();
  };

  static delete = async (id) => {
    await db.query("DELETE FROM cat WHERE id = $1", [id]);

    return await this.getAllCats();
  };
}

module.exports = Cat;
