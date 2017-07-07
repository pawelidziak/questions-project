/**
 * Created by pawel.idziak on 07.07.2017.
 */
import {IUser} from './User';

export interface IComment {
  answerAuthor: IUser;
  text: string;
  votes: number;
}
