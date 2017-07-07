/**
 * Created by pawel.idziak on 04.07.2017.
 */
import {IUser} from './User';
import {IComment} from './Comment';

export interface IAnswer {
  answerAuthor: IUser;
  text: string;
  comment: IComment[];
  votes: number;
}
