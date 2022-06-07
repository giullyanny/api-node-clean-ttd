const LoginRouter = require('./login-router')
const MissingParamError = require('./erros/missing-param-error')

const LoginRouterInstance = () => {
  return new LoginRouter()
}

describe('Login Router', () => {
  test('Should return 400 if no email is provided', () => {
    const sut = LoginRouterInstance()
    const httpRequest = {
      body: {
        password: 'any_password'
      }
    }
    const httpResponse = sut.route(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('email'))
  })
})

describe('Login Router', () => {
  test('Should return 400 if no password is provided', () => {
    const sut = LoginRouterInstance()
    const httpRequest = {
      body: {
        email: 'any_email'
      }
    }
    const httpResponse = sut.route(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('password'))
  })
})

describe('Login Router', () => {
  test('Should return 500 if httpResponse no body is provided', () => {
    const sut = LoginRouterInstance()
    const httpRequest = {}
    const httpResponse = sut.route(httpRequest)
    expect(httpResponse.statusCode).toBe(500)
  })
})

describe('Login Router', () => {
  test('Should return 500 if no httpResponse is provided', () => {
    const sut = LoginRouterInstance()
    const httpResponse = sut.route()
    expect(httpResponse.statusCode).toBe(500)
  })
})
