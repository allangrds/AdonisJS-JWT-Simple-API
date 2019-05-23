'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route') // eslint-disable-line no-undef

Route
  .post('/users', 'UserController.store')
  .validator('StoreUser')

Route
  .group(() => {
    Route
      .post('login', 'AuthController.login')
      .validator('AuthUser')

    Route
      .post('logout', 'AuthController.logout')
      .middleware(['auth'])
  })
  .prefix('auth')