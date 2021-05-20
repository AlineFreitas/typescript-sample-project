import app from './app'

const port = process.env.NODE_PORT ?? 5000

app.listen(port, () => console.log(`*:${port} - Listening on port ${port}`))
