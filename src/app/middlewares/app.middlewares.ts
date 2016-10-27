import {OrganizationApiMiddleware} from "./organizationsApi.middleware";
import {LocationMiddleware} from "./location.middleware";
/**
 * Created by ranwahle on 19/09/2016.
 */
export const APP_Middlewares = [OrganizationApiMiddleware, LocationMiddleware];
