/**
 * Created by ranwahle on 07/09/2016.
 */
import {combineReducers} from 'redux';
import {TranslateReducer} from "./translate.reducer";
import {OrganizationReducer} from "./organization.reducer";
import {LocationReducer} from "./location.reducer";
import {OriginalLocationReducer} from "./originalLocation.reducer";


export const RootReducer = combineReducers({
    language: TranslateReducer,
  organizations: OrganizationReducer,
  location:LocationReducer,
  originalLocation:OriginalLocationReducer
});
