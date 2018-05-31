'use strict'

const { validate } = use('Validator') 

class TareaController {
  async store({request, response, session}){

    console.log(request.body);

    //Validaciones
    //
    const messages = {
     required: 'Este campo es requerido',
     min: 'Este campo es de minimo 3 caractéres',
     max: 'Se ha excedido el máximo de caractéres posibles',
     string: 'Caractéres inválidos',
    }

    
    const validation = await validate (request.all(),{

      nombre: 'required|min:3|max:50',
      grupo: 'required',
      fecha: 'required',
      tema: 'required',
      logros: 'required|min:3|max:50|string',
      descripcion: 'required|min:3|max:50|string'

    }, messages)

    if(validation.fails()){
      session.withErrors(validation.messages()).flashAll()
      return response.redirect('back')
    }

    const Helpers = use('Helpers')
    const Tarea = use('App/Models/Tarea')
    const tarea = new Tarea()
    tarea.nombre=request.body.nombre
    tarea.codigo_curso=request.body.grupo
    tarea.fecha_limite=request.body.fecha
    tarea.codigo_tema=request.body.tema
    tarea.logros=request.body.logros
    tarea.descripcion=request.body.descripcion
    tarea.estado=request.body.tipo
    
    const archivo = request.file('archivo', {
       types: ['image'],
       size: '2mb'
     })
    let fileName= `${new Date().getTime()}.${archivo.subtype}`
    tarea.archivo=fileName

     await archivo.move(Helpers.tmpPath('uploads'), {
       name: fileName
     })
    
    
    await tarea.save()

    if(request.body.tipo == 'publicada'){
      session.flash({ notification: '¡Tarea agregada!'})
    }else if(request.body.tipo == 'borrador'){
      session.flash({ notification: '¡Borrador guardado!'})
    }

    

    return response.redirect('back')

  }
}

module.exports = TareaController
