'use strict'

const Schema = use('Schema')

class ConstraintsSchema extends Schema {
  up () {
    this.alter('tareas', (table) => {
      
    	table.foreign('id_curso').references('cursos.id').onDelete('cascade')
    	table.foreign('id_tema').references('temas.id').onDelete('cascade')

    })
    this.alter('cursos', (table) => {
    	table.foreign('id_grupo').references('grupos.id').onDelete('cascade')
    	table.foreign('id_materia').references('materias.id').onDelete('cascade')
    	table.foreign('id_profesor').references('profesors.cedula').onDelete('cascade')
      
    })
    this.alter('temas', (table) => {
      	table.foreign('id_materia').references('materias.id').onDelete('cascade')
    })
  }

  down () {
    this.alter('tareas', (table) => {
      
    	table.dropForeign('id_curso')
    	table.dropForeign('id_tema')

    })
    this.alter('cursos', (table) => {
    	table.dropForeign('id_grupo')
    	table.dropForeign('id_materia')
    	table.dropForeign('id_profesor')
      
    })
    this.alter('temas', (table) => {
      	table.dropForeign('id_materia')
    })
  }
}

module.exports = ConstraintsSchema
