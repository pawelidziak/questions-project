/**
 * Created by pawel.idziak on 08.07.2017.
 */
import {IUser} from './User';

export interface IResponse {
  id: number;
  connectedTo: number;
  type: string;
  author: IUser;
  text: string;
  votes: number;
  date: Date;
}
