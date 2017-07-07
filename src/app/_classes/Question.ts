/**
 * Created by pawel.idziak on 04.07.2017.
 */
import {IUser} from './User';
import {IAnswer} from './Answer';

export interface IQuestion {
  id: string;
  title: string;
  author: IUser;
  text: string;
  answers?: IAnswer[];
  votes?: number;
  related: number;
  peers: number;
  conversations: number;
}
