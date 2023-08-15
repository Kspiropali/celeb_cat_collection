const Cat = require("../models/Cat");

const getAll = async (req, res) => {
  try {
    console.log((await Cat.getAllCats()))
    return res.send((await Cat.getAllCats()).rows);
  } catch (error) {
    return res.status(500).send("Internal Server Error!" + error);
  }
};

const getOne = async (req, res) => {
  try {
    const result = (await Cat.getById(parseInt(req.params.id))).rows;
    if(result.length === 0){
      throw new Error("Cat was not found");
    }
    return res.send(result);
  } catch (error) {
    return res
      .status(404)
      .send("Could not find specified cat with specified id!");
  }
};

const addOne = async (req, res) => {
  try {
    const cat = new Cat(req.body);
    return res.send((await Cat.add(cat)).rows);
  } catch (error) {
    return res.status(500).send("Could not add cat!");
  }
};

const deleteOne = async (req, res) => {
  try {
    return res.send((await Cat.delete(parseInt(req.params.id))).rows);
  } catch (error) {
    return res.status(500).send("Could not add delete cat with specified id!");
  }
};

module.exports = { getAll, getOne, addOne, deleteOne };
