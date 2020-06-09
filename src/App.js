import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <strong>Hello, Asif!</strong>
      <marquee>
        React is a UI library created by Facebook. It helps you create interactive web applications made up of components. If you’re familiar with HTML, you can think of components as fancy custom tags. That’s pretty much what they are: reusable bits of content and behavior that can be put on a web page. A component is written as a plain JavaScript function. And this is real JavaScript here, not a template language. React supports a special syntax called JSX, which looks a lot like HTML, but it is turned into real JavaScript code by a compiler.
      </marquee>
      <ul>
        <li>{1 + 2}</li>
        <li>{3 + 4}</li>
        <li>{5 + 6}</li>
        <li>{7 + 8}</li>
        <li>{9 + 10}</li>
      </ul>
      <p className='welcome'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae sem ultricies, sollicitudin eros vel, aliquet enim. Nam augue ex, dignissim eu leo nec, mattis sollicitudin nunc. Aliquam sed fermentum lorem. Sed tristique massa et purus accumsan faucibus. Nullam ut eros nec diam congue sagittis et vitae arcu. Morbi nec nunc justo. Etiam non elit vitae lectus euismod ullamcorper venenatis at ex. Suspendisse potenti.
      </p>
    </div>
  );
}

export default App;
