import user from '../Data/User';
import participents from '../Data/participents';

export let getUserDetailsThunk = (userId) => (dispatch) => {
  dispatch({type:'REMOVE-ERROR'})
  if(userId === user.emailAddress){
    dispatch({type:'USER-DETAILS',payload:user});
    dispatch({type:'ADD-PARTICIPENTS', payload:participents})
  }else{
    dispatch({type:'ERROR',payload:{msg:'Wrong Credentials'}});
  }
}