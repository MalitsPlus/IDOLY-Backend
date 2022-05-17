import requireAdmin from './requireAdmin'

function requireReadonly(request: Request): Response | undefined {
  if (requireAdmin(request) === undefined) {
    // It's admin
    return
  }
  const token = request.headers.get('Authorization') ?? ''
  if (
    !READONLY_TOKEN ||
    token.split(' ')[0].toLowerCase() !== 'bearer' ||
    token.split(' ')[1] !== READONLY_TOKEN
  ) {
    return new Response('Bad admin or readonly token.', {
      status: 403,
    })
  }
}

export default requireReadonly
