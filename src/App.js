import React, { useState } from 'react';
import './App.css';
import './index.css';

function App() {
  // Making state of our application
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);

  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState('');

  let calcBmi = (event) => {
    // prevent submitting to the server
    event.preventDefault();
    console.log(event);

    if(weight === 0 || height === 0){
      alert('Please enter a valid weight and height');
    } else {
      let bmi = (weight / (height * height) * 703);
      setBmi(bmi.toFixed(1));
      // LOGIC FOR SHOWING MESSAGE

      if(bmi < 25){
        setMessage('You are underweight');
      }else if(bmi >= 25 && bmi < 30){
        setMessage('You are overweight');
      }
    }
  }

  let reload = () => {
    window.location.reload()
  }

  return (
    <div className="app">
      <div className='container'>
        <h2 className='center'>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (lbs)</label>
            <input type='text' placeholder='Enter Weight value' value={weight} onChange={(e)=> setWeight(e.target.value)} ></input>
          </div>

          <div>
            <label>Height (in)</label>
            <input type='text' placeholder='Enter Height value' value={height} onChange={(e)=> setHeight(e.target.value)} ></input>
          </div>

          <div>
            <button className='btn' type='submit'> Submit</button>
            <button className='btn btn-outline' type='submit' onClick={reload}>Reload</button>
          </div>
        </form>
        <div>
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
