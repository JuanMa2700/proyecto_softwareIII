'use strict'

const Schema = use('Schema')

class MateriaSchema extends Schema {
  up () {
    this.create('materias', (table) => {

    	table.integer('id')
    	table.unique('id')
    	table.string('nombre', 30)
      
    })
  }

  down () {
    this.drop('materias')
  }
}

module.exports = MateriaSchema
