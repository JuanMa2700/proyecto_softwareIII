'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')
const Database = use('Database')

Route.on('/').render('welcome')
Route.post('/tarea','TareaController.store')
Route.get('tarea', async ({ request, view }) => {
    const Curso = use('App/Models/Curso')
    const Materia = use('App/Models/Materia')
    const Tema = use('App/Models/Tema')
    let cursos = await Database
      .table('cursos')
      .where('codigo_profesor', '12345')

    for (var i = 0; i < cursos.length; i++) {
      let nombre= await Database.select('nombre').from('materias').where('codigo', cursos[i].codigo_materia);
      cursos[i].nombreMateria= nombre[0].nombre
    }
    let temas = await Database
      .table('temas')
      //.innerJoin('materias', 'cursos.id_materia', ',materias.id')

    //console.log(cursos)
    if (request.format() === 'json') {
      return users
    } else {
      return view.render('nuevatarea', { cursos,temas })
    }

  })
  .formats(['json'])
