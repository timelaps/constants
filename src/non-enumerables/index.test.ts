import { nonEnumerables } from './index'
describe('nonEnumerables', function () {
  test('exists', () => {
    expect(nonEnumerables).toBeArray()
    expect(nonEnumerables.indexOf('toString')).toBeGreaterThan(-1)
  })
})
