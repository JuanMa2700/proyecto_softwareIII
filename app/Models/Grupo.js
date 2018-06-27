'use strict'

const Model = use('Model')

class Grupo extends Model {

	Cursos() {
		return this.hasMany('App/Models/Cursos')
	}

	Estudiantes() {
		return this.hasMany('App/Models/Estudiantes')
	}

}

module.exports = Grupo
