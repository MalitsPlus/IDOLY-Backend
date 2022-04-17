import { Router } from 'itty-router'
import { Routes } from './const'

// Subrouters
import ManageRouter from './manage'

const errorHandler = (error: any) =>
  new Response('[Internal error] ' + error.message ?? 'Unknown Error', {
    status: error.status || 500,
  })

const router = Router()

// Management Router
router.all(Routes.Manage + '/*', ManageRouter.handle)

// Healthcheck
router.get('/alive', () => new Response('Hi Manager!'))

// 404 for everything else
router.all('*', () => new Response('Not Found.', { status: 404 }))

// attach the router "handle" to the event handler
addEventListener('fetch', (event) =>
  event.respondWith(router.handle(event.request).catch(errorHandler)),
)
