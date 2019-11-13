let initialState = {
  isAutheticated: false,
  isLoading: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "USER-DETAILS":
      return {
        ...state,
        isAutheticated: true,
        user: action.payload
      };
    default:
      return state;
  }
}
