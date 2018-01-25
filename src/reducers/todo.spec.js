import reducer from './todo'

describe('Todo Reducer', () => {


  test('returs a state object', () => {
    const result = reducer(undefined, {type: 'ANYTHING'})
    expect(result).toBeDefined()
  })

  test('adds a todo', () => {
    const startstate = {
      todos: [
        {id: 1, name: 'test1', isComplete: true },
        {id: 2, name: 'test2', isComplete: false },
        {id: 3, name: 'test3', isComplete: false }
      ]
    }
    const expectedstate = {
      todos: [
        { id: 1, name: 'test1', isComplete: true },
        { id: 2, name: 'test2', isComplete: false },
        { id: 3, name: 'test3', isComplete: false },
        { id: 4, name: 'test4', isComplete: false }
      ]
    }
    const action = { type: 'TODO_ADD', payload: { id: 4, name: 'test4', isComplete: false }}
    const result = reducer(startstate, action)
    expect(result).toEqual(expectedstate)
  })
})
