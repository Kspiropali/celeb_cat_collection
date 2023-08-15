const Cat = require("../models/Cat");

const getAll = async (req, res) => {
    try {
        return res.send((await Cat.getAllCats()).rows);
    } catch (error) {
        return res.status(500).send("Internal Server Error!");
    }
};

const getOne = async (req, res) => {
    try {
        return res.send((await Cat.getById(parseInt(req.params.id))).rows);
    } catch (error) {
        return res
            .status(404)
            .send("Could not find specified cat with specified id!");
    }
};

const addOne = async (req, res) => {
    try {
        const cat = new Cat(req.params.name, "Smith", 23);
        return res.send((await Cat.add(cat)).rows);
    } catch (error) {
        return res.status(500).send("Could not add cat!");
    }
};

const deleteOne = async (req, res) => {
    try {
        return res.send((await Cat.delete(parseInt(req.params.id))).rows);
    } catch (error) {
        return res
            .status(500)
            .send("Could not add delete cat with specified id!");
    }
};

module.exports = { getAll, getOne, addOne, deleteOne };
