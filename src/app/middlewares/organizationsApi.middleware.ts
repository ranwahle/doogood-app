import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Organizations} from "../constants/actions";
import {DonationDetails} from "../Model/DonationDetails";
import {DistanceCalculator} from "../distance/distance-calculator";
import {OrgToMarkerPipe} from "../pipes/org-to-marker.pipe";
/**
 * Created by ranwahle on 13/10/2016.
 */

@Injectable()
export class OrganizationApiMiddleware {

  private http: Http;
  private orgToMarker:OrgToMarkerPipe;

  constructor(http: Http) {

    this.orgToMarker = new OrgToMarkerPipe();
    this.http = http;
  }

  filterByTag(organization, value, tag){
    if (!value){
      return true;
    }
    let  articleItem = organization.ArticleItem.filter &&  organization.ArticleItem.filter(item => item['-Tag'] === tag);
    return articleItem && articleItem.length;
  }

  filterQuantity(organization, value){

    if (!value){
      return true;
    }
    let  articleItem = organization.ArticleItem.filter &&  organization.ArticleItem.find(item => item['-Tag'] === 'Quantity');

    if (!articleItem){
      return false;
    }

    let maxQuantity = Number.parseFloat( articleItem['#text']);

    return value <= maxQuantity;

  }

  filterByDonationDetails(organization, donationDetails:DonationDetails){
    if (!organization.ArticleItem.length)
    {
      return false;
    }

    let result = this.filterByTag(organization, donationDetails.isDryFood, 'DryFood')
    &&
      this.filterByTag(organization, donationDetails.isKosherFood, 'Kosher') &&
        this.filterByTag(organization, donationDetails.refrigeration, 'Cooling')
    && this.filterQuantity(organization, donationDetails.quantity);
    return result;
  }

  filterData(donationDetails:DonationDetails, organizationsData){
    let organizations = organizationsData.Data.Articles.Article;

    let result = organizations.filter(item => this.filterByDonationDetails(item, donationDetails));

    return result;

  }
  calcDistance(originalLocation, organizations){

    organizations.forEach(org => {
      let orgMarker = this.orgToMarker.convertToMarker(org);
      if (orgMarker) {
        org.distance = DistanceCalculator(originalLocation, {lat: orgMarker.lat, long: orgMarker.lng});
      }
    });

    return organizations.sort((org1, org2) => org1.distance  - org2.distance );
  }

  middleware = store => next => action => {

    if (action.type === Organizations.Find) {
      console.log('payload', action.payload);
      //this.http.get('http://il1.gaiamobile.com/coreapp/exportdata?appID=1&format=1&articleIds=!Amutot&xml=0&searchType=2')
      this.http.get('http://localhost:5000/data/organizations')
        .subscribe(data => {
          console.log(data);
          store.dispatch({type: Organizations.Loaded,
            payload: this.calcDistance(store.getState().originalLocation,  this.filterData(action.payload, data.json()))});
        }, error => {

            console.error('Error', error);
            store.dispatch({type: Organizations.Error})
          }
        );
    }

    return next(action);

  }
}
