'use strict'

const Schema = use('Schema')

class CursoSchema extends Schema {
  up () {
    this.create('cursos', (table) => {
        table.increments()
        table.timestamps()
      	table.integer('codigo')
      	table.unique('codigo')
      	table.integer('codigo_grupo')
      	table.integer('codigo_materia')
    	table.integer('codigo_profesor')
      table.string('nombre')
    	
    })
  }

  down () {
    this.dropIfExists('cursos')
  }
}

module.exports = CursoSchema
