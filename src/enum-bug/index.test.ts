import { enumBug } from './index'
describe('enumBug', function () {
  test('enum bug is a bool', () => {
    expect(enumBug).toBeBoolean()
  })
})