import {Organizations} from "../constants/actions";
/**
 * Created by ranwahle on 23/10/2016.
 */
export function OrganizationReducer(state = [], action) {
  switch (action.type){
    case Organizations.Error:{
      return null;
    }
    case Organizations.Loaded:{
      return [...action.payload];
    }
  }
return state;
}
