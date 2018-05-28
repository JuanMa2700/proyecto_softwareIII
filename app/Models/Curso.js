'use strict'

const Model = use('Model')

class Curso extends Model {

	Tareas() {
		return this.hasMany('App/Models/Tarea')
	}
	Grupo() {
		return this.belongsTo('App/Models/Grupo')
	}
	Materia() {
		return this.belongsTo('App/Models/Materia')
	}
	Profesor() {
		return this.belongsTo('App/Models/Profesor')
	}

}

module.exports = Curso
