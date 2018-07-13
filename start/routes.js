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
Route.on('/login').render('inicio_sesion')
Route.on('/registrarPadre').render('registrarPadre')
Route.on('/registrarProfesor').render('registrarProfesor')
Route.post('/tarea','TareaController.store')
Route.post('/estudiante','EstudianteController.store')
Route.post('/profesor','ProfesorController.store')
Route.post('/padre','PadreController.store')
Route.post('/login','UserController.login')
Route.get('/logout',async ({auth})=>{
  await auth.logout()
})
Route.get('/ses',({session,auth})=>{
  console.log(session.all())
  console.log(auth.user)
})

Route.get('/registrarEstudiante', async ({ request, view }) => {

  const Padre = use('App/Models/Padre')
  let padres = await Database
    .table('padres')
    
  return view.render('registrarEstudiante', {padres})

})

Route.get('tarea', async ({ request, view }) => {
    const Curso = use('App/Models/Curso')
    const Materia = use('App/Models/Materia')
    const Tema = use('App/Models/Tema')
    let cursos = await Database
      .table('cursos')
      .where('codigo_profesor', '12345')

    let temas = await Database
      .table('temas')

    if (request.format() === 'json') {
      return users
    } else {
      return view.render('nuevatarea', { cursos,temas })
    }

  })
  .formats(['json'])

Route.get('consultar/tareas/:documento', async({view, params}) => {

    const Estudiante = use('App/Models/Estudiante')
    const Curso = use('App/Models/Curso')
    const Tarea = use('App/Models/Tarea')

    const estudiante = await Estudiante.findBy('documento', params.documento)

    let cursos = await Database
      .table('cursos')
      .where('codigo_grupo', estudiante.codigo_grupo)

    var tareasGenerales = new Array();

    for (var i = 0; i < cursos.length; i++) {

        let materia = await Database
          .table('materias')
          .where('codigo', cursos[i].codigo_materia)

        let tareasCurso = await Database
          .table('tareas')
          .where('codigo_curso', cursos[i].codigo)

          for (var j = 0; j < tareasCurso.length; j++) {
            tareasCurso[j].materia = materia[0].nombre;
            tareasCurso[j].fecha_limite = new Date (tareasCurso[j].fecha_limite).toLocaleDateString();
            tareasGenerales.push(tareasCurso[j]);
          }
    }

    tareasGenerales.sort(function(a,b){
      return  new Date(a.fecha_limite)-new Date(b.fecha_limite);
    });

    return view.render('consultartareasestudiante', { tareasGenerales })

})

Route.get('consultar/seleccionarHijo/:cedula', async({view, params}) => {

    const Padre = use('App/Models/Padre')
    const Curso = use('App/Models/Curso')
    const Tarea = use('App/Models/Tarea')

    const padre = await Padre.findBy('cedula', params.cedula)

    let hijos = await Database
      .table('estudiantes')
      .where('cedula_padre', padre.cedula)

    return view.render('seleccionarHijo', { hijos })

})

