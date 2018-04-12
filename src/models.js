export const count = {
  state: 0, // initial state
  reducers: {
    // handle state changes with pure functions
    addBy(state, payload) {
      return state + payload
    }
  },
  effects: {
    // handle state changes with impure functions.
    // use async/await for async actions
    async addByAsync(payload, rootState) {
      await new Promise(resolve => setTimeout(resolve, 1000))
      this.addBy(payload)
    }
  }
}
