'use strict'

const Database = use('Database')

class TareaController {
  async store({request, response, session}){

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


    let tarea_existente = await Database
          .table('tareas')
          .where({codigo_curso: tarea.codigo_curso,
                  nombre: tarea.nombre,
                  fecha_limite: tarea.fecha_limite
                })

    if(tarea_existente.length > 0){
      session.flash({ notification: 'Esta tarea ya existe'})
      return response.redirect('back')
    }
    
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
    }else if(request.body.tipo == 'no publicada'){
      session.flash({ notification: '¡Borrador guardado!'})
    }

    

    return response.redirect('back')

  }
}

module.exports = TareaController
