'use strict'

const Model = use('Model')

class Padre extends Model {

	Estudiante(){
		return this.hasMany('App/Models/Estudiante')
	}
}

module.exports = Padre
