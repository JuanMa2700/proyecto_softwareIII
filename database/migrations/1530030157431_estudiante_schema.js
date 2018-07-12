'use strict'

const Schema = use('Schema')

class EstudianteSchema extends Schema {
  up () {
    this.create('estudiantes', (table) => {
      table.increments()
      table.timestamps()
      table.integer('documento')
      table.unique('documento')
      table.string('nombre', 30)
	    table.string('apellido', 30)
	    table.integer('edad')
	    table.integer('codigo_grupo')
      table.integer('cedula_padre')

    })
  }

  down () {
  	
    this.dropIfExists('estudiantes')
  }
}

module.exports = EstudianteSchema
