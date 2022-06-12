const HttpResponse = require('./helper/http-response')

module.exports = class LoginRouter {
  constructor (authUseCaseSpy) {
    this.authUseCaseSpy = authUseCaseSpy
  }

  route (httpRequest) {
    if (!httpRequest || !httpRequest.body || !this.authUseCaseSpy || !this.authUseCaseSpy.auth) {
      return HttpResponse.serverError()
    }

    const { email, password } = httpRequest.body
    if (!email) {
      return HttpResponse.badRequest('email')
    }
    if (!password) {
      return HttpResponse.badRequest('password')
    }

    const accessToken = this.authUseCaseSpy.auth(email, password)
    if (!accessToken) {
      return HttpResponse.unauthorizedError()
    }

    return HttpResponse.Ok({ accessToken })
  }
}
