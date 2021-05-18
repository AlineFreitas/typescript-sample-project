import { sum, multiply } from '../math'
describe('Index', () => {
  it('Does math right', () => {
    expect(sum(2, 3)).toEqual(5)
    expect(multiply(5, 5)).toEqual(25)
  })
})