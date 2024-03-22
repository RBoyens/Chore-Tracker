import Chore from "../models/chore.model.js";

// Create
async function createChore (req, res) {
    try {
        const newChore = await Chore.create(req.body)
        res.json(newChore)
    } catch (error) {
        console.log (error)
        res.status(400).json(error)
    }
}
// Read

async function getAllChores(req,res) {
    try {
        const chores = await Chore.find()
        res.json(chores)
    } catch (error) {
        console.log (error)
        res.status(400).json(error)
    }
}

async function getOneChore (req, res) {
    try {
        const singleChore = await Chore.findById(req.params.id) 
        res.json(singleChore)
    } catch (error) {
        console.log (error)
        res.status(400).json(error)
    }
}

// Update

async function updateChore (req, res) {
    const option = {
        new: true,
        runValidators: true
    }
    try {
        const updatedChore = await Chore.findByIdAndUpdate(req.params.id, req.body, option)
        res.json(updatedChore)
    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
}
// Delete
async function deleteChore (req, res) {
    try {
        const deletedChore = await Chore.findByIdAndDelete(req.params.id)
        res.json(deletedChore)
    } catch (error) {
        console.lof(error)
        res.status(400).json(error)
    }
}

export {
    createChore,
    getAllChores,
    getOneChore,
    updateChore,
    deleteChore,
}