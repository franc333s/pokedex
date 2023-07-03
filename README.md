# pokedex

List of content

1. Project Definition
2. Minimum Requirements
3. Extra Requirements Included
4. Development Documentation
5. Development Process


1. PROJECT DEFINITION

2. MINIMUM REQUIREMENTS

Views: 
- List view of Pokemons. This list must be presented in two different formats: list and card. The user must be free to switch between each one.
- Detail view of a selected Pokemon.

Pokemons Presentation:
Since there are over 1000 Pokemons, pagination is required. There will be a total of 30 Pokemons per page.

Content Structure:
There is not a proposed structer therefore it must be designed by the developer.

Themes:
There will be two themes: one dark and one light.



3. EXTRA REQUIREMENTS INCLUDED

Responsive navigation:

Favorite Pokemons:
- Mark Pokemons as favorites.
- A view to check favorite Pokemons.
- Keep Pokemons as favorites even when reloading the app.

SCSS Variables: Sass variables have been used to facilitate code updates and were chosen for consistency across the entire project, as other Sass elements have also been used.


4. DEVELOPMENT DOCUMENTATION

- useContext: https://www.youtube.com/watch?v=Ae33_gdJgnQ
- Promise: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
- Async functions: https://developer.mozilla.org/es/docs/Learn/JavaScript/Asynchronous/Introducing
& https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction
- Pagination: https://www.freecodecamp.org/news/build-a-custom-pagination-component-in-react/, https://www.simplilearn.com/tutorials/reactjs-tutorial/pagination-in-reactjs#:~:text=Pagination%20in%20React%20JS%20is,make%20group%20requests%20for%20data.

- Dark/light themes: https://www.youtube.com/watch?v=VzF2iTTc0MA


5. DEVELOPMENT PROCESS

Phase 1:
In the first phase of development, the React project with Vite has been launched, and folders have been organized to include only the files that are going to be used.

Routes have been included, the initial organization of the App.jsx file has been done, the view of Pokedex.jsx has been prepared to render the content, and the minimum viable components for this to happen (CardPoke  mon.jsx, PokemonList.jsx, Topbar.jsx) have been created. The context has been created (with the PokemonContext.jsx and PokemonProvider.jsx components) to connect the API to this app.


Phase 2:

