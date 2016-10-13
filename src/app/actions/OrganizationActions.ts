import {Injectable} from "@angular/core";
import {Store} from "../app.store";
import {Organizations} from "../constants/actions";
/**
 * Created by ranwahle on 13/10/2016.
 */

@Injectable()
export class OrganizationActions{

  constructor(private _store:Store){

  }
  findOrganizations(dontationDetails){
    this._store.dispatch({type: Organizations.Find,
    payload: dontationDetails});
  }

}
