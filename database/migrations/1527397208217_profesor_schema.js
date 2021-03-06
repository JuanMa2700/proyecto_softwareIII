'use strict'

const Schema = use('Schema')

class ProfesorSchema extends Schema {
  up () {
    this.create('profesors', (table) => {

      table.increments()
      table.timestamps()
    	table.integer('cedula')
    	table.unique('cedula')
    	table.string('nombre', 30)
    	table.string('apellido', 30)
    	table.integer('edad')
      
    })
  }

  down () {
    this.dropIfExists('profesors')
  }
}

module.exports = ProfesorSchema
