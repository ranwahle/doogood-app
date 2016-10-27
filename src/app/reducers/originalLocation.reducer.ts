import {LocationActionsTypes} from "../constants/actions";
/**
 * Created by ranwahle on 27/10/2016.
 */
export function OriginalLocationReducer(state = [], action){
  switch (action.type){
    case LocationActionsTypes.SetOriginalLocation:{
      return action.payload;
    }
  }

  return state;
}
