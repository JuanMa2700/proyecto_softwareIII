'use strict'

const Model = use('Model')

class Grupo extends Model {

	Cursos() {
		return this.hasMany('App/Models/Cursos')
	}

}

module.exports = Grupo
