'use strict'

const Schema = use('Schema')

class MateriaSchema extends Schema {
  up () {
    this.create('materias', (table) => {

      table.increments()
      table.timestamps()
    	table.integer('codigo')
    	table.unique('codigo')
    	table.string('nombre', 30)
      
    })
  }

  down () {
    this.dropIfExists('materias')
  }
}

module.exports = MateriaSchema
