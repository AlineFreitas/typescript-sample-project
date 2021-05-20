import request from 'supertest'
import app from '../src/app'

describe('App', () => {
  it('Example test', async () => {
    expect(true).toBeTruthy()
    const { body } = await request(app).get('/').expect(200)

    expect(body.message).toEqual('Hello World!')
  })
})
