const { Nota, Materia, Alumno } = require("../model/model")

const getNotaConMateriaYAlumno = async (req, res) => {
  const { id } = req.params

  const nota = await Nota.findByPk(id, {
    include: [
      { model: Materia, attributes: ["nombre"] },
      { model: Alumno, attributes: ["nombre", "apellido"] },
    ],
  })
  return res.json(nota)
}

module.exports = {
  getNotaConMateriaYAlumno,
}
