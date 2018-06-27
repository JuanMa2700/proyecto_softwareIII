'use strict'

const Schema = use('Schema')

class GrupoSchema extends Schema {
  up () {
    this.create('grupos', (table) => {

    	table.increments()
      table.timestamps()
    	table.integer('codigo')
    	table.unique('codigo')
      
    })
  }

  down () {
    this.dropIfExists('grupos')
  }
}

module.exports = GrupoSchema
