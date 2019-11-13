let initialState = {
  isAutheticated: false,
  isLoading: false,
  user: {},
  participents:[],
  ratings : {},
  error : {}
}

export default function(state = initialState, action) {
  switch (action.type) {
    case "USER-DETAILS":
      return {
        ...state,
        isAutheticated: true,
        user: action.payload
      }
    case 'ERROR' :
      return {
        ...state,
        error: action.payload
      }
    case 'REMOVE-ERROR' :
      return {
        ...state,
        error:{}
      }
    default:
      return state;
  }
}
