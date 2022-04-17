function requireAdmin(request: Request): Response | undefined {
  const token = request.headers.get('Authorization') ?? ''
  if (
    !ADMIN_TOKEN ||
    token.split(' ')[0].toLowerCase() !== 'bearer' ||
    token.split(' ')[1] !== ADMIN_TOKEN
  ) {
    return new Response('Bad admin token.', {
      status: 403,
    })
  }
}

export default requireAdmin
