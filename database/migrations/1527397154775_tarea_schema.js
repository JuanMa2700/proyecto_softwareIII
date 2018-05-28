'use strict'

const Schema = use('Schema')

class TareaSchema extends Schema {
  up () {
    this.create('tareas', (table) => {

        table.integer('id')
        table.unique('id')
      	table.string('nombre', 80)
      	table.integer('id_curso')
      	table.time('fecha_limite', 'dd/mm/aaaa')
      	table.integer('id_tema')
      	table.text('logros')
      	table.string('archivo', 30)
      	table.text('descripcion')
      	
    })
  }

  down () {
    this.drop('tareas')
  }
}

module.exports = TareaSchema
