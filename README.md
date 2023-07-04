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
In the second phase, I focused on displaying only 12 Pokemon during the initial load and implementing pagination for the content.
I encountered some issues during this process. In order to render only 12 Pokemon per page, the first set of 12 was rendered twice, and with the additional load, the first set of 12 was rendered again. To solve this, I modified the part where getAllPokemons(12) was called. I replaced it with getAllPokemons(12, offset), and I marked the initial function as const getAllPokemons = async (limit, offset). This adjustment helped resolve the issue.


Phase 3: 
In the third phase, I the dark/light mode has been implemented using the `ThemeContext` provider. This mode was applied to the entire page in `App.jsx`. Two IDs (`#dark` and `#light`) were created, which trigger the style change depending on which mode is active. To create the switch, I installed the `react-switch` package.
The toggle switch was added to the topbar component, and the `ThemeProvider` is set up in `App.jsx`.


Phase 4:
For this phase, I created the list and grid views for the homepage. I based this feature on the dark/light mode to implement a combination of grid and list views. This functionality works by toggling a class on the div that contains all the Pokemon cards, which determines whether the grid or list styles are applied and changes how the cards are displayed.


Phase 5:
In the fifth phase, I created a "Scroll to Top" component. This component allows users to scroll back to the top of the page with a single click. It has been implemented and has worked as intended but sometimes it fails, it needs to be checked again.


Phase 6:
Implementation of the feature that allows returning to the initial view of the homepage (from Pokémon number 1) by clicking on the Pokedex logo. This feature has been implemented in the topbar.


Phase 7:
Creation of the Pokémon detail page and the Loader component to make async functions work. Some scss styles have been added to the homepage and the topbar.

Phase 8:
Change of the Loader component. It has been replaced with React Spinners and the local component has been removed.



