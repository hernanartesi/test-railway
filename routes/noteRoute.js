const express = require("express")

const notesController = require("../controllers/notaController")

const router = express.Router()


router.get("/:id", notesController.getNotaConMateriaYAlumno)



module.exports = router