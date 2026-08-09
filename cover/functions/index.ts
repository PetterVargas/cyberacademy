import ids from '../public/index.json'

export const onRequestGet: PagesFunction = async (context) => {
  const id = ids[Math.floor(Math.random() * ids.length)]
  return Response.redirect(new URL(`/${id}.webp`, context.request.url).toString(), 302)
}
