
import React, { useState } from 'react';
import './App.css';

function App() {



  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');

  const handleInputChange1 = (event) => {
    setInput1(event.target.value);
  };

  const handleInputChange2 = (event) => {
    setInput2(event.target.value);
  };

  const handleButtonClick = () => {
    
    console.log(`Director Name: ${input1},Movie Name: ${input2}`);
  };








  return (
    <div className="App" style={{ backgroundColor: 'white', padding: '80px' }}>
      <h2>Director And Movies</h2>
      <div>

        <br />

        <label>Director Name:</label>
        <input type="text" value={input1} onChange={handleInputChange1} style={{backgroundColor: 'lightgrey'}} />
      
        
      </div>
      <div>

        <br />

        <label>Movie Name:</label>
        <input type="text" value={input2} onChange={handleInputChange2} style={{backgroundColor: 'lightgrey'}} />
      </div>
      <div>

        <br />

        <button onClick={handleButtonClick} style={{backgroundColor: 'green', color: 'white'}}>Add</button>
       <br />
       <br />
        <button onClick={handleButtonClick} style={{backgroundColor:'red', color: 'white'}}>Remove</button>
      </div>
    </div>
  );
}

export default App;
