import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Organizations} from "../constants/actions";
import {DonationDetails} from "../Model/DonationDetails";
/**
 * Created by ranwahle on 13/10/2016.
 */

@Injectable()
export class OrganizationApiMiddleware {

  private http: Http;

  constructor(http: Http) {

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
    let result = true;
    result = this.filterByTag(organization, donationDetails.isDryFood, 'DryFood')
    &&
      this.filterByTag(organization, donationDetails.isKosherFood, 'Kosher') &&
        this.filterByTag(organization, donationDetails.refrigeration, 'Cooling')
    && this.filterQuantity(organization, donationDetails.quantity);
    return result;
  }

  filterData(donationDetails:DonationDetails, organizationsData){
    let organizations = organizationsData.Data.Articles.Article;

    return organizations.filter(item => this.filterByDonationDetails(item, donationDetails));

  }

  middleware = store => next => action => {

    if (action.type === Organizations.Find) {
      console.log('payload', action.payload);
      //this.http.get('http://il1.gaiamobile.com/coreapp/exportdata?appID=1&format=1&articleIds=!Amutot&xml=0&searchType=2')
      this.http.get('http://localhost:5000/data/organizations')
        .subscribe(data => {
          console.log(data);
          store.dispatch({type: Organizations.Loaded, payload: this.filterData(action.payload, data.json())});
        }, error => {

            console.error('Error', error);
            store.dispatch({type: Organizations.Error})
          }
        );
    }

    return next(action);

  }
}
