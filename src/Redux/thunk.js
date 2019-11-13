import user from '../Data/User';

export let getUserDetailsThunk = (userId) => (dispatch) => {
  dispatch({type:'REMOVE-ERROR'})
  if(userId === user.emailAddress){
    dispatch({type:'USER-DETAILS',payload:user});
  }else{
    dispatch({type:'ERROR',payload:{msg:'Wrong Credentials'}});
  }
}