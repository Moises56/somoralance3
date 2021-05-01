const tareaCtrl = {}

const Tarea = require('../models/Formulario')
const User = require('../models/User')

tareaCtrl.getTareas = async (req, res) => {
    // res.send('get tareas')
    const tareas = await Tarea.find()
    res.json(tareas)
}

tareaCtrl.getTareas = (req, res) => {}

module.exports = tareaCtrl;