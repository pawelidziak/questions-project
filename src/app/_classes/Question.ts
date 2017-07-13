/**
 * Created by pawel.idziak on 04.07.2017.
 */
import {IUser} from './User';
import {IResponse} from './Response';

export interface IQuestion {
  id: number;
  title: string;
  author: IUser;
  text: string;
  responses: IResponse[];
  votes?: number;
  related: number;
  peers: number;
  conversations: number;
}
