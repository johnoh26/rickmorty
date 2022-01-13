# RickMorty
Using the [Rick and Morty API](https://rickandmortyapi.com/documentation)

[x] create an app that displays a list of 20 Rick and Morty characters where each list item contains basic information like the character's name, status, and species.

[x] When a list item is tapped, another screen displays the character's image along with other details such as their location's name, type, dimension, and number of residents.

### What architectural decisions did you make and why? Elaborate on strengths and weaknesses.
- created a single page application using Angular
- Strengths: quick and easy setup using Angular CLI; can manage the state and control the UI in one spot; my familiarity with the framework
- Weaknesses: When creating a simple application using Angular can be cumbersome. Angular is similar to an all-in-one solution that comes with its own testing module, http module, etc., whereas React has flexibility when it comes to incorporating 3rd party libraries. 

### How did you handle error cases? Eg: botched response, no response, etc.
- added rudimentary error handling for observables
- added null checks in case data comes in as null

### How did you test the app?
- end-to-end manual test by starting the application and clicking around, given that it has simple features.

### What third party libraries/ external code snippets did you use, if any?
- Angular, Angular CLI, and NX to create templates quickly while following best practices, put forth by the angular team.

### If you had more time, what would you have done differently?
- better error handling; don't want to show internal error messages to users
- add a nice style
- put api url in .env file
- allow user to specify get 20 characters from which page
- as the application grows weigh pros/cons of using ngRx for state management (like Redux for React)

