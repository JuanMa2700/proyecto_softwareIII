'use strict'

const Model = use('Model')

class Tema extends Model {

	Tareas() {
		return this.hasMany('App/Models/Tarea')
	}
	Materia() {
		return this.belongsTo('App/Models/Materia')
	}

}

module.exports = Tema
