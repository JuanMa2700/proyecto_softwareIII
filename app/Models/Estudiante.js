'use strict'

const Model = use('Model')

class Estudiante extends Model {

	Grupo() {
		return this.belongsTo('App/Models/Grupo')
	}

	Padre() {
		return this.belongsTo('App/Models/Padre')
	}

}

module.exports = Estudiante
