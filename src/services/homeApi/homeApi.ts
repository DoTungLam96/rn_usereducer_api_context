/* eslint-disable @typescript-eslint/no-unused-vars */
import {HomeRespond} from '../../models/User';
import ApiService from '../ApiServices';
import {homeEndpoints} from './endpoints';
export const BASE_URL_API = 'https://testapi.io/api/testapiiii';
export default class HomeApi extends ApiService {
  constructor() {
    super(BASE_URL_API);
  }

  getDataFromHome = (): Promise<HomeRespond[] | null> => {
    return this.POST<null, HomeRespond[]>(homeEndpoints.getHomeData, null);
  };
  //   getUserInfo = (body: UserBody): Promise<Record<string, any>> => {
  //     return this.POST<UserBody, Record<string, any>>(v1.userInfo, body);
  //   };
}
