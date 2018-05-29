'use strict'

const Schema = use('Schema')

class TareaSchema extends Schema {
  up () {
    this.create('tareas', (table) => {

        table.increments()
        table.timestamps()
      	table.string('nombre', 80)
      	table.integer('id_curso')
      	table.string('fecha_limite')
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
