const initialState = {
  showLogo: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_LOGO':
      return {
        result: action.payload
      }
    default:
      return state
  }
}
