/**
 * Created by pawel.idziak on 04.07.2017.
 */
import {IUser} from './User';
import {IAnswer} from './Answer';

export interface IQuestion {
  title: string;
  author: IUser;
  answers: IAnswer[]
}
