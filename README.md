# QuestionsProject

Angular 4 with TypeScript, Bootstrap and Material Icons.

# Some comments: 
  - 'Hot' sort is sorting by maximum 'conversations' of the question (the hottest discussion in modal too)
  - 'Recent' sort is sorting by minimum 'id' of the question
  - Most of datas are dynamic, loaded from mocked data (prepared JSON files)
  - User connections in modal ('who joined the platform that same time'): all users are filtered but only 3 are selected (if there is max 7 days difference between register dates)
  - All dates in project are using custom pipe for display (some dates may be incorrect - error during creating file (mock-questions.ts) - for instance: date of answer can be earlier than author register date)
  - Each question may have an answer, each answer may have comment
  - Voting works in display, real method should connect with back-end and modify data in database
  - Each question (detailed) is display in different route: .../author(user)/id-question. The correctness of the data is checked in fake-backed.ts file and if author or id-question doesn't exist, an exception is returned
