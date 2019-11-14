let initialState = {
  isAutheticated: false,
  isLoading: false,
  user: {},
  participents:[],
  ratings : {},
  error : {},
  participent : {}
}

export default function(state = initialState, action) {
  switch (action.type) {
    case "USER-DETAILS":
      return {
        ...state,
        isAutheticated: true,
        user: action.payload
      }
    case 'ADD-PARTICIPENTS':
      return {
        ...state,
        participents: action.payload
      }
    case 'LOAD-RATING-DETAILS' : 
      return {
        ...state,
        ratings : {...action.payload}
      }
    case 'MAP-IDEA-DETAILS' :
      let participent = state.participents.find((idea) => (idea.id === action.payload));
      console.log(participent);
      return{
        ...state,
        participent : {...participent}
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
