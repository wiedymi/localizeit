import passport from 'passport'

import AdminCountryController from './controllers/admin/CountryController'
import AdminLanguageController from './controllers/admin/LanguageController'
import AdminProjectController from './controllers/admin/ProjectController'
import AdminUserController from './controllers/admin/UserController'
import ApiCountryController from './controllers/api/CountryController'
import ApiKeyController from './controllers/api/KeyController'
import ApiLanguageController from './controllers/api/LanguageController'
import ApiProjectController from './controllers/api/ProjectController'
import ApiTranslateController from './controllers/api/TranslateController'
import ApiUserController from './controllers/api/UserController'
import AuthCallbackController from './controllers/auth/CallbackController'
import AuthLogOutController from './controllers/auth/LogOutController'
import ManagementKeyController from './controllers/management/KeyController'
import UserDashboardController from './controllers/user/DashboardController'
import UserTranslateController from './controllers/user/TranslateController'
import WebHomeController from './controllers/web/HomeController'

import isAdmin from './middlewares/isAdmin'
import isUser from './middlewares/isUser'
import isManager from './middlewares/isManager'

const routes = [
  /* ========================================
    Admin
  */
  {
    path: '/admin/country',
    method: 'get',
    middleware: isAdmin,
    controller: AdminCountryController,
  },
  {
    path: '/admin/language',
    method: 'get',
    middleware: isAdmin,
    controller: AdminLanguageController,
  },
  {
    path: '/admin/project',
    method: 'get',
    middleware: isAdmin,
    controller: AdminProjectController,
  },
  {
    path: '/admin/user',
    method: 'get',
    middleware: isAdmin,
    controller: AdminUserController,
  },

  /* ========================================
    Api
  */
  {
    path: '/api/country',
    method: 'get',
    middleware: isAdmin,
    controller: ApiCountryController,
  },
  {
    path: '/api/country',
    method: 'post',
    middleware: isAdmin,
    controller: ApiCountryController,
  },
  {
    path: '/api/country/:id',
    method: 'put',
    middleware: isAdmin,
    controller: ApiCountryController,
  },
  {
    path: '/api/country/:id',
    method: 'delete',
    middleware: isAdmin,
    controller: ApiCountryController,
  },
  {
    path: '/api/key',
    method: 'get',
    middleware: isManager,
    controller: ApiKeyController,
  },
  {
    path: '/api/key',
    method: 'post',
    middleware: isManager,
    controller: ApiKeyController,
  },
  {
    path: '/api/key/:id',
    method: 'put',
    middleware: isManager,
    controller: ApiKeyController,
  },
  {
    path: '/api/key/:id',
    method: 'delete',
    middleware: isManager,
    controller: ApiKeyController,
  },
  {
    path: '/api/language',
    method: 'get',
    middleware: isAdmin,
    controller: ApiLanguageController,
  },
  {
    path: '/api/language',
    method: 'post',
    middleware: isAdmin,
    controller: ApiLanguageController,
  },
  {
    path: '/api/language/:id',
    method: 'put',
    middleware: isAdmin,
    controller: ApiLanguageController,
  },
  {
    path: '/api/language/:id',
    method: 'delete',
    middleware: isAdmin,
    controller: ApiLanguageController,
  },
  {
    path: '/api/project',
    method: 'get',
    middleware: isAdmin,
    controller: ApiProjectController,
  },
  {
    path: '/api/project',
    method: 'post',
    middleware: isAdmin,
    controller: ApiProjectController,
  },
  {
    path: '/api/project/:id',
    method: 'put',
    middleware: isAdmin,
    controller: ApiProjectController,
  },
  {
    path: '/api/project/:id',
    method: 'delete',
    middleware: isAdmin,
    controller: ApiProjectController,
  },
  {
    path: '/api/translate',
    method: 'get',
    middleware: isAdmin,
    controller: ApiTranslateController,
  },
  {
    path: '/api/user',
    method: 'get',
    middleware: isAdmin,
    controller: ApiUserController,
  },
  {
    path: '/api/user/:id',
    method: 'put',
    middleware: isAdmin,
    controller: ApiUserController,
  },
  {
    path: '/api/user/:id',
    method: 'delete',
    middleware: isAdmin,
    controller: ApiUserController,
  },

  /* ========================================
    Auth
  */
  {
    path: '/auth/callback',
    method: 'get',
    middleware: passport.authenticate('google', { failureRedirect: '/' }),
    controller: AuthCallbackController,
  },
  {
    path: '/auth/login',
    method: 'get',
    call: passport.authenticate('google', {
      scope: [
        'https://www.googleapis.com/auth/userinfo.email',
        'https://www.googleapis.com/auth/userinfo.profile',
      ],
    }),
  },
  {
    path: '/auth/logout',
    method: 'get',
    controller: AuthLogOutController,
  },

  /* ========================================
    Management
  */
  {
    path: '/management/key',
    method: 'get',
    middleware: isManager,
    controller: ManagementKeyController,
  },

  /* ========================================
    Website
  */
  {
    path: '/user/dashboard',
    method: 'get',
    middleware: isUser,
    controller: UserDashboardController,
  },
  {
    path: '/user/translate',
    method: 'get',
    middleware: isUser,
    controller: UserTranslateController,
  },

  /* ========================================
    Website
  */
  {
    path: '/',
    method: 'get',
    controller: WebHomeController,
  },
]

export default routes
