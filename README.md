# Overview

This provides a keypad for entering a word in t9 input format.
To enter a number please use the keypad (click only)
The possible letter permutations will be displayed in a list.

The resulting list will be retrieved automatically from the backend
API with a slight delay to allow for finished input.

# Build progress

1. Create React app bootstrapped project

1. added Axios for api call

1. Connects to the t9 phoneword backend API.

1. Visual Keypad for input has been added (with CSS)

1. Project structure enhanced

1. Keypad split into components and event handling added

1. redux added (not hooked through)

1. Backspace button added

# Tech stack

1. ReactJS
1. Axios
1. Redux
1. Javascript
1. CSS
1. HTML

I used functional components in React with Hooks and the
latest version of React (v17.0.1 currently).

# Development points

1. Would need full testing before deployment (Jest / react-testing-library)
1. Not ready for deployment. Only configured for local hosting

# React frontend future improvements

1. Add validation to the input
1. Add full error handling
1. Hook up the Redux properly (Due to time I am demonstrating knowledge of 
how redux works without full implementation)
1. Add some more colour / CSS styling / UI
1. Add keypress event handling to allow the user to type
1. Extend to allow full messages
1. Make the app responsive (Grid / Flexbox / media queries)
1. Add more useful messaging when the API call does
   not return as expected (Currently will just display "Fetching result")
