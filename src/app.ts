import express, { Application } from 'express'

const app: Application = express()

app.use(express.json())
app.use(
  express.urlencoded(
    { extended: true }
  )
)

app.get(
  '/', (request, response) => {
    return response.json({
      message: 'Hello World!'
    })
  }
)

export default app
