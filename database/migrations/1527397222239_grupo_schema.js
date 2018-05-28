'use strict'

const Schema = use('Schema')

class GrupoSchema extends Schema {
  up () {
    this.create('grupos', (table) => {

    	table.integer('id')
    	table.unique('id')
      
    })
  }

  down () {
    this.drop('grupos')
  }
}

module.exports = GrupoSchema
