My solution to a React pre-task for applying to a junior web developer position.

*Architectural changes:*
- Created the components-folder for components other than App.js
- Moved the new functional components and their css-classes into their own files
- Changed the names of Bar.js -> TodoForm.js and Hello.js -> TodoItem.js for better code readability
- Also changed some variable names for better readability
- todos-array state and its state handling was moved into a global store with the Context API (id generation, adding/removing todos and changing the completion status of a todo were all moved to context)

*Code changes (aside from the necessary changes from refactoring into functional components):*
- In TodosProvider.js, useReducer() is used to handle all changes to todos
- In App.js, todoItems was changed to use array.map()
- Rendering a todo complete/incomplete is also done with array.map()
- Removing a todo is implemented with array.filter()
- With the implementation of todo removal, id generation was changed to be more unique (although it is still not perfectly unique)
- Form submission logic was moved from App.js to TodoForm.js (old Bar.js)

*Testing:*
- Testing is done with Jest and React Testing Library
- Upgraded react-scripts to a newer version to get better Jest functionality
- TodoItem.js and TodoForm.js are tested. The components could have been tested more thoroughly (such as testing if the buttons work), but due to the use of Context API, writing the tests is more complex


*Extra stuff that could be fixed in further development:*
- Fix some edge cases, like inability to add too long or empty todo names
- Responsive design for mobile
- Better accessibility
- Better testing