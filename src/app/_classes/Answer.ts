/**
 * Created by pawel.idziak on 04.07.2017.
 */
import {IUser} from './User';

export interface IAnswer {
  type: string;
  answerAuthor: IUser;
}
