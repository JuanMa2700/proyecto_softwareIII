'use strict'

const Schema = use('Schema')

class ConstraintsSchema extends Schema {
  up () {
    this.alter('tareas', (table) => {
      
    	table.foreign('codigo_curso').references('cursos.codigo').onDelete('cascade')
    	table.foreign('codigo_tema').references('temas.codigo').onDelete('cascade')

    })
    this.alter('cursos', (table) => {
    	table.foreign('codigo_grupo').references('grupos.codigo').onDelete('cascade')
    	table.foreign('codigo_materia').references('materias.codigo').onDelete('cascade')
    	table.foreign('codigo_profesor').references('profesors.cedula').onDelete('cascade')
      
    })
    this.alter('temas', (table) => {
      	table.foreign('codigo_materia').references('materias.codigo').onDelete('cascade')
    })
  }

  down () {
    this.alter('tareas', (table) => {
      
    	table.dropForeign('codigo_curso')
    	table.dropForeign('codigo_tema')

    })
    this.alter('cursos', (table) => {
      table.dropForeign('codigo_grupo')
    	table.dropForeign('codigo_materia')
    	table.dropForeign('codigo_profesor')
      
    })
    this.alter('temas', (table) => {
      	table.dropForeign('codigo_materia')
    })
  }
}

module.exports = ConstraintsSchema
