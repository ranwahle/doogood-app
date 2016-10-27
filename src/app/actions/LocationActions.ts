/**
 * Created by ranwahle on 26/10/2016.
 */
import {Injectable} from "@angular/core";
import {Store} from "../app.store";
import {LocationActionsTypes} from "../constants/actions";
@Injectable()
export class LocationActions{
  constructor (private _store:Store){

  }

  GetLocation(){
      this._store.dispatch({type:LocationActionsTypes.GetLocation

    });
  }

  setLocation(position){
    this._store.dispatch({type: LocationActionsTypes.LocationChanged, payload: position});
  }
}
