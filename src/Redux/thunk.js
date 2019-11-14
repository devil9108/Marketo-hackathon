import user from '../Data/User';
import participents from '../Data/participents';
import rating from '../Data/ratings';

export let getUserDetailsThunk = (userId) => (dispatch) => {
  dispatch({type:'REMOVE-ERROR'})
  if(userId === user.emailAddress){
    dispatch({type:'USER-DETAILS',payload:user});
    dispatch({type:'ADD-PARTICIPENTS', payload:participents})
  }else{
    dispatch({type:'ERROR',payload:{msg:'Wrong Credentials'}});
  }
}

export let getRatingsThunk = (ideaId) => (dispatch) => {
  console.log('Hi',ideaId);
  if(ideaId){
    dispatch({type:'LOAD-RATING-DETAILS', payload:rating})
    dispatch({type:'MAP-IDEA-DETAILS',payload:ideaId})
  }
}

export let uploadRatingsThunk = (ratings) => (dispatch) =>{
  console.log(ratings);
  
}