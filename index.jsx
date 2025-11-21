import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from "./Menu/Menu";
import MenuButton from './Menu/MenuButton';
import MenuDropdown from './Menu/MenuDropdown';
/**
 * Challenge:
 * 1. Convert the Menu component to use props.children 
 *    instead of taking an `items` prop. (We'll update 
 *    the MenuButton and MenuDropdown components later.) 
 *    See note inside the Menu.js file for more info
 * 
 * 2. import MenuButton and MenuDropdown into THIS file
 *    and render them as children of the Menu component. 
 *    Remember to pass the buttonText and items array to 
 *    the components that need those props to function.
 *    (We'll also be updating that soon!)
 */

function App() {
  return (
    <Menu>
      <MenuButton buttonText="Sports" />
      < MenuDropdown items={["Tennis", "Pickleball", "Racquetball", "Squash"]} />

    </Menu>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);