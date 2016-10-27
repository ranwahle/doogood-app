/**
 * Created by ranwahle on 26/10/2016.
 */

import {LocationActionsTypes} from "../constants/actions";

export function LocationReducer(state = [], action){
  switch (action.type){
    case LocationActionsTypes.LocationChanged:{
      return action.payload;
    }


  }
  return state;
}
