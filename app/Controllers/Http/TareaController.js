'use strict'

const { validate } = use('Validator') 

class TareaController {
  async store({request, response, session}){

    //Validaciones
    //
    const messages = {
     required: 'Este campo es requerido',
     min: 'Este campo es de minimo 3 caracteres',
     max: 'Se ha excedido el máximo de caracteres posibles',
     string: 'Caractéres inválidos',
     alphaNumeric: 'Caractéres inválidos',
     alpha: 'Caractéres inválidos'
    }

    
    const validation = await validate (request.all(),{

      nombre: 'required|min:3|max:50|string',
      //grupo: 'required|min:3|max:50',
      //fecha_limite: 'required|min:3|max:50',
      //tema: 'required|min:3|max:50',
      logros: 'required|min:3|max:50|string',
      descripcion: 'required|min:3|max:50|string|alpha'

    }, messages)

    if(validation.fails()){
      session.withErrors(validation.messages()).flashAll()
      return response.redirect('back')
    }

    const Helpers = use('Helpers')
    const Tarea = use('App/Models/Tarea')
    const tarea = new Tarea()
    tarea.nombre=request.body.nombre
    tarea.id_curso=request.body.grupo
    tarea.fecha_limite=request.body.fecha
    tarea.id_tema=request.body.tema
    tarea.logros=request.body.logros
    tarea.descripcion=request.body.descripcion
    //tarea.name=request.body.tipo
    
    if (request.archivo!=null) {
      const archivo = request.file('archivo', {
         types: ['image'],
         size: '2mb'
       })
      let fileName= `${new Date().getTime()}.${archivo.subtype}`
      tarea.archivo=fileName

       await archivo.move(Helpers.tmpPath('uploads'), {
         name: fileName
       })
    }
    
     await tarea.save()

     session.flash({ notification: '¡Tarea agregada!'})

     return response.redirect('back')

  }
}

module.exports = TareaController
