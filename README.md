# pokedex

List of content

1. Project Definition
2. Minimum Requirements
3. Extra Requirements Included
4. Development Documentation
5. Development Process


1. PROJECT DEFINITION

Developing a Pokédex in React with the Pokémon API: https://pokeapi.co/api/v2/pokemon.



2. MINIMUM REQUIREMENTS

Views: 
- List view of Pokémons. This list will be presented in two different formats: list and grid. The user will be free to switch between each one.
- Detailed view of a selected Pokémon.

Pokémons Presentation:
Since there are over 1000 Pokémons, pagination has been included. There will be a total of 12 Pokémons per page.

Content Structure:
The proposed structure has been designed and adapted to the content.

Themes:
There will be two themes: one dark and one light.



3. EXTRA REQUIREMENTS INCLUDED

Responsive navigation.

SCSS Variables: Sass variables have been used to facilitate style updates and were chosen for consistency across the entire project, as other Sass elements have also been used.



4. DEVELOPMENT DOCUMENTATION

- To start the Pokédex project, I have used this tutorial: https://www.youtube.com/watch?v=BVQrG-Bp-94. From it, I have extracted the creation of the `ThemeContext` provider and `ThemeProvider`, the initial structure of the home page, and the way to render the content of the inner Pokémon page. The CSS is not based on the model in the video; it has been created exclusively for this application.
- useContext: https://www.youtube.com/watch?v=Ae33_gdJgnQ
- Promise: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
- Async functions: https://developer.mozilla.org/es/docs/Learn/JavaScript/Asynchronous/Introducing
& https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction 
- Loader for async https://www.npmjs.com/package/react-loader-spinner
- Pagination: https://www.freecodecamp.org/news/build-a-custom-pagination-component-in-react/, https://www.simplilearn.com/tutorials/reactjs-tutorial/pagination-in-reactjs#:~:text=Pagination%20in%20React%20JS%20is,make%20group%20requests%20for%20data.
- Dark/light themes: https://www.youtube.com/watch?v=VzF2iTTc0MA
- useNavigate: https://reactrouter.com/en/main/hooks/use-navigate & https://www.geeksforgeeks.org/reactjs-usenavigate-hook/
- Clamp calculation: https://www.fluid-type-scale.com

5. DEVELOPMENT PROCESS

Phase 1:
In the first phase of development, the React project with Vite has been launched, and folders have been organized to include only the files that are going to be used.

Routes have been included, the initial organization of the App.jsx file has been done, the view of Pokedex.jsx has been prepared to render the content, and the minimum viable components for this to happen (CardPokemon.jsx, PokemonList.jsx, Topbar.jsx) have been created. The context has been created (with the PokemonContext.jsx and PokemonProvider.jsx components) to connect the API to this app.


Phase 2:
In the second phase, the focus has been on displaying only 12 Pokemon during the initial load and implementing pagination for the content.
Some issues have been encountered during this process: in order to render only 12 Pokemon per page, the first set of 12 was rendered twice, and with the additional load, the first set of 12 was rendered again. To solve this, the part where getAllPokemons(12) were called was modified. It was replaced with getAllPokemons(12, offset), and marked the initial function as const getAllPokemons = async (limit, offset). This adjustment helped resolve the issue.


Phase 3: 
In the third phase, the dark/light mode was implemented using the `ThemeContext` provider. This mode was applied to the entire page in `App.jsx`. Two IDs (`#dark` and `#light`) were created, which trigger the style change depending on which mode is active. To create the switch, the `react-switch` package was installed.
The toggle switch was added to the topbar component, and the `ThemeProvider` is set up in `App.jsx`.


Phase 4:
For this phase, the list / grid views were created for the homepage. This feature has been based on the dark/light mode code. This functionality works by toggling a class on the div that contains all the Pokemon cards, which determines whether the grid or list styles are applied and changes how the cards are displayed.


Phase 5:
In the fifth phase, "Scroll to Top" component was added to the code. This component allows to scroll back to the top of the page with a single click when users navigate throught pages. It has been implemented and has worked as intended but it has stopped working. It needs to be checked again.


Phase 6:
Implementation of the feature that allows returning to the initial view of the homepage (from Pokémon number 1) by clicking on the Pokedex logo. This feature has been implemented in the topbar.


Phase 7:
Creation of the Pokémon detail page and the Loader component to make async functions work. Some scss styles have been added to the homepage and the topbar.

Phase 8:
Change of the Loader component. It has been replaced with React Spinners and the local component has been removed.

Phase 9: 
Styles and final touches added. 



