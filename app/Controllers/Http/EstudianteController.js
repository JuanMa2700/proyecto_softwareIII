'use strict'

class EstudianteController {
    async store({request, response}){
        console.log(request.body)
        const User = use('App/Models/User');
        const user = new User()
        user.codigo=request.body.documento
        user.rol=1
        user.password=request.body.contrasena
        user.username=request.body.nombre+request.body.documento
        const Estudiante = use('App/Models/Estudiante');
        const estudiante = new Estudiante()
        estudiante.nombre= request.body.nombre
        estudiante.apellido = request.body.apellido
        estudiante.edad = request.body.edad
        estudiante.documento= request.body.documento
        estudiante.cedula_padre= request.body.cedula_padre
        console.log(estudiante)
        console.log(user)
        await user.save()
        await estudiante.save()
    }
}

module.exports = EstudianteController
