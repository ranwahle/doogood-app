/**
 * Created by ranwahle on 13/10/2016.
 */
/**
 * Created by ranwahle on 19/09/2016.
 */
import {Injectable} from "@angular/core";
import {applyMiddleware, createStore} from "redux";
import {RootReducer} from "./reducers/root";
import {APP_Middlewares} from "./middlewares/app.middlewares";
import {LANG_HE_NAME} from "./translation/lang-he";
import {OrganizationApiMiddleware} from "./middlewares/organizationsApi.middleware";
import {LocationMiddleware} from "./middlewares/location.middleware";
@Injectable()
export class Store{

  private  store;

  constructor(organizationApiMiddleware:OrganizationApiMiddleware, locationMiddleware:LocationMiddleware){

    this.store = createStore(RootReducer,applyMiddleware( organizationApiMiddleware.middleware, locationMiddleware.middleware));
    this.store.getState().language = LANG_HE_NAME;
  }

  get state(){
    return this.store.getState();
  }

  dispatch(action){
    this.store.dispatch(action)
  }
}
