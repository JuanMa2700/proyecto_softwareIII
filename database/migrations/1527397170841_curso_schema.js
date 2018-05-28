'use strict'

const Schema = use('Schema')

class CursoSchema extends Schema {
  up () {
    this.create('cursos', (table) => {
      	table.integer('id')
      	table.unique('id')
      	table.integer('id_grupo')
      	table.integer('id_materia')
    	table.integer('id_profesor')
    	
    })
  }

  down () {
    this.drop('cursos')
  }
}

module.exports = CursoSchema
