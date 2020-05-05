import React from 'react';

function App() {
  return (
    <div className="App">
      {window.innerWidth <= 1024 &&
        <h1>brewDog stuff</h1>
      } { window.innerWidth > 1024 &&
          <h1>You asked for a mobile solution. Tudilu. &lt;3</h1> 
      }
      
    </div>
  );
}

export default App;
