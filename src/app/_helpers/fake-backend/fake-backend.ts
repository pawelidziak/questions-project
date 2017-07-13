/**
 * Created by pawel.idziak on 13.07.2017.
 */

import {
  Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod, XHRBackend, RequestOptions
} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';
import {USERS} from './mock-users';
import {QUESTIONS} from './mock-questions';
import {IUser} from '../../_classes/User';
import {IQuestion} from "../../_classes/Question";

// This fake-backend is based on example from:
// http://jasonwatmore.com/post/2016/11/24/angular-2-mockbackend-example-for-backendless-development

export function fakeBackendFactory(backend: MockBackend, options: BaseRequestOptions, realBackend: XHRBackend) {

  // configure fake backend
  backend.connections.subscribe((connection: MockConnection) => {

    setTimeout(() => {

      // get all questions
      if (connection.request.url.endsWith('/api/questions') && connection.request.method === RequestMethod.Get) {

        if (QUESTIONS) {
          connection.mockRespond(new Response(new ResponseOptions({status: 200, body: QUESTIONS})));
        } else {
          connection.mockError(new Error('No questions.'));
        }
        return;
      }

      // get one question (by id)
      if (connection.request.url.endsWith('/api/question') && connection.request.method === RequestMethod.Post) {

        const id = JSON.parse(connection.request.getBody());
        const foundQuestion = QUESTIONS.find((question) => question.id === id);

        if (foundQuestion) {
          connection.mockRespond(new Response(new ResponseOptions({status: 200, body: foundQuestion})));
        } else {
          connection.mockError(new Error('There is no question with this ID.'));
        }
        return;
      }

      // get user connections
      if (connection.request.url.endsWith('/api/user-connection') && connection.request.method === RequestMethod.Post) {

        const body = <IUser> JSON.parse(connection.request.getBody());

        // I'm using for-loop instead of filter method, because i want to push max 3 items
        // let connections = USERS.filter((user: any) => Math.abs(new Date(body.memberFor).getTime() - new Date(user.memberFor).getTime()) <= 604800000 && user.id !== body.id, );
        const connections = [];
        for (let i = 0; i < USERS.length; i++) {
          if (USERS[i].id !== body.id &&
            Math.abs(new Date(body.memberFor).getTime() - new Date(USERS[i].memberFor).getTime()) <= 604800000
            && connections.length < 3) {
            connections.push(USERS[i]);
          }
        }

        if (connections) {
          connection.mockRespond(new Response(new ResponseOptions({status: 200, body: connections})));
        } else {
          connection.mockRespond(new Response(new ResponseOptions({status: 400})));
        }
        return;
      }

      // get hottest discussion
      if (connection.request.url.endsWith('/api/hot-discussion') && connection.request.method === RequestMethod.Get) {

        let MAX_PEERS = 0;
        let index = 0;

        for (let i = 0; i < QUESTIONS.length; i++) {
          if (QUESTIONS[i].conversations > MAX_PEERS) {
            MAX_PEERS = QUESTIONS[i].conversations;
            index = i;
          }
        }
        const hottest = QUESTIONS[index];

        if (hottest) {
          connection.mockRespond(new Response(new ResponseOptions({status: 200, body: hottest})));
        } else {
          connection.mockRespond(new Response(new ResponseOptions({status: 400})));
        }
        return;
      }


      // pass through any requests not handled above
      const realHttp = new Http(realBackend, options);
      const requestOptions = new RequestOptions({
        method: connection.request.method,
        headers: connection.request.headers,
        body: connection.request.getBody(),
        url: connection.request.url,
        withCredentials: connection.request.withCredentials,
        responseType: connection.request.responseType
      });
      realHttp.request(connection.request.url, requestOptions)
        .subscribe((response: Response) => {
            connection.mockRespond(response);
          },
          (error: any) => {
            connection.mockError(error);
          });

    }, 500);

  });

  return new Http(backend, options);
};

export let fakeBackendProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: Http,
  useFactory: fakeBackendFactory,
  deps: [MockBackend, BaseRequestOptions, XHRBackend]
};
