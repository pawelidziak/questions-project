/**
 * Created by pawel.idziak on 12.07.2017.
 */
import {Injectable} from '@angular/core';

@Injectable()
export class VotingService {

  private _votes: number;
  private _orgVotes: number;
  private _disVoteUp: boolean;
  private _disVoteDown: boolean;

  /* in voteUp and voteDown methods should has additional method which connect with backend and saves values
   * (and recognizes if it is question, answer or comment) */

  constructor() {
    this.disVoteUp = false;
    this.disVoteDown = false;
  }

  voteUp(): void {
    this.votes = this.votes + 1;
    if (this.orgVotes !== this.votes) {
      this.disVoteUp = true;
    }
    this.checkVotes(this.orgVotes, this.votes);
  }

  voteDown(): void {
    this.votes = this.votes - 1;
    if (this.orgVotes !== this.votes) {
      this.disVoteDown = true;
    }
    this.checkVotes(this.orgVotes, this.votes);
  }

  private checkVotes(first: number, second: number): void {
    if (first === second) {
      this.disVoteUp = false;
      this.disVoteDown = false;
    }
  }

  get votes(): number {
    return this._votes;
  }

  set votes(value: number) {
    this._votes = value;
  }

  get orgVotes(): number {
    return this._orgVotes;
  }

  set orgVotes(value: number) {
    this._orgVotes = value;
  }

  get disVoteUp(): boolean {
    return this._disVoteUp;
  }

  set disVoteUp(value: boolean) {
    this._disVoteUp = value;
  }

  get disVoteDown(): boolean {
    return this._disVoteDown;
  }

  set disVoteDown(value: boolean) {
    this._disVoteDown = value;
  }
}
