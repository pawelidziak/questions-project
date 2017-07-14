/**
 * Created by pawel.idziak on 04.07.2017.
 */
export interface IUser {
  id: number;
  name: string;
  memberFor: Date;
  lastSeen: Date;
  peers: number;
  discussions: number;
  findings: number;
  questions: number;
  avatarUrl: string;
  activityLvl: number;
}
