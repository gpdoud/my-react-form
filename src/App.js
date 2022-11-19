import { useState } from 'react';

function App() {
  const [ inputs, setInputs ] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  return (
    <form onSubmit={handleSubmit}>
        <label>Name:
          <input type="text" 
                  name="username" 
                  value={inputs.username || ""} 
                  onChange={handleChange} />
        </label>
        <label>Age:
          <input type="number" 
                  name="age" 
                  value={inputs.age || ""} 
                  onChange={handleChange} />
        </label>
        <label>Amount:
          <input type="number" 
                  name="amount" 
                  value={inputs.amount || 0} 
                  onChange={handleChange} />
        </label>
        <input type="submit" />
    </form>
  );
  
}


export default App;
