import {Injectable} from "@angular/core";
import {Store} from "../app.store";
import {Organizations} from "../constants/actions";
import {DonationDetails} from "../Model/DonationDetails";
/**
 * Created by ranwahle on 13/10/2016.
 */

@Injectable()
export class OrganizationActions{

  constructor(private _store:Store){

  }
  findOrganizations(dontationDetails:DonationDetails){
    this._store.dispatch({type: Organizations.Find,
    payload: dontationDetails});
  }

}
