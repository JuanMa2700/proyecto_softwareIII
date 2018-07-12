'use strict'

class PadreController {
    async create({request, response}){
        const User = use('App/Models/User');
        const user = new User()
        user.codigo=request.body.documento
        user.tipo=1
        user.password=request.body.constrasena
        const Estudiante = use('App/Models/Padre');
        const estudiante = new Estudiante()
        estudiante.nombre= request.body.nombre
        estudiante.apellido = request.body.apellido
        estudiante.edad = request.body.edad
        await user.save()
        await estudiante.save()
    }
}

module.exports = PadreController
