'use strict'

const Model = use('Model')

class Profesor extends Model {
	Cursos() {
		return this.hasMany('App/Models/Curso')
	}
}

module.exports = Profesor
