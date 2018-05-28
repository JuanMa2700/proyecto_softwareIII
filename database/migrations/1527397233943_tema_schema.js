'use strict'

const Schema = use('Schema')

class TemaSchema extends Schema {
  up () {
    this.create('temas', (table) => {

    	table.integer('id')
    	table.unique('id')
    	table.integer('id_materia')
    	table.text('descripcion')

    })
  }

  down () {
    this.drop('temas')
  }
}

module.exports = TemaSchema
