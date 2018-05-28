'use strict'

const Schema = use('Schema')

class ProfesorSchema extends Schema {
  up () {
    this.create('profesors', (table) => {

    	table.integer('cedula')
    	table.unique('cedula')
    	table.string('nombre', 30)
    	table.string('apellido', 30)
    	table.integer('edad')
      
    })
  }

  down () {
    this.drop('profesors')
  }
}

module.exports = ProfesorSchema
