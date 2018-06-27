'use strict'

const Schema = use('Schema')

class TareaSchema extends Schema {
  up () {
    this.create('tareas', (table) => {

        table.increments()
        table.timestamps()
      	table.string('nombre', 80)
      	table.integer('codigo_curso')
      	table.date('fecha_limite')
      	table.integer('codigo_tema')
      	table.text('logros')
      	table.string('archivo', 30)
      	table.text('descripcion')
        table.string('estado', 20)

    })
  }

  down () {
    this.dropIfExists('tareas')
  }
}

module.exports = TareaSchema
