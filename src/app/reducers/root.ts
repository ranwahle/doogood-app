/**
 * Created by ranwahle on 07/09/2016.
 */
import {combineReducers} from 'redux';
import {TranslateReducer} from "./translate.reducer";
import {OrganizationReducer} from "./organization.reducer";


export const RootReducer = combineReducers({
    language: TranslateReducer,
  organizations: OrganizationReducer
});
