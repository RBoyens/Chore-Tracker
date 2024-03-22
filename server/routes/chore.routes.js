import {Router} from 'express'
import {createChore, getAllChores, getOneChore, updateChore, deleteChore} from "../contollers/chore.controller.js"

const router = Router()

router.route("/dashboard")
    .get(getAllChores)

router.route("/addJob")
    .post(createChore)

router.route("/view/:id")
    .get (getOneChore)
    .delete(deleteChore)

router.route("/edit/:id")
    .get (getOneChore)
    .put (updateChore)

export default router