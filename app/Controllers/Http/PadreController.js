'use strict'

class PadreController {
    async store({request, response}){
        console.log(request.body)
        const User = use('App/Models/User');
        const user = new User()
        user.codigo=request.body.documento
        user.rol=1
        user.password=request.body.contrasena
        user.username=request.body.nombre+request.body.documento
        const Padre = use('App/Models/Padre');
        const padre = new Padre()
        padre.nombre= request.body.nombre
        padre.apellido = request.body.apellido
        padre.edad = request.body.edad
        padre.cedula= request.body.documento
        console.log(padre)
        console.log(user)
        await user.save()
        await padre.save()
    }
}

module.exports = PadreController
