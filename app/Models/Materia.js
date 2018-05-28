'use strict'

const Model = use('Model')

class Materia extends Model {
	Cursos() {
		return this.hasMany('App/Models/Curso')
	}
	Temas() {
		return this.hasMany('App/Models/Tema')
	}
}

module.exports = Materia
