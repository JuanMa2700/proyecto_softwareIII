'use strict'

const Schema = use('Schema')

class PadreSchema extends Schema {
  up () {
    this.create('padres', (table) => {
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
    this.dropIfExists('padres')
  }
}

module.exports = PadreSchema
