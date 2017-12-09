const initialState = {
  displayedUSer: undefined
}

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'SHOW_USER_DETAIL': {
      return {
        ...state,
        displayedUSer: action.user
      }
    }

    default: return state
  }

}

export default reducer
