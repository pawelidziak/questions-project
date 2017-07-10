/**
 * Created by pawel.idziak on 08.07.2017.
 */
import {IUser} from './User';

export interface IResponse {
  id: string;
  connectedTo: string;
  type: string;
  author: IUser;
  text: string;
  votes: number;
  date: Date;
}
