'use strict'

class ProfesorController {
    async store({request, response}){
        console.log(request.body)
        const User = use('App/Models/User');
        const user = new User()
        user.codigo=request.body.documento
        user.rol=2
        user.password=request.body.contrasena
        user.username=request.body.nombre+request.body.documento
        const Profesor = use('App/Models/Profesor');
        const profesor = new Profesor()
        profesor.nombre= request.body.nombre
        profesor.apellido = request.body.apellido
        profesor.edad = request.body.edad
        profesor.cedula= request.body.documento
        console.log(profesor)
        console.log(user)
        await user.save()
        await profesor.save()
        response.redirect('inicio_sesion')
    }
}


module.exports = ProfesorController
