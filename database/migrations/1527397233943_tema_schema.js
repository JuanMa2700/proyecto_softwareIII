'use strict'

const Schema = use('Schema')

class TemaSchema extends Schema {
  up () {
    this.create('temas', (table) => {

      table.increments()
      table.timestamps()
    	table.integer('codigo')
    	table.unique('codigo')
    	table.integer('codigo_materia')
    	table.text('descripcion')

    })
  }

  down () {
    this.dropIfExists('temas')
  }
}

module.exports = TemaSchema
