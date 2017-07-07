/**
 * Created by pawel.idziak on 04.07.2017.
 */
import {IUser} from './User';
import {IResponse} from './Response';

export interface IQuestion {
  id: string;
  title: string;
  author: IUser;
  responses: IResponse[]
}
