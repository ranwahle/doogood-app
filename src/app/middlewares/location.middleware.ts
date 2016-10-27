/**
 * Created by ranwahle on 26/10/2016.
 */
import {Injectable} from "@angular/core";
import {LocationActionsTypes} from "../constants/actions";
@Injectable()

export class LocationMiddleware{
  middleware = store => next => action =>{
    switch (action.type){
      case LocationActionsTypes.GetLocation:{
        navigator.geolocation.getCurrentPosition(position => {
          console.log('position', position);

          store.dispatch({type: LocationActionsTypes.SetOriginalLocation,
          payload: {lat:  position.coords.latitude,
                lng:position.coords.longitude }});

          store.dispatch({type: LocationActionsTypes.LocationChanged,
            payload: {lat:  position.coords.latitude,
              lng:position.coords.longitude }});
        });
      }
    }

    return next(action)
  };
}
