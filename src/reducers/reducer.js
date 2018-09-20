//reducers
// import these

//reducer router
let reducers = {
  // add these
}
let reducer = (oldState, action) => (
  reducers[action.type] ?
    reducers[action.type](oldState, action) :
    oldState
)
export default reducer;