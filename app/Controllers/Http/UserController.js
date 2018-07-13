class UserController {
  

    async login ({ request, auth }) {
      const { codigo, password,session } = request.all()
      await auth.attempt(codigo, password)
      
      return 'Logged in successfully'
    }
  }

  module.exports = UserController