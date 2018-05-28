'use strict'

const Model = use('Model')

class Tarea extends Model {

	Curso()	{
		return this.belongsTo('App/Models/Curso')
	}

	Tema() {
		return this.belongsTo('App/Models/Tema')
	}

}

module.exports = Tarea
