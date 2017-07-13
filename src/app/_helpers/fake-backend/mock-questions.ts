/**
 * Created by pawel.idziak on 13.07.2017.
 */

export const QUESTIONS = [
  {
    'id': 1,
    'title': 'First question for test',
    'text': 'First question text First question text First question text First question text First question text First question text ',
    'votes': 5,
    'related': 4,
    'peers': 21,
    'conversations': 6,
    'author':   {
      'id': 1,
      'name': 'Mateusz',
      'memberFor': '07.10.2017',
      'lastSeen': '07.09.2017',
      'peers': 5,
      'discussions': 6,
      'findings': 7,
      'questions': 8,
      'avatarUrl': 'assets/avatars/1.png'
    },
    'responses': [
      {
        'id': 1,
        'connectedTo': 1,
        'type': 'ANSWER',
        'author': {
          'id': 2,
          'name': 'Pawel',
          'memberFor': '07.11.2017',
          'lastSeen': '07.09.2017',
          'peers': 5,
          'discussions': 6,
          'findings': 7,
          'questions': 8,
          'avatarUrl': 'assets/avatars/2.png'
        },
        'text': 'Example answer 1',
        'votes': 20,
        'date': '06.10.2017'
      },
      {
        'id': 2,
        'connectedTo': 1,
        'type': 'ANSWER',
        'author': {
          'id': 3,
          'name': 'Beata',
          'memberFor': '07.12.2017',
          'lastSeen': '07.09.2017',
          'peers': 5,
          'discussions': 6,
          'findings': 7,
          'questions': 8,
          'avatarUrl': 'assets/avatars/3.png'
        },
        'text': 'Example answer 2',
        'votes': 0,
        'date': '06.25.2017'
      },
      {
        'id': 3,
        'connectedTo': 1,
        'type': 'COMMENT',
        'author': {
          'id': 4,
          'name': 'Jakub',
          'memberFor': '07.13.2017',
          'lastSeen': '07.09.2017',
          'peers': 5,
          'discussions': 6,
          'findings': 7,
          'questions': 8,
          'avatarUrl': 'assets/avatars/4.png'
        },
        'text': 'Example comment 1 to answer 1',
        'votes': 1,
        'date': '06.26.2017'
      },
      {
        'id': 4,
        'connectedTo': 1,
        'type': 'ANSWER',
        'author': {
          'id': 5,
          'name': 'Piotr',
          'memberFor': '07.13.2017',
          'lastSeen': '07.09.2017',
          'peers': 5,
          'discussions': 6,
          'findings': 7,
          'questions': 8,
          'avatarUrl': 'assets/avatars/5.png'
        },
        'text': 'Example answer 3',
        'votes': -2,
        'date': '07.08.2017'
      },
      {
        'id': 5,
        'connectedTo': 4,
        'type': 'COMMENT',
        'author': {
          'id': 1,
          'name': 'Mateusz',
          'memberFor': '07.10.2017',
          'lastSeen': '07.09.2017',
          'peers': 5,
          'discussions': 6,
          'findings': 7,
          'questions': 8,
          'avatarUrl': 'assets/avatars/1.png'
        },
        'text': 'Example comment 2 to answer 3',
        'votes': 3,
        'date': '07.09.2017'
      },
      {
        'id': 6,
        'connectedTo': 1,
        'type': 'ANSWER',
        'author': {
          'id': 2,
          'name': 'Pawel',
          'memberFor': '07.11.2017',
          'lastSeen': '07.09.2017',
          'peers': 5,
          'discussions': 6,
          'findings': 7,
          'questions': 8,
          'avatarUrl': 'assets/avatars/2.png'
        },
        'text': 'Example answer 4',
        'votes': -4,
        'date': '07.10.2017'
      }
    ]
  },
  {
    'id': 2,
    'title': 'Second question for test',
    'text': 'Second question text',
    'votes': 4,
    'related': 3,
    'peers': 5,
    'conversations': 8,
    'author': {
      'id': 2,
      'name': 'Pawel',
      'memberFor': '07.11.2017',
      'lastSeen': '07.09.2017',
      'peers': 5,
      'discussions': 6,
      'findings': 7,
      'questions': 8,
      'avatarUrl': 'assets/avatars/2.png'
    },
    'responses': [
      {
        'id': 1,
        'connectedTo': 1,
        'type': 'ANSWER',
        'author': {
          'id': 3,
          'name': 'Beata',
          'memberFor': '07.12.2017',
          'lastSeen': '07.09.2017',
          'peers': 5,
          'discussions': 6,
          'findings': 7,
          'questions': 8,
          'avatarUrl': 'assets/avatars/3.png'
        },
        'text': 'Example answer 1',
        'votes': 20,
        'date': '07.01.2017'
      },
      {
        'id': 2,
        'connectedTo': 1,
        'type': 'ANSWER',
        'author': {
          'id': 4,
          'name': 'Jakub',
          'memberFor': '07.13.2017',
          'lastSeen': '07.09.2017',
          'peers': 5,
          'discussions': 6,
          'findings': 7,
          'questions': 8,
          'avatarUrl': 'assets/avatars/4.png'
        },
        'text': 'Example answer 2',
        'votes': 0,
        'date': '07.02.2017'
      },
      {
        'id': 3,
        'connectedTo': 1,
        'type': 'COMMENT',
        'author': {
          'id': 5,
          'name': 'Piotr',
          'memberFor': '07.13.2017',
          'lastSeen': '07.09.2017',
          'peers': 5,
          'discussions': 6,
          'findings': 7,
          'questions': 8,
          'avatarUrl': 'assets/avatars/5.png'
        },
        'text': 'Example comment 1 to answer 1',
        'votes': 1,
        'date': '07.02.2017'
      },
      {
        'id': 4,
        'connectedTo': 1,
        'type': 'ANSWER',
        'author': {
          'id': 1,
          'name': 'Mateusz',
          'memberFor': '07.10.2017',
          'lastSeen': '07.09.2017',
          'peers': 5,
          'discussions': 6,
          'findings': 7,
          'questions': 8,
          'avatarUrl': 'assets/avatars/1.png'
        },
        'text': 'Example answer 3',
        'votes': -2,
        'date': '07.12.2017'
      },
      {
        'id': 5,
        'connectedTo': 4,
        'type': 'COMMENT',
        'author': {
          'id': 2,
          'name': 'Pawel',
          'memberFor': '07.11.2017',
          'lastSeen': '07.09.2017',
          'peers': 5,
          'discussions': 6,
          'findings': 7,
          'questions': 8,
          'avatarUrl': 'assets/avatars/2.png'
        },
        'text': 'Example comment 2 to answer 3',
        'votes': 3,
        'date': '07.12.2017'
      },
      {
        'id': 6,
        'connectedTo': 1,
        'type': 'ANSWER',
        'author': {
          'id': 3,
          'name': 'Beata',
          'memberFor': '07.12.2017',
          'lastSeen': '07.09.2017',
          'peers': 5,
          'discussions': 6,
          'findings': 7,
          'questions': 8,
          'avatarUrl': 'assets/avatars/3.png'
        },
        'text': 'Example answer 4',
        'votes': -4,
        'date': '07.13.2017'
      },
      {
        'id': 7,
        'connectedTo': 2,
        'type': 'COMMENT',
        'author': {
          'id': 3,
          'name': 'Beata',
          'memberFor': '07.12.2017',
          'lastSeen': '07.09.2017',
          'peers': 5,
          'discussions': 6,
          'findings': 7,
          'questions': 8,
          'avatarUrl': 'assets/avatars/3.png'
        },
        'text': 'Example comment 3 to answer 2',
        'votes': 5,
        'date': '07.13.2017'
      },
      {
        'id': 8,
        'connectedTo': 2,
        'type': 'COMMENT',
        'author': {
          'id': 4,
          'name': 'Jakub',
          'memberFor': '07.13.2017',
          'lastSeen': '07.09.2017',
          'peers': 5,
          'discussions': 6,
          'findings': 7,
          'questions': 8,
          'avatarUrl': 'assets/avatars/4.png'
        },
        'text': 'Example comment 3 to answer 2',
        'votes': 5,
        'date': '07.13.2017'
      }
    ]
  },
  {
    'id': 3,
    'title': 'Third question for test',
    'text': 'Third question text',
    'votes': 10,
    'related': 3,
    'peers': 5,
    'conversations': 0,
    'author': {
      'id': 6,
      'name': 'Robot',
      'memberFor': '06.01.2017',
      'lastSeen': '07.09.2017',
      'peers': 5,
      'discussions': 6,
      'findings': 7,
      'questions': 8,
      'avatarUrl': 'assets/avatars/5.png'
    },
    'responses': []
  }
];
