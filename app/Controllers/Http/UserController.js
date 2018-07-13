class UserController {
  

    async login ({request, auth,session, response}) {
      const { codigo, password } = request.all()
      await auth.attempt(codigo, password)
      const User = use('App/Models/User')
      var user = await User.findBy('codigo', codigo)
      session.put('rol', user.rol)
      if(user.rol==1){        
        const Padre = use('App/Models/Padre')
        var user=await Padre.findBy('cedula', codigo)
        session.put('nombre', user.nombre)
        auth.user.username = user.nombre;
      }
      else if(user.rol==2){
        const Profesor = use('App/Models/Profesor')
        var user=await Profesor.findBy('cedula', codigo)
        session.put('nombre', user.nombre)
        auth.user.username = user.nombre;
      }
      else if(user.rol==3){
        const Estudiante = use('App/Models/Estudiante')
        var user=await Estudiante.findBy('documento', codigo)
        session.put('nombre', user.nombre)
        auth.user.username = user.nombre;
      }
      response.redirect("/principal_sesion")
    }
  }

  module.exports = UserController