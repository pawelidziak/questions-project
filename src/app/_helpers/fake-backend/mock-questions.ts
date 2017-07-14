/**
 * Created by pawel.idziak on 13.07.2017.
 */

export const QUESTIONS = [
  {
    'id': 1,
    'title': 'First question. Lorem ipsum dolor sit amet?',
    'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ' +
            'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea ' +
            'commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla ' +
            'pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'votes': 5,
    'related': 4,
    'peers': 21,
    'conversations': 6,
    'author': {
      'id': 1,
      'name': 'Eva',
      'memberFor': '07-10-2017',
      'lastSeen': '07-11-2017',
      'peers': 5,
      'discussions': 6,
      'findings': 7,
      'questions': 8,
      'avatarUrl': 'assets/avatars/1.png',
      'activityLvl': 2
    },
    'responses': [
      {
        'id': 1,
        'connectedTo': 1,
        'type': 'ANSWER',
        'author': {
          'id': 2,
          'name': 'Andrew',
          'memberFor': '07-11-2017',
          'lastSeen': '07-14-2017',
          'peers': 9,
          'discussions': 10,
          'findings': 11,
          'questions': 8,
          'avatarUrl': 'assets/avatars/2.png',
          'activityLvl': 1
        },
        'text': 'Example answer to question 1. Ut enim ad minim veniam, quis nostrud.',
        'votes': 20,
        'date': '06-10-2017'
      },
      {
        'id': 2,
        'connectedTo': 1,
        'type': 'ANSWER',
        'author': {
          'id': 3,
          'name': 'Joseph',
          'memberFor': '07-12-2017',
          'lastSeen': '07-13-2017',
          'peers': 5,
          'discussions': 7,
          'findings': 7,
          'questions': 2,
          'avatarUrl': 'assets/avatars/3.png',
          'activityLvl': 2
        },
        'text': 'Example answer to question 1. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui ' +
                'officia deserunt mollit anim id est laborum.',
        'votes': 0,
        'date': '06-25-2017'
      },
      {
        'id': 3,
        'connectedTo': 2,
        'type': 'COMMENT',
        'author': {
          'id': 2,
          'name': 'Andrew',
          'memberFor': '07-11-2017',
          'lastSeen': '07-14-2017',
          'peers': 9,
          'discussions': 10,
          'findings': 11,
          'questions': 8,
          'avatarUrl': 'assets/avatars/2.png',
          'activityLvl': 1
        },
        'text': 'Example comment to answer. Quis autem vel eum iure reprehenderit qui in ea voluptate.',
        'votes': 1,
        'date': '06-26-2017'
      },
      {
        'id': 4,
        'connectedTo': 1,
        'type': 'ANSWER',
        'author': {
          'id': 4,
          'name': 'Johny',
          'memberFor': '07-13-2017',
          'lastSeen': '07-14-2017',
          'peers': 3,
          'discussions': 1,
          'findings': 2,
          'questions': 2,
          'avatarUrl': 'assets/avatars/4.png',
          'activityLvl': 3
        },
        'text': 'Example answer to question 1. Nor again is there anyone who loves or pursues or desires to obtain pain ' +
                'of itself, because it is pain.',
        'votes': -2,
        'date': '07-08-2017'
      },
      {
        'id': 5,
        'connectedTo': 4,
        'type': 'COMMENT',
        'author': {
          'id': 5,
          'name': 'Beny',
          'memberFor': '07-02-2017',
          'lastSeen': '07-09-2017',
          'peers': 3,
          'discussions': 10,
          'findings': 5,
          'questions': 2,
          'avatarUrl': 'assets/avatars/5.png',
          'activityLvl': 2
        },
        'text': 'Example comment',
        'votes': 3,
        'date': '07-09-2017'
      },
      {
        'id': 6,
        'connectedTo': 1,
        'type': 'ANSWER',
        'author': {
          'id': 6,
          'name': 'Michael',
          'memberFor': '07-20-2017',
          'lastSeen': '07-21-2017',
          'peers': 6,
          'discussions': 7,
          'findings': 7,
          'questions': 9,
          'avatarUrl': 'assets/avatars/6.png',
          'activityLvl': 1
        },
        'text': 'Example answer to question 1. Et harum quidem rerum facilis est et expedita distinctio. Nam libero ' +
                'tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere ' +
                'possimus, omnis voluptas assumenda est.',
        'votes': -4,
        'date': '07-10-2017'
      }
    ]
  },
  {
    'id': 2,
    'title': 'Second question. Itaque earum rerum hic tenetur a sapiente delectus?',
    'text': 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti ' +
            'atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique ' +
            'sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum ' +
            'facilis est et expedita distinctio',
    'votes': 4,
    'related': 3,
    'peers': 5,
    'conversations': 8,
    'author': {
      'id': 2,
      'name': 'Andrew',
      'memberFor': '07-11-2017',
      'lastSeen': '07-14-2017',
      'peers': 9,
      'discussions': 10,
      'findings': 11,
      'questions': 8,
      'avatarUrl': 'assets/avatars/2.png',
      'activityLvl': 1
    },
    'responses': [
      {
        'id': 1,
        'connectedTo': 1,
        'type': 'ANSWER',
        'author': {
          'id': 6,
          'name': 'Michael',
          'memberFor': '07-20-2017',
          'lastSeen': '07-21-2017',
          'peers': 6,
          'discussions': 7,
          'findings': 7,
          'questions': 9,
          'avatarUrl': 'assets/avatars/6.png',
          'activityLvl': 1
        },
        'text': 'Example answer to question 2',
        'votes': 20,
        'date': '07-01-2017'
      },
      {
        'id': 2,
        'connectedTo': 1,
        'type': 'ANSWER',
        'author': {
          'id': 5,
          'name': 'Beny',
          'memberFor': '07-02-2017',
          'lastSeen': '07-09-2017',
          'peers': 3,
          'discussions': 10,
          'findings': 5,
          'questions': 2,
          'avatarUrl': 'assets/avatars/5.png',
          'activityLvl': 2
        },
        'text': 'Example answer to question 2',
        'votes': 0,
        'date': '07-02-2017'
      },
      {
        'id': 3,
        'connectedTo': 1,
        'type': 'COMMENT',
        'author': {
          'id': 4,
          'name': 'Johny',
          'memberFor': '07-13-2017',
          'lastSeen': '07-14-2017',
          'peers': 3,
          'discussions': 1,
          'findings': 2,
          'questions': 2,
          'avatarUrl': 'assets/avatars/4.png',
          'activityLvl': 3
        },
        'text': 'Example comment to answer.',
        'votes': 1,
        'date': '07-02-2017'
      },
      {
        'id': 4,
        'connectedTo': 1,
        'type': 'ANSWER',
        'author': {
          'id': 3,
          'name': 'Joseph',
          'memberFor': '07-12-2017',
          'lastSeen': '07-13-2017',
          'peers': 5,
          'discussions': 7,
          'findings': 7,
          'questions': 2,
          'avatarUrl': 'assets/avatars/3.png',
          'activityLvl': 2
        },
        'text': 'Example answer to question 2',
        'votes': -2,
        'date': '07-12-2017'
      },
      {
        'id': 5,
        'connectedTo': 4,
        'type': 'COMMENT',
        'author': {
          'id': 2,
          'name': 'Andrew',
          'memberFor': '07-11-2017',
          'lastSeen': '07-14-2017',
          'peers': 9,
          'discussions': 10,
          'findings': 11,
          'questions': 8,
          'avatarUrl': 'assets/avatars/2.png',
          'activityLvl': 1
        },
        'text': 'Example comment to answer.',
        'votes': 3,
        'date': '07-12-2017'
      },
      {
        'id': 6,
        'connectedTo': 1,
        'type': 'ANSWER',
        'author': {
          'id': 1,
          'name': 'Eva',
          'memberFor': '07-10-2017',
          'lastSeen': '07-11-2017',
          'peers': 5,
          'discussions': 6,
          'findings': 7,
          'questions': 8,
          'avatarUrl': 'assets/avatars/1.png',
          'activityLvl': 2
        },
        'text': 'Example answer to question 2',
        'votes': -4,
        'date': '07-13-2017'
      },
      {
        'id': 7,
        'connectedTo': 2,
        'type': 'COMMENT',
        'author': {
          'id': 6,
          'name': 'Michael',
          'memberFor': '07-20-2017',
          'lastSeen': '07-21-2017',
          'peers': 6,
          'discussions': 7,
          'findings': 7,
          'questions': 9,
          'avatarUrl': 'assets/avatars/6.png',
          'activityLvl': 1
        },
        'text': 'Example comment to answer.',
        'votes': 5,
        'date': '07-13-2017'
      },
      {
        'id': 8,
        'connectedTo': 2,
        'type': 'COMMENT',
        'author': {
          'id': 5,
          'name': 'Beny',
          'memberFor': '07-02-2017',
          'lastSeen': '07-09-2017',
          'peers': 3,
          'discussions': 10,
          'findings': 5,
          'questions': 2,
          'avatarUrl': 'assets/avatars/5.png',
          'activityLvl': 2
        },
        'text': 'Example comment to answer.',
        'votes': 5,
        'date': '07-13-2017'
      }
    ]
  },
  {
    'id': 3,
    'title': 'Third question for test',
    'text': 'Third question text',
    'votes': 2,
    'related': 1,
    'peers': 0,
    'conversations': 0,
    'author': {
      'id': 3,
      'name': 'Joseph',
      'memberFor': '07-12-2017',
      'lastSeen': '07-13-2017',
      'peers': 5,
      'discussions': 7,
      'findings': 7,
      'questions': 2,
      'avatarUrl': 'assets/avatars/3.png',
      'activityLvl': 2
    },
    'responses': []
  }
];
